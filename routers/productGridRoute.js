const express = require('express');
const {getPoductGridController} = require('../controllers/productGridController');
const router = express.Router();

// user all routes
router.get("/productlist", getPoductGridController);

module.exports = router;