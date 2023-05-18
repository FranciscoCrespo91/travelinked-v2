require("dotenv").config();
require("./db");
let express = require("express");
let hbs = require("hbs");

let app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

let capitalize = require("./utils/capitalize");
let projectName = "travelinked";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
let indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

let authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

let countriesRoutes = require("./routes/countries.routes");
app.use("/", countriesRoutes);

let usersRoutes = require("./routes/users.routes");
app.use("/", usersRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;