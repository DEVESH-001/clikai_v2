import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const secret = req.headers.get("x-webhook-secret");

  // Verify the webhook secret
  if (secret !== process.env.WORDPRESS_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate the blog index page
    revalidatePath("/blog");

    // Revalidate the specific blog post
    if (body.post && body.post.slug) {
      revalidatePath(`/blog/${body.post.slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
