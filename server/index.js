const compression = require("compression");
const express = require("express");

const path = require("path");

const globals = require("./globals");

// Must come before render
Object.assign(global, globals);

const render = require("./render");

const port = process.env.PORT || 3210;
const app = express();

app.use(compression());

app.get("/", render);
app.use(express.static(path.resolve(__dirname, "..", "dist")));
app.get("*", render);

app.listen(port, () => console.log(`Server started on port: ${port}`));
