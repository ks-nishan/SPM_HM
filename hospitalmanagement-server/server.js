const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");


const crudRoutes = require("./routes/crudRoutes");

//import routes
const userRoutes = require("./n_routes/n_users");
const programRoutes = require("./n_routes/n_programs");

//middleware
app.use(bodyParser.json());
app.use(cors());

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
});

// database connection


// routes
app.use("/api/cruds", crudRoutes);
//app.use("/api/auth", authRoute);


app.use(userRoutes);
app.use(programRoutes);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://nishan:nisha123@cluster1.trfvymb.mongodb.net/SPM_DB?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => console.log("Database connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});



