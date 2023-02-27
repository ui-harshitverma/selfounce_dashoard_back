const express = require('express');
const {adduserController,deleteadduserController, postadduserController} = require('../controllers/adduserController');
const router = express.Router();

// user all routes
router.get("/", adduserController);
router.post("/", deleteadduserController);
router.post('/NewJoinMember', postadduserController );

module.exports = router;
