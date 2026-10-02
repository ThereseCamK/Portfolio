export default function Header(){
  return `
        <div class="header">
           <div class="logo">
                <img src="./public/images/logo1.png" alt="logo">
             
            </div>


            <ul class="nav-links" id="nav-links">

                <a href="/" data-link>Home</a>
                <a href="/about" data-link>About</a>
                <a href="/projects" data-link>Projects</a>

            </ul>
            
        </div>
    `;
}