// services/userService.js
const pool = require("../Config");

const getUsers = async() => {
    try {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    } catch (err) {
        throw new Error("Error fetching users");
    }
};

const createUser = async(name, email) => {
    try {
        const result = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]
        );
        return result.rows[0]; // Returning the created user
    } catch (err) {
        throw new Error("Error creating user");
    }
};

module.exports = { getUsers, createUser };