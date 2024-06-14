const express = require("express");
const cors = require("cors");
const authRoutes = require('./routes/auth');
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Successfull");
    })
    .catch((err) => {
        console.error(err.message);
    }
);

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`)
});

