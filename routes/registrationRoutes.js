const express = require("express");
const { registerForEvent, getEventRegistrations } = require("../controllers/registrationController");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const router = express.Router();

router.post("/:id/register", auth, registerForEvent);
router.get("/:id/registrations", auth, role(["admin"]), getEventRegistrations);

module.exports = router;
