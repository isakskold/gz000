import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  try {
    const contactFile = path.join(process.cwd(), "content/contact/contact.md");
    const file = fs.readFileSync(contactFile, "utf8");
    const { data } = matter(file);
    const contactData = data;
    return new Response(JSON.stringify(contactData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to load contact data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to load contact data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
