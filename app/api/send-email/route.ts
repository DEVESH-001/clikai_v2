import { NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { sanitizeFileName, validateFile } from "@/lib/file-validation";
import { uploadRateLimiter } from "@/lib/rate-limits";


async function sendMail(email: string, documentType: string, files: File[]) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Sanitize document type
  const sanitizedDocumentType = documentType.replace(/[^a-zA-Z0-9 ]/g, "");

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
  });

  const domain = process.env.MAILGUN_DOMAIN || "clik.ai";
  const fromEmail = "hitesh@clik.ai";

  // Process and validate each file
  const attachments = await Promise.all(
    files.map(async (file) => {
      // Validate file
      const validation = validateFile(file);
      if (!validation.valid) {
        throw new Error(`File validation failed: ${validation.error}`);
      }

      // Sanitize filename
      const sanitizedFilename = sanitizeFileName(file.name);

      return {
        data: Buffer.from(await file.arrayBuffer()),
        filename: sanitizedFilename,
        contentType: file.type,
      };
    })
  );

  const messageData = {
    from: fromEmail,
    to: [email],
    subject: `Document Received - ${sanitizedDocumentType}`,
    text: `We have received your files. Our team is working on it and will update you soon.`,
    attachment: attachments,
  };

  try {
    return await mg.messages.create(domain, messageData);
  } catch (error) {
    console.error("Mailgun error:", error);
    throw new Error(
      `Mailgun error: ${
        error instanceof Error ? error.message : "An unknown error occurred"
      }`
    );
  }
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    const rateLimitResult = uploadRateLimiter.check(ip);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit exceeded. Try again after ${new Date(
            rateLimitResult.resetTime
          ).toLocaleTimeString()}`,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.resetTime.toString(),
          },
        }
      );
    }

    const formData = await request.formData();

    // Validate required fields
    const email = formData.get("email") as string;
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const documentType = formData.get("documentType") as string;
    if (!documentType) {
      return NextResponse.json(
        { success: false, error: "Document type is required" },
        { status: 400 }
      );
    }

    const files: File[] = [];

    // Get and validate files
    const operatingStatementFile = formData.get(
      "operatingStatementFile"
    ) as File;
    const rentRollFile = formData.get("rentRollFile") as File;

    if (!operatingStatementFile || !rentRollFile) {
      return NextResponse.json(
        {
          success: false,
          error: "Both operating statement and rent roll files are required",
        },
        { status: 400 }
      );
    }

    // Validate each file
    for (const file of [operatingStatementFile, rentRollFile]) {
      const validation = validateFile(file);
      if (!validation.valid) {
        return NextResponse.json(
          { success: false, error: validation.error },
          { status: 400 }
        );
      }
      files.push(file);
    }

    const responseData = await sendMail(email, documentType, files);
    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Error sending email:", errorMessage);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

//OLD
// import { NextResponse } from "next/server";
// import FormData from "form-data";
// import Mailgun from "mailgun.js";

// async function sendMail(email: string, documentType: string, files: File[]) {
//   const mailgun = new Mailgun(FormData);
//   const mg = mailgun.client({
//     username: "api",
//     key: process.env.MAILGUN_API_KEY || "key-fec2c1a121c9b0751e9c596a04f391ac",
//   });

//   const domain = process.env.MAILGUN_DOMAIN || "clik.ai";
//   const fromEmail = "hitesh@clik.ai";

//   const attachments = await Promise.all(
//     files.map(async (file) => ({
//       data: Buffer.from(await file.arrayBuffer()),
//       filename: file.name,
//     }))
//   );

//   const messageData = {
//     from: fromEmail,
//     to: [email],
//     subject: `Document Received - ${documentType}`,
//     text: `We have received your files. Our team is working on it and will update you soon.`,
//     attachment: attachments,
//   };

//   try {
//     return await mg.messages.create(domain, messageData);
//   } catch (error) {
//     console.error("Mailgun error:", error);
//     throw new Error(
//       `Mailgun error: ${
//         error instanceof Error ? error.message : "An unknown error occurred"
//       }`
//     );
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const formData = await request.formData(); // Use formData to get the data
//     const email = formData.get("email") as string;
//     const documentType = formData.get("documentType") as string;

//     const files: File[] = [];
//     // Collect files based on specific keys
//     const operatingStatementFile = formData.get(
//       "operatingStatementFile"
//     ) as File;
//     const rentRollFile = formData.get("rentRollFile") as File;

//     if (operatingStatementFile) {
//       files.push(operatingStatementFile);
//     }
//     if (rentRollFile) {
//       files.push(rentRollFile);
//     }

//     const responseData = await sendMail(email, documentType, files);
//     return NextResponse.json(
//       { success: true, data: responseData },
//       { status: 200 }
//     );
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "An unknown error occurred";
//     console.error("Error sending email:", errorMessage); // Log the error
//     return NextResponse.json(
//       { success: false, error: errorMessage },
//       { status: 500 }
//     );
//   }
// }
