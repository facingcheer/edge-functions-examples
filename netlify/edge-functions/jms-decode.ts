import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(
    "https://jmssub.net/members/getsub.php?service=442420&id=e6ecc0b5-2a4d-43ba-8ee8-383d67d7ca41",
  );

  // Look for the query parameter, and return if we don't find it
  if (url.searchParams.get("method") !== "transform") {
    return;
  }

  context.log(`Transforming the response from this ${url}`);

  const response = await context.next();

  const text = await response.text();
  return new Response(atob(text), response);
};
