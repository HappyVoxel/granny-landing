import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import type { DB } from '@/lib/db-types';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

declare global {
  // `var` is required here: let/const don't create properties on globalThis,
  // so the singleton below wouldn't survive a hot reload.
  var db: Kysely<DB> | undefined;
}

const db =
  global.db ||
  new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({ connectionString }),
    }),
  });

if (process.env.NODE_ENV === 'development') {
  global.db = db;
}

export { db };
