

    import routes from "./routes.js";
    import { initSendMail } from "../components/footer.js";
    
    const notFound = () => /*HTML */ `
        <div>
            <h1>404 - Page not found</h1>
            <a href="/" data-link>Home</a>
        </div>
    `;

    function router()  {

        let path = window.location.hash.replace("#", "");

        
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
       window.location.hash = url;

    }

    export function initRouter(){
        document.addEventListener("click", (e) => {
            const link = e.target.closest("a[data-link]");

            if(link){
                e.preventDefault();
                const targetUrl = link.getAttribute("href").replace("#", "");
                navigateTo(targetUrl);
            }
        });

        window.addEventListener("hashchange", router);
        document.addEventListener("DOMContentLoaded", router);
        
    }