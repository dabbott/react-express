import ReactGA from "react-ga";

const shouldTrack = isClient && window.location.hostname.match("react.express");

if (shouldTrack) {
  ReactGA.initialize("UA-77053427-2");
}

export const pageView = () => {
  if (!shouldTrack) return;

  const page = window.location.pathname;

  ReactGA.set({ page });
  ReactGA.pageview(page);
};
