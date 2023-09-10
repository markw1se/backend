const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth'); 

const LinksController = require('../controllers/links.controller');

router.get("/", checkAuth, LinksController.links_get_all);

module.exports = router;
