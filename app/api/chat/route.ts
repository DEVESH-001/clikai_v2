//chatgpt api route
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import * as cheerio from "cheerio";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to fetch website content
async function fetchWebsiteContent(url: string): Promise<string> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return $("body").text().replace(/\s+/g, " ").trim(); // Extract body text
  } catch (error) {
    console.error("Error fetching website content:", error);
    return "Website content could not be fetched.";
  }
}

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();
    
    // Fetch content from our website
    const websiteContent = await fetchWebsiteContent("https://clikai-v2.vercel.app/");

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant. Answer the user's questions strictly based on the following website content: "${websiteContent}". Do not provide any information that is not available in this content.`,
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
