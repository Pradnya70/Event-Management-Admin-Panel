const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  registeredAt: { type: Date, default: Date.now }
});

registrationSchema.index({ userId: 1, eventId: 1 }, { unique: true });

module.exports = mongoose.model("Registration", registrationSchema);
