const express = require("express");
require("dotenv").config();

const pool = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const responseRoutes = require("./routes/responseRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/tickets", ticketRoutes);
app.use("/responses", responseRoutes);

// Health Check Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Customer Support Ticket API Running"
    });
});

const PORT = process.env.PORT || 8080;

(async () => {
    try {
        await pool.query("SELECT 1");

        console.log("Database Connected Successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
})();