import pool from './db.js';

//create new user
export async function addUser(tgId, tgUsername,phoneNumber, name) {
  const result = await pool.query(
    `INSERT INTO users (tgId, tgUsername,phoneNumber, name) 
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [tgId, tgUsername,phoneNumber, name]
  );
  return result.rows[0];
}
// get one user
export async function getUserById(id) {
  const result = await pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [id]
  );
  return result.rows[0];
}
// get user by tg id
export async function getUserByTgId(tgId) {
  const result = await pool.query(
    `SELECT * FROM users WHERE tgId = $1`,
    [tgId]
  );
  return result.rows[0];
}
// get all users
export async function getAllUsers(){
    const result  = await pool.query(
        `SELECT * FROM users`
    )
    return result.rows;
}

// Log qo‘shish
export async function addSearchLog(userId, query, foundResult) {
  const result = await pool.query(
    `INSERT INTO search_logs (user_id, query, found_result) 
     VALUES ($1, $2, $3) RETURNING *`,
    [userId, query, foundResult]
  );
  return result.rows[0];
}

// Foydalanuvchining barcha qidiruv loglarini olish
export async function getUserLogs(userId) {
  const result = await pool.query(
    `SELECT * FROM search_logs WHERE user_id = $1 ORDER BY cTime DESC`,
    [userId]
  );
  return result.rows;
}

// get all search logs
export async function getAllSearchLogs(){
    const result = await pool.query(
        `SELECT * FROM search_logs`
    )
    return result.rows;
}