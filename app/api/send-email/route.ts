import { NextResponse } from "next/server";
import FormData from "form-data";
import Mailgun from "mailgun.js";

async function sendMail(email: string, documentType: string, files: File[]) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-fec2c1a121c9b0751e9c596a04f391ac",
  });

  const domain = process.env.MAILGUN_DOMAIN || "clik.ai";
  const fromEmail = "hitesh@clik.ai";

  const attachments = await Promise.all(
    files.map(async (file) => ({
      data: Buffer.from(await file.arrayBuffer()), // Convert to Buffer
      filename: file.name, // Use the original file name
    }))
  );

  const messageData = {
    from: fromEmail,
    to: [email],
    subject: `Document Received - ${documentType}`,
    text: `We have received your files. Our team is working on it and will update you soon.`,
    attachment: attachments, // Use the attachments array
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
    const formData = await request.formData(); // Use formData to get the data
    const email = formData.get("email") as string;
    const documentType = formData.get("documentType") as string;

    const files: File[] = [];
    // Collect files based on specific keys
    const operatingStatementFile = formData.get(
      "operatingStatementFile"
    ) as File;
    const rentRollFile = formData.get("rentRollFile") as File;

    if (operatingStatementFile) {
      files.push(operatingStatementFile);
    }
    if (rentRollFile) {
      files.push(rentRollFile);
    }

    const responseData = await sendMail(email, documentType, files);
    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Error sending email:", errorMessage); // Log the error
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import FormData from "form-data";
// import Mailgun from "mailgun.js";

// async function sendMail(email: string, documentType: string, files: File[]) {
//   const mailgun = new Mailgun(FormData);
//   const apiKey = process.env.MAILGUN_API_KEY;

//   if (!apiKey) {
//     throw new Error("Mailgun API key is required.");
//   }

//   const mg = mailgun.client({
//     username: "api",
//     key: apiKey,
//   });

//   const domain = process.env.MAILGUN_DOMAIN || "clik.ai";
//   const fromEmail = "hitesh@clik.ai";

//   const attachments = await Promise.all(
//     files.map(async (file) => ({
//       data: Buffer.from(await file.arrayBuffer()), // Convert to Buffer
//       filename: file.name, // Use the original file name
//     }))
//   );

//   const messageData = {
//     from: fromEmail,
//     to: [email],
//     subject: `Document Received - ${documentType}`,
//     text: `We have received your ${documentType}. Our team is working on it and will update you soon.`,
//     attachment: attachments, // Use the attachments array
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
