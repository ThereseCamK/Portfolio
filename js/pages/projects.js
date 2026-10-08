import { projects } from "../data/projects.js";
import {drawProjectCard} from "../components/projectCard.js"

export default function Projects(){
    
   return /*HTML */`
   <section class="project-section">
        <h1>My projects</h1>
            <p>Some of mye project I have done. Most of them is Academic work. But feel fre to wisit my GitHub to explore more of my Repositories. 
            Many of them is for my earlier work, and some personal project that I worked on to improve my skills, or explore options to work on. </p>
            <div class="carousel-wrapper">
                <button class="carousel-btn prev-btn" aria-label="Last project">&#10094;</button>
                
                <div class="project-cards">
                    ${projects.map(project => drawProjectCard(project)).join("")}
                </div>
                
                <button class="carousel-btn next-btn" aria-label="Next project">&#10095;</button>
            </div>
   </section>
    `;
}

