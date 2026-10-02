export default function About(){
    return /*HTML */`
    <div class="document-actions">
        <div class="doc-box">
            <h3>Curriculum Vitae</h3>
                <button id="open-cv-modal" class="btn-view">Curriculum Vitae</button>
                <a href="./public/docs/Therese_Camilla_Nordnes_CV.pdf" download class="btn-download">Download CV</a>
            </div>

        <div class="doc-box">
            <h3>Cover Letter</h3>
            
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
    `
}

const cvContent = `
  <h2>Curriculum Vitae</h2>
  <hr style="border-color: var(--border); margin: 15px 0;">
  <h3>Education</h3>
  <p><strong>Front-End Development</strong> | Noroff (2024 - 2026)</p>
  <h3>Experience</h3>
  <p><strong>Coding Instructor</strong> | 5 Years</p>
  <p>Taught fundamentals of HTML, CSS, JavaScript, and C#.</p>
`;

const letterContent = `
  <h2>Cover Letter</h2>
  <hr style="border-color: var(--border); margin: 15px 0;">
  <p>Dear Hiring Manager,</p>
  <p>I am a passionate Front-End Development student with a strong background in teaching code...</p>
`;

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