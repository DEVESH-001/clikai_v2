// // pages/api/chat.ts
// import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";
// import { WEBSITE_CONTEXT, SYSTEM_PROMPT } from "@/lib/chat-context";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export async function POST(req: Request) {
//   try {
//     const { userInput } = await req.json();

//     const completion = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: SYSTEM_PROMPT,
//         },
//         {
//           role: "system",
//           content: WEBSITE_CONTEXT,
//         },
//         {
//           role: "user",
//           content: userInput,
//         },
//       ],
//     });

//     return NextResponse.json({
//       response:
//         completion.data.choices[0].message?.content ||
//         "Sorry, I couldn't process that.",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
      {
        role: "system",
        content: `You are a helpful assistant. Answer the questions based on the content from the following websites: https://clikai-v2.vercel.app/, https://www.clik.ai/`,
      },
      {
        role: "user",
        content: userInput,
      },
      ],
    });

    return NextResponse.json({
      response:
        completion.data.choices[0].message?.content ||
        "Sorry, I couldn't process that.",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

