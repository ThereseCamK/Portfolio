import { cv } from "../components/cv.js";
import { coverLetter } from "../components/coverLetter.js";
export default function About(){
    return /*HTML */`
    <section class="about-section">

        <div class="about-top-section">
            <div class="profile-picture">
                <img src="../public/images/profile_picture.png" alt="Therese Camilla Nordnes">
            </div>
            <div class="about-me-section">
                <h1>Therese Camilla Nordnes</h1>
                <h2>Frontend Developer Student </h2>
                <p>I am passionate about building user-friendly and accessible web experiences, focusing on functionality and clean, reusable code tailored to every need.</p>
                <div class="profile-links">

                    <a href="mailto:theresecnord@gmail.com">
                        Email
                    </a>

                    <a href="https://github.com">
                        GitHub
                    </a>

                    <a href="https://linkedin.com">
                        LinkedIn
                    </a>

                </div>
            </div>
        </div>

       <div class="profile-info">
            <h3>About me</h3>
            <p>
                Hi! My name is Therese. As a frontend developer, I have a deep passion for building high-quality interfaces, writing structured code, and solving complex problems.
            </p>

            <h2>Background & Experience</h2>
            <p>
                Frontend developer with a strong background as an IT instructor. I am passionate about building user-friendly and accessible web experiences, focusing on functionality and clean, reusable code tailored to every need.
            </p>

            <p>
                To expand my skill set further, I am also studying Front-End Development at Noroff, mastering modern tools and building responsive, dynamic single-page applications.
            </p>

            <h4>Core Principles</h4>
            <ul>
                <li>Semantic HTML & Accessibility (a11y)</li>
                <li>Responsive & Mobile-First Design</li>
                <li>Clear Separation of Concerns (HTML/CSS/JS)</li>
                <li>Clean, Reusable & Maintainable Code</li>
                <li>UX-Driven Architecture</li>
            </ul>

            <h4>Technologies</h4>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>REST APIs</li>

            </ul>
       </div>

        <div class="document-actions">
            <h4>Documents</h4>
            <p class="doc-intro">
                Interested in working together? You can view my curriculum vitae and cover letter directly in your browser, or download them for later.
            </p>
            <div class="doc-box">
                    <button id="open-cv-modal" class="btn-view">Curriculum Vitae</button>
                    <a href="./public/docs/Therese_Camilla_Nordnes_CV.pdf" download class="btn-download">Download CV</a>
                </div>

            <div class="doc-box">
                <button id="open-letter-modal" class="btn-view">Cover Letter</button>
                <a href="./public/docs/Therese_Camilla_Nordnes_Cover_Letter.pdf" download class="btn-download">Download Letter</a>
            </div>
            </div>


            <div id="doc-modal" class="modal-overlay hidden">
            <div class="modal-content">
                <button id="close-modal" class="btn-close">&times;</button>
                <div id="modal-body">

                </div>
            </div>
        </div>
    <section>
    `
}

const cvContent = cv();

const letterContent = coverLetter();

export function initAboutPage() {
  const modal = document.getElementById("doc-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("close-modal");
  
  const openCvBtn = document.getElementById("open-cv-modal");
  const openLetterBtn = document.getElementById("open-letter-modal");

  if (!modal || !openCvBtn || !openLetterBtn) return;

  openCvBtn.addEventListener("click", () => {
    modalBody.innerHTML = cvContent;
    modal.classList.remove("hidden");
  });

  openLetterBtn.addEventListener("click", () => {
    modalBody.innerHTML = letterContent;
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}