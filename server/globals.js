const prod = process.env.NODE_ENV === "production";

const origin = prod ? "reactexpress" : "react-express-staging.herokuapp";

// Mock a browser environment so we render the desktop version of the site
// TODO Modules should work in a server environment without this
module.exports = {
  navigator: {},
  window: {
    innerWidth: 1024,
    innerHeight: 768,
    location: {
      hostname: `www.${origin}.com`
    }
  }
};
