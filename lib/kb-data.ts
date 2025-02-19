import kbJson from '@/knowledgeBase.json';

// Process the knowledge base into a more usable format
export const kbData = kbJson.map(item => ({
  title: item.title,
  url: item.url,
  // Clean up HTML and extract text content
  content: item.html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
})); 