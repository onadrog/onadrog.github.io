const base = import.meta.env.BASE_URL;

export function getSiteURl(
    url: string | URL,
    b?: string | URL | undefined
): URL {
    return new URL(`${base === "/" ? "" : base}${url}`, b);
}
