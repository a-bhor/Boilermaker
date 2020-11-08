const path = require("path");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

const app = express();

//logging middleware
app.use(morgan("dev"));

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
npm;

//static middleware
app.use(express.static(path.join(__dirname, "../public")));

//api routes
app.use("/api", require("/api"));

// any remaining requests with extension, send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  } else {
    next();
  }
});

// send index.html as default response to all other requests
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT} `)
);
