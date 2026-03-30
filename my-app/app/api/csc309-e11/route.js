
export async function GET() {
  return new Response(
    `<div id="auto-tester">Hi. I am YOUR_UTORID, and I have learned how to develop a full-stack web app and deploy it!</div>`,
    { headers: { "Content-Type": "text/html" } }
  );
}