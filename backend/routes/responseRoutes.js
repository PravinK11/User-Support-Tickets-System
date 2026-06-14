const express = require("express");
const router = express.Router();

const {
    getResponsesByTicketId,
    addResponse
} = require("../controllers/responseController");

router.get("/:ticketId", getResponsesByTicketId);

router.post("/:ticketId", addResponse);

module.exports = router;