/**
 * Prepends Vite's base URL to an asset path.
 * In dev: BASE_URL = "/"  → "/Kregme/facade_2.jpg"
 * In prod: BASE_URL = "/pilegaard-sommerhuse/" → "/pilegaard-sommerhuse/Kregme/facade_2.jpg"
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
