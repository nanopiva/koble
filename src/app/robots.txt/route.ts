export const runtime = "edge";

export async function GET() {
  const baseUrl = "https://www.koble.com.ar";

  const robots = `
User-Agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robots.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
