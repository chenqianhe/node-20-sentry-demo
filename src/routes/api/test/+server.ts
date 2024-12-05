import type { RequestEvent } from "@sveltejs/kit";

export const POST = async ({ request }: RequestEvent) => {
    await request.json();
    const delay = Math.floor(Math.random() * 5000) + 5000;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return new Response("Hello, world!");
};
