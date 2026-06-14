const db = require("../config/db");


const getUserById = async (userId) => {
    const [rows] = await db.query(
        "SELECT * FROM users WHERE user_id = ?",
        [userId]
    );

    return rows[0];
};

const getAllUsers = async () => {
    const [rows] = await db.query(
        "SELECT * FROM users"
    );
    return rows;
};

const createUser = async (username, email) => {
    const [result] = await db.query(
        "INSERT INTO users (username, email) VALUES (?, ?)",
        [username, email]
    );

    return result;
};

const deleteUser = async (userId) => {
    const [result] = await db.query(
        "DELETE FROM users WHERE user_id = ?",
        [userId]
    );

    return result;
};

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById
};