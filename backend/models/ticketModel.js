const db = require("../config/db");

const createTicket = async (
    title,
    description,
    userId
) => {
    const [result] = await db.query(
        `INSERT INTO tickets
        (title, description, user_id)
        VALUES (?, ?, ?)`,
        [title, description, userId]
    );

    return result;
};

const getTicketsByUserId = async (userId) => {
    const [rows] = await db.query(
        "SELECT * FROM tickets WHERE user_id = ?",
        [userId]
    );

    return rows;
};

const getTicketById = async (ticketId) => {
    const [rows] = await db.query(
        "SELECT * FROM tickets WHERE ticket_id = ?",
        [ticketId]
    );

    return rows[0];
};

module.exports = {
    createTicket,
    getTicketsByUserId,
    getTicketById
};