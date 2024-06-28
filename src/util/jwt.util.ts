import * as jwt from 'jsonwebtoken';

export function generateToken(payload: object, secret: string, expiresIn: string): string {
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token: string, secret: string): any {
  return jwt.verify(token, secret);
}
