import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private sqlite!: SQLiteConnection;
  private db!: SQLiteDBConnection;

  constructor() {this.initializePlugin() }

  private async initializePlugin() {
    try {
      this.sqlite = new SQLiteConnection(CapacitorSQLite);
    } catch (e) {
      console.error('Unable to initialize SQLite plugin', e);
    }

    
  }

  public async openDatabase() {
    try {
      this.db = await this.sqlite.createConnection("UsuarioDb", false, 'no-encryption', 1, false);
      await this.db.open();
      await this.creatTabla();
    } catch (e) {
      console.error('Unable to open database', e);
    }
  }

  public async creatTabla() {
    const query = `
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `;
    try {
      
      return await this.db.execute(query);
    } catch (e) {
      console.error('Unable to execute SQL', e);
    }
  }

  async addUser(name: string, email: string, password: string) {
    const query = `
      INSERT INTO usuario (name, email, password)
      VALUES (?, ?, ?);
    `;
    try {
      await this.db.run(query, [name, email, password]);
    } catch (e) {
      console.error('Error adding user', e);
    }
  }

  async getUsers() {
    const query = 'SELECT * FROM usuario;';
    try {
      const result = await this.db.query(query);
      return result.values;
    } catch (e) {
      console.error('Error getting users', e);
      return [];
    }
  }
}




