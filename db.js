import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function connectToDb() {
  try {
    await pool.connect();
    console.log("✅ Bazaga muvaffaqiyatli ulandi");
  } catch (error) {
    console.log("❌ Bazaga ulanishda xatolik:", error.message);
  }
}

async function init() {
  try {
    await connectToDb();

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        tgId VARCHAR(100) NOT NULL,
        tgUsername VARCHAR(100),
        phoneNumber VARCHAR(100),
        name VARCHAR(150)
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS search_logs (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        query TEXT,
        found_result BOOLEAN,
        cTime TIMESTAMP DEFAULT NOW(),
        CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    console.log("✅ Jadval(lar) muvaffaqiyatli yaratildi");
  } catch (err) {
    console.log("❌ Error occured:", err.message);
  }
}
export default pool;
init();
