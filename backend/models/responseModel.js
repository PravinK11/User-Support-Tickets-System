const db = require("../config/db");

const getResponsesByTicketId = async (
    ticketId
) => {
    const [rows] = await db.query(
        `SELECT *
         FROM ticket_responses
         WHERE ticket_id = ?`,
        [ticketId]
    );

    return rows;
};

const addResponse = async (
    ticketId,
    responseText,
    respondedBy
) => {
    const [result] = await db.query(
        `INSERT INTO ticket_responses
        (ticket_id, response_text, responded_by)
        VALUES (?, ?, ?)`,
        [ticketId, responseText, respondedBy]
    );

    return result;
};

module.exports = {
    getResponsesByTicketId,
    addResponse
};