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

// Primitive mobile detection (same as used by client)
const detectMobile = (userAgent = "") =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

module.exports = (req, res) => {
  const location = req.url;
  const isMobile = detectMobile(req.headers["user-agent"]);

  // Don't SSR on mobile yet - since we're doing layouts in JS there might
  // be a flash when the layout switches. Dimensions are currently grabbed
  // from 'window' by react-styles-provider at launch, so we can't override them.
  if (isMobile) {
    return res.send(indexFile);
  }

  if (!pageCache[location]) {
    pageCache[location] = renderPage(location);
  }

  return res.send(pageCache[location]);
};
