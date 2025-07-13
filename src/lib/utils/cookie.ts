export function setCookie(name: string, value: string, options: { maxAge?: number; path?: string; }) {
  if (typeof document === 'undefined') return;
  const { maxAge = 60 * 60 * 24 * 7, path = '/' } = options;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=${path}; max-age=${maxAge}; SameSite=Strict`;
}

export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
}

export function removeCookie(name: string, options: { path?: string; } = {}) {
  if (typeof document === 'undefined') return;
  const { path = '/' } = options;
  document.cookie = `${name}=; path=${path}; max-age=0; SameSite=Strict`;
}
