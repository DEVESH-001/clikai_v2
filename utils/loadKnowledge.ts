import fs from "fs";
import path from "path";

export function loadKnowledgeBase(): { title: string; html: string }[] {
  const filePath = path.join(process.cwd(), "knowledgeBase.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}
