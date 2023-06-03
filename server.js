const dotenv = require("dotenv").config();
const dbConnect = require("./app/config/database.config");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;
const authRouter = require("./app/routes/auth.routes.js");
const { notFound, errorHandler } = require("./app/middlewares/errorHandler");

dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
