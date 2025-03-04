// import { NextResponse } from "next/server"
// import mailgun from "mailgun-js"

// const API_KEY = process.env.MAILGUN_API_KEY || ""
// const DOMAIN = process.env.MAILGUN_DOMAIN || ""

// // Initialize with your domain and API key
// const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN })

// export async function POST(request: Request) {
//   const { email, documentType, fileName } = await request.json()

//   const data = {
//     from: `Clik.ai <noreply@${DOMAIN}>`,
//     to: email,
//     subject: "Document Received - Clik.ai",
//     text: `We have received your ${documentType}${fileName ? ` (${fileName})` : ""}. Our team is working on it and will update you soon.`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
//         <div style="text-align: center; margin-bottom: 20px;">
//           <img src="https://clik.ai/logo.png" alt="Clik.ai Logo" style="max-width: 150px;">
//         </div>
//         <h2 style="color: #333; text-align: center;">Document Received</h2>
//         <p style="color: #666; font-size: 16px; line-height: 1.5;">
//           We have received your ${documentType}${fileName ? ` (${fileName})` : ""}.
//         </p>
//         <p style="color: #666; font-size: 16px; line-height: 1.5;">
//           Our team is working on it and will update you soon.
//         </p>
//         <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; color: #999; font-size: 12px; text-align: center;">
//           <p>© ${new Date().getFullYear()} Clik.ai. All rights reserved.</p>
//         </div>
//       </div>
//     `,
//   }

//   try {
//     const response = await new Promise((resolve, reject) => {
//       mg.messages().send(data, (error, body) => {
//         if (error) reject(error)
//         else resolve(body)
//       })
//     })

//     console.log("Email sent successfully:", response)
//     return NextResponse.json({ success: true, message: "Email sent successfully" })
//   } catch (error) {
//     console.error("Error sending email:", error)
//     console.error("Error details:", JSON.stringify(error, null, 2))
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email",
//         error: error instanceof Error ? error.message : String(error),
//       },
//       { status: 500 },
//     )
//   }
// }

