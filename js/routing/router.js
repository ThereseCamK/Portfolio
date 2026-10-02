const basePath = window.location.hostname.includes("github.io") 
    ? "/Portfolio"
    : "";

    import routes from "./routes.js";
    import { initSendMail } from "../components/footer.js";
    
    const notFound = () => /*HTML */ `
        <div>
            <h1>404 - Page not found</h1>
            <a href="/" data-link>Home</a>
        </div>
    `;

    function router()  {

        let path = window.location.pathname;

        if(path.startsWith(basePath)){
            path = path.replace(basePath, "");
        }
        if(path === "" || path === "/index.html"){
            path = "/";
        }

        const route = routes.find(r => r.path === path);

        const view = route ? route.view : notFound;

        document.querySelector("#mainContent").innerHTML = view();

        initSendMail();

        if(route && route.init){
            route.init();
        }
        
    }

    function navigateTo(url){
        const fullUrl = basePath + url;

        history.pushState(null, null, fullUrl);

        router();
    }

    export function initRouter(){
        document.addEventListener("click", (e) => {
            const link = e.target.closest("a[data-link]");

            if(link){
                e.preventDefault();
                navigateTo(link.pathname);
            }
        });

        window.addEventListener("popstate", router);
        document.addEventListener("DOMContentLoaded", router);
        
    }