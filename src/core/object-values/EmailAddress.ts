export class EmailAddress {
  private email: string;

  constructor(email: string) {
      if (!this.validateEmail(email)) {
          throw new Error('Invalid email address');
      }
      this.email = email;
  }

  private validateEmail(email: string): boolean {
      // Regex básico para validação de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  public getValue(): string {
      return this.email;
  }
}