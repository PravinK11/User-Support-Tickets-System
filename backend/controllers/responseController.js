const ResponseModel = require("../models/responseModel");

const getResponsesByTicketId = async (
    req,
    res
) => {
    try {
        const { ticketId } = req.params;

        const responses =
            await ResponseModel.getResponsesByTicketId(
                ticketId
            );

        res.status(200).json({
            success: true,
            data: responses
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const addResponse = async (req, res) => {
    try {
        const { ticketId } = req.params;

        const {
            response_text,
            responded_by
        } = req.body;

        const result =
            await ResponseModel.addResponse(
                ticketId,
                response_text,
                responded_by
            );

        res.status(201).json({
            success: true,
            message: "Response added successfully",
            responseId: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getResponsesByTicketId,
    addResponse
};