import Home , {initTiltCard} from "../pages/home.js";
import About, {initAboutPage} from "../pages/about.js";
import Projects from "../pages/projects.js";
import {enableCarouselDrag}  from "../utils/carouselDrag.js";


const routes = [
    { path: "/", view: Home, init: initTiltCard },
  
    { path: "/about", view: About, init: initAboutPage },
    { path: "/projects", view: Projects, init: enableCarouselDrag }

];

export default routes;