/**
 * Layout modularity config  -  per-route control for Navbar and Footer.
 * Add paths to suppress layout elements for full-screen or app-style pages.
 */
export const LAYOUT_CONFIG = {
  /** Routes that hide the Footer (minimal layout: nav only) */
  noFooterPaths: ["/maintenance", "/build", "/builds"] as const,
} as const;

export function shouldShowFooter(pathname: string | null): boolean {
  if (!pathname) return true;
  return !LAYOUT_CONFIG.noFooterPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
}
