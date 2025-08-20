const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const event = new Event({ title, description, date, createdBy: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
