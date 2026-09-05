import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import * as schema from './schema.js';

const { Pool } = pkg;

let db: any;

export async function initializeDatabase() {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    db = drizzle(pool, { schema });
    console.log('[DB] Connected to Neon PostgreSQL successfully');
    return db;
  } catch (error) {
    console.error('[DB] Failed to initialize database:', error);
    throw error;
  }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }
  return db;
}
