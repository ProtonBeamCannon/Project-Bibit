import { preloadData } from '$app/navigation';

export async function load({ url, }) {
    console.log('load', url.pathname === '/');
    if (url.pathname === '/') {
        await preloadData('/a');
        console.log('Am i running?');
  }
}
