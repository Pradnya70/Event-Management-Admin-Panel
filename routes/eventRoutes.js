const express = require("express");
const { createEvent, getEvents } = require("../controllers/eventController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.post("/", auth, role(["admin"]), createEvent);
router.get("/", getEvents);

module.exports = router;
