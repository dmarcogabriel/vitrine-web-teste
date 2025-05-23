import {randomBytes, scryptSync} from 'node:crypto';

export class Password {
  private static hashPassword(password: string, salt: string): string {
    const buf = scryptSync(password, salt, 64) as Buffer;

    return buf.toString('hex');
  }

  static toHash(password: string): string {
    const salt = randomBytes(8).toString('hex');

    const hashedPassword = this.hashPassword(password, salt);

    return `${hashedPassword}.${salt}`;
  }

  static compare(storedPassword: string, suppliedPassword: string): boolean {
    const [hashedPassword, salt] = storedPassword.split('.');

    return this.hashPassword(suppliedPassword, salt) === hashedPassword;
  }
}
