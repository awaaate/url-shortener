const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
    ""
);
export function base64(id: number) {
    let shortedUrl = "";
    while (id) {
        shortedUrl += chars[id % 62];
        id = Math.floor(id / 62);
    }
    return shortedUrl;
}
export function parseBase64(short: string) {
    let charsArray = short.split("");
    let id = 0;
    for (let i = charsArray.length - 1; i >= 0; i--) {
        id = id * 62 + chars.indexOf(charsArray[i]);
    }
    return id;
}
export function makeShort(id: number) {
    const shorted = base64(id);
    return process.env.NEXT_PUBLIC_DOMAIN + "/" + shorted;
}
