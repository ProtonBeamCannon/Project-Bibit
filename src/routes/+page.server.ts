import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch('/b')
    return {
        message: await res.text()
    };
}) satisfies PageServerLoad;



