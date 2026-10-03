export function cv(){
    return /*HTML */`
    <article class="cv-container">

  
        <header class="cv-header">
            <h1>Therese Camilla Nordnes</h1>
            <p class="cv-subtitle">Front-End Development Student</p>
            
            <div class="cv-contact-info">
                <span>Sandefjord, Norway</span> | 
                <span><a href="tel:+4741377965">+47 413 77 965</a></span> | 
                <span><a href="mailto:theresecnord@gmail.com">theresecnord@gmail.com</a></span>
            </div>
            
            <div class="cv-links">
                <a href="https://theresecamilla.no" target="_blank">theresecamilla.no</a> | 
                <a href="https://github.com" target="_blank">GitHub</a> | 
                <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            </div>
        </header>

    
        <section class="cv-section">
            <h2>Professional Summary</h2>
            <p>
                Front-End Development student at Noroff with a background in teaching programming and supporting learners
                with different needs. Experienced in explaining technical concepts, guiding problem-solving and working
                collaboratively. Continuing to develop practical web development skills through academic and personal projects.
            </p>
        </section>

        <section class="cv-section">
            <h2>Technical Skills</h2>
            <div class="cv-skills-category">
                <strong>Front-end:</strong> HTML, CSS, JavaScript, responsive design, DOM manipulation
            </div>
            <div class="cv-skills-category">
                <strong>Development:</strong> REST APIs, localStorage, routing, Git and GitHub
            </div>
            <div class="cv-skills-category">
                <strong>Tools & Additional:</strong> Visual Studio Code, Figma, basic C# and SQL
            </div>
        </section>


        <section class="cv-section">
            <h2>Selected Projects</h2>
            
            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Community Science Museum | <span class="weight-normal">Semester Project 1</span></h3>
                </div>
                <p>Responsive museum website built with HTML and CSS, focusing on semantic structure, accessibility and responsive layouts.</p>
                <a href="https://theresecamk.github.io/community-science-museum-sp/index.html" class="cv-project-link">View project</a>
            </div>
            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Game Hub - HTML / CSS | <span class="weight-normal">Cross course project</span></h3>
                </div>
                <p>E-commerce project using HTML CSS- focusing on responsive design</p>
                <a href="https://theresecamk.github.io/game-hub/" class="cv-project-link">View project</a>
            </div>
            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Game Hub - JavaScript | <span class="weight-normal">JavaScript 1</span></h3>
                </div>
                <p>E-commerce project using JavaScript, API integration and dynamically generated content.</p>
                <a href="https://theresecamk.github.io/game-hub-js/#/home" class="cv-project-link">View project</a>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Cartify | <span class="weight-normal">E-commerce school exam project</span></h3>
                </div>
                <p>Online shopping application involving JavaScript, API integration, authentication and shopping cart functionality.</p>
                <a href="https://theresecamk.github.io/cartify/" class="cv-project-link">View project</a>
            </div>
        </section>


        <section class="cv-section">
            <h2>Work Experience</h2>
            
            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>IT Development and Key Competencies Instructor</h3>
                    <span class="cv-date">2021 - September 2026</span>
                </div>
                <p class="cv-company">GET Academy</p>
                <ul class="cv-bullet-list">
                    <li>Taught HTML, CSS, JavaScript, C# and SQL.</li>
                    <li>Provided individual and group guidance in programming and technical problem-solving.</li>
                    <li>Adapted teaching and follow-up to different learning needs, including through digital meetings.</li>
                    <li>Supported collaboration, reflection and independent learning.</li>
                </ul>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Additional Work Experience</h3>
                    <span class="cv-date">2011 - 2017</span>
                </div>
                <p class="cv-company">Meny Telemarksporten, Esso Tiger Borre, Color Line and Sector Alarm</p>
                <p>Previous roles across food service, retail, customer service and sales, involving customer communication, daily operations and teamwork.</p>
            </div>
        </section>


        <section class="cv-section">
            <h2>Education</h2>
            
            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Front-End Development</h3>
                    <span class="cv-date">2023 - Present</span>
                </div>
                <p class="cv-school">Noroff (Part-time online studies)</p>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>IT Development</h3>
                    <span class="cv-date">2020 - 2021</span>
                </div>
                <p class="cv-school">GET Academy (IT development, collaboration, communication and problem-solving)</p>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>General University Admissions Certification</h3>
                    <span class="cv-date">2016 - 2017</span>
                </div>
                <p class="cv-school">NKI Online Studies</p>
            </div>

            <div class="cv-item">
                <div class="cv-item-header">
                    <h3>Culinary Education and Apprenticeship</h3>
                    <span class="cv-date">2008 - 2010</span>
                </div>
                <p class="cv-school">Sandefjord Upper Secondary School; practical training at Becks Brasserie and Sjømilitære Samfunn</p>
            </div>
        </section>

    
        <section class="cv-section">
            <h2>Additional Qualifications</h2>
            <ul class="cv-bullet-list">
                <li>Food Safety (IK-Mat)</li>
                <li>IMO 60 Safety Course (2012)</li>
                <li>Sales Training (2012)</li>
                <li>Category B Driving Licence</li>
            </ul>
        </section>

    </article>
    `;
}