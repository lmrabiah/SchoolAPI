const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const app = express();
const bodyParser = require("body-parser");
// const path = require("path");
const userRoutes = require("./routes/users");
const courseRoutes = require("./routes/course");
const subjectRoutes = require("./routes/subject");

//middlewere
// console.log("__dirname ", __dirname);

app.use(cors());

app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

////Route
app.use(userRoutes);
app.use("/course", courseRoutes);
app.use("/subjects", subjectRoutes);

// if i put wrong url for example: localhost:8000/tripssss
app.use((req, res, next) => {
  console.log("Path dosn't exist");
  res.status(404).json({ message: "Path not found" });
});

//all errors (error handle middle ware)
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status ?? 500);
  res.json({ message: err.message ?? "internal server error" });
});

const run = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
