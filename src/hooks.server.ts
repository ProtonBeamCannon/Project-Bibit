import '$lib/supabaseClient'


export async function handleFetch({ event, request, fetch }) {
    const url = new URL(request.url);
    if (url.pathname === '/b') {
        return await event.fetch('/a'); // fetch from the server and this works
    }

    return await fetch(request); // this doesn't work, why not?   
}