/** Resolve bundled public assets under both the dev root and a hosted subpath. */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
