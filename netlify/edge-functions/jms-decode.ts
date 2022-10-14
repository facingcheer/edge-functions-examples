import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const joke = await fetch(
    "https://jmssub.net/members/getsub.php?service=442420&id=e6ecc0b5-2a4d-43ba-8ee8-383d67d7ca41",
    {
      headers: {},
    },
  );
  const textData = await joke.text();
  return new Response(atob(textData));
};
