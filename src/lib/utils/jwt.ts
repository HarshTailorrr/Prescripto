import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  [key: string]: any;
  id?: string;
  userId?: string;
  user_id?: string;
}

export function decodeToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

export function getUserIdFromToken(token: string): string | null {
  const decoded = decodeToken(token);
  if (decoded) {
    return decoded.id || decoded.userId || decoded.user_id || null;
  }
  return null;
}
