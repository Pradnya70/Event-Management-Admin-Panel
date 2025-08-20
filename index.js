const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/events", require("./routes/eventRoutes"));
app.use("/events", require("./routes/registrationRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
