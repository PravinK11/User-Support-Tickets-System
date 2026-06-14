const TicketModel = require("../models/ticketModel");

const createTicket = async (req, res) => {
    try {
        const {
            title,
            description,
            user_id
        } = req.body;

        const result = await TicketModel.createTicket(
            title,
            description,
            user_id
        );

        res.status(201).json({
            success: true,
            message: "Ticket created successfully",
            ticketId: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getTicketsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const tickets =
            await TicketModel.getTicketsByUserId(userId);

        res.status(200).json({
            success: true,
            data: tickets
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getTicketById = async (req, res) => {
    try {
        const { ticketId } = req.params;

        const ticket =
            await TicketModel.getTicketById(ticketId);

        if (!ticket) {
            return res.status(404).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            data: ticket
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTicket,
    getTicketsByUserId,
    getTicketById
};