import pgPromise, { IDatabase, IMain } from 'pg-promise';

export class Database {
  private db: IDatabase<any>;
  private pgp: IMain;

  constructor() {
      this.pgp = pgPromise();
      this.db = this.pgp(process.env.DATABASE_URL as string);
  }

  public async query(text: string, params?: any[]): Promise<any> {
      try {
          return await this.db.any(text, params);
      } catch (error) {
          console.error('Error executing query', error);
          throw error;
      }
  }

  public async close(): Promise<void> {
      this.pgp.end();
  }
}