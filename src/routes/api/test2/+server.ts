import { Test2 } from ".";

export const POST = Test2.buildPostApi(async (body) => {
    const delay = Math.floor(Math.random() * 5000) + 5000;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return body;
});
