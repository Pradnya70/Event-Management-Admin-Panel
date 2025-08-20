const Registration = require("../models/Registration");

exports.registerForEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = new Registration({ userId: req.user.id, eventId: id });
    await registration.save();
    res.status(201).json({ msg: "Registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ msg: "Already registered for this event" });
    }
    res.status(500).json({ msg: error.message });
  }
};

exports.getEventRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ eventId: req.params.id })
      .populate("userId", "name email");
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
