export default function footer() {
  return /*HTML */`

<footer class="footer">
    <div class="footer-logo">
        <img src="./public/images/tcn-icon-logo.png" alt="logo">
    </div>
  <div>
    <div class="footer-wrapper">
        <div class="info-grid">
            <h1>Therese Camilla Nordnes</h1>
            <h2>Frontend Developer</h2>
        </div>
       

        <div class="some-grid">
            <h3>Follow me</h3>
            <div class="some-wrapper">
            
                <a href="https://github.com/ThereseCamK">GitHub</a>
                <a href="https://www.linkedin.com/in/therese-camilla-nordnes-3a223420b/">LinkedIn</a>
            </div>
        </div>
        

        <div class="contact-grid">
             <p class="contact-info">
                Do you have questions, or want to work together please contact me👇
            </p>

            <form id="contact-form" class="contact-form">

                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required
                >

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required
                >

                <textarea 
                    name="message" 
                    placeholder="Message"
                    required
                ></textarea>

                <button type="submit">Send</button>

            </form>

            <p>
                Send me a direct mail:  
                <a class="footer-mail" href="mailto:theresecnord@gmail.com">
                theresecnord@gmail.com
                </a>
            </p>
            <p id="form-status"></p>
        </div>
    </div>

  

  <div class="copyright">
    <p>© ${new Date().getFullYear()} Therese Camilla Nordnes</p>
  </div>

</footer>

`;
}

    
    

export function initSendMail(){
    
    emailjs.init("pGGr4j9nj6kuIm_Dx");

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form) return;

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_kxu2hrk",
            "template_r34u34h",
            this
        ).then(() => {
            status.textContent = "Message sent";
            status.style.color = "green";
            form.reset();
        }, (error) => {
            status.textContent = "Something wnet wrong, please try again!";
            status.style.color = "red";
        });
    });
}