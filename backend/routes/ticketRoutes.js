const express = require("express");
const router = express.Router();

const {
    createTicket,
    getTicketsByUserId,
    getTicketById
} = require("../controllers/ticketController");

router.post("/", createTicket);

router.get("/user/:userId", getTicketsByUserId);

router.get("/:ticketId", getTicketById);

module.exports = router;