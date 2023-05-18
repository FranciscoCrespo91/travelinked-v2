// We reuse this import in order to have access to the `body` property in requests
let express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
let logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
let cookieParser = require("cookie-parser");

// ℹ️ global package used to `normalize` paths amongst different operating systems
// https://www.npmjs.com/package/path
let path = require("path");

// ℹ️ Session middleware for authentication
// https://www.npmjs.com/package/express-session
let session = require("express-session");

// ℹ️ MongoStore in order to save the user session in the database
// https://www.npmjs.com/package/connect-mongo
let MongoStore = require("connect-mongo");

// Connects the mongo uri to maintain the same naming structure
let MONGO_URI = `mongodb+srv://SinTomas:${process.env.MONGODB_PASSWORD}@travelink.l3ltdjs.mongodb.net/?retryWrites=true&w=majority`;

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Normalizes the path to the views folder
  app.set("views", path.join(__dirname, "..", "views"));
  // Sets the view engine to handlebars
  app.set("view engine", "hbs");
  // AHandles access to the public folder
  app.use(express.static(path.join(__dirname, "..", "public")));

  // ℹ️ Middleware that adds a "req.session" information and later to check that you are who you say you are 😅
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super hyper secret key",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
    })
  );
};
