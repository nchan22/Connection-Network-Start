// Require express router
const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../controllers/users-controller');

