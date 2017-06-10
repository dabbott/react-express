const React = require("react");
const ReactDOMServer = require("react-dom/server");

const fs = require("fs");
const path = require("path");

const Root = require("./build/server-bundle").default;

const pageCache = {};

const indexFile = fs.readFileSync(
  path.resolve(__dirname, "..", "dist", "index.html"),
  "utf8"
);

const renderPage = location => {
  let html = ReactDOMServer.renderToString(
    React.createElement(Root, { location })
  );

  // TODO Figure out why display value is getting replaced with [object Object]
  html.replace(/display:\[object Object\]/g, "display:flex");

  return indexFile.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${html}</div>`
  );
};

module.exports = (req, res) => {
  const location = req.url;

  if (!pageCache[location]) {
    pageCache[location] = renderPage(req.url);
  }

  res.send(pageCache[location]);
};
