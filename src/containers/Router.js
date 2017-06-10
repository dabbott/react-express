import ClientRouter from "./ClientRouter";
import ServerRouter from "./ServerRouter";

export default (isClient ? ClientRouter : ServerRouter);
