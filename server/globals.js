const prod = process.env.NODE_ENV === "production";

const hostname = prod
  ? "www.react.express"
  : "www.react-express-staging.herokuapp.com";

// Mock a browser environment so we render the desktop version of the site
// TODO Modules should work in a server environment without this
module.exports = {
  navigator: {},
  window: {
    innerWidth: 1024,
    innerHeight: 768,
    location: {
      hostname
    }
  }
};
