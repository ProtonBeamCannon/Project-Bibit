import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response('Hello from /a');
};