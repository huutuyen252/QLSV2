import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
import * as schema from './schema.js';

const { Pool } = pkg;

let db: any;

export async function initializeDatabase() {
  try {
    const pool = new Pool({
      host: process.env.SQL_HOST,
      port: parseInt(process.env.SQL_PORT || '5432'),
      database: process.env.SQL_DB_NAME,
      user: process.env.SQL_ADMIN_USER,
      password: process.env.SQL_ADMIN_PASSWORD,
      ssl: process.env.SQL_SSL === 'true' ? { rejectUnauthorized: false } : false,
    });

    db = drizzle(pool, { schema });
    console.log('[DB] Database connection established');
    return db;
  } catch (error) {
    console.error('[DB] Failed to initialize database:', error);
    throw error;
  }
}

export async function seedInitialDataIfNeeded() {
  // TODO: Implement seeding logic
  console.log('[DB] Database seeding skipped');
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }
  return db;
}
