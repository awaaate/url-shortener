import validUrl from "valid-url";
export function urlValidation(url: any) {
    if (typeof url !== "string" || !url || url.length < 2) {
        return false;
    }
    return true;
}
