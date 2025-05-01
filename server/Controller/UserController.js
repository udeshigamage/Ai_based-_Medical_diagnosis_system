// controllers/userController.js
const userService = require("../Service/User-service");

const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
};

const updateuser = async(req, res) => {
    try {
        const updateuser = await userService.updateuser(details, id);
        res.status(200).json({ message: "Successfully created" });
    } catch (error) {
        res.status(404).json({ message: "error" });
    }
    const { name, email, role, id } = req.body;
};
const createUser = async(req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await userService.createUser(name, email);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
};

module.exports = { getAllUsers, createUser };