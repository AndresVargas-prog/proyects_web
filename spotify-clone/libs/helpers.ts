import { Price } from "@/types"

export const getUrl = () => {
    let url = process.env.NEXT_PUBLIC_URL ?? 
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    'http://localhost:3000/';

    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
}

export const postData = async ({url,data}: {url: string, data: Price}) => {
    console.log('POST REQUEST:', url, data);

    const res: Response = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    if(!res.ok) throw new Error(res.statusText);

    return res.json();
}

export const toDateTime = (secs: number) => {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}