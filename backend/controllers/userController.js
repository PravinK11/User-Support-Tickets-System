const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.getUserById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email } = req.body;

        const result = await UserModel.createUser(
            username,
            email
        );

        res.status(201).json({
            success: true,
            message: "User created successfully",
            userId: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await UserModel.deleteUser(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};