import { initRouter } from "./js/routing/router.js";
import Header from "./js/components/header.js";
import Footer from "./js/components/footer.js";

const redirect = sessionStorage.getItem("redirect");

if(redirect) {
    sessionStorage.removeItem("redirect");
    history.replaceState(null, null, redirect);
}

document.getElementById("header").innerHTML = Header();
document.getElementById("footer").innerHTML = Footer();

initRouter();
