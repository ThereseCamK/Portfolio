import { projects } from "../data/projects.js";

export default function Projects(){
    
   return /*HTML */`<section class="project-section">
    <h1>My projects</h1>
        <p>Some of mye project I have done. Most of them is Academic work. But feel fre to wisit my GitHub to explore more of my Repositories. 
        Many of them is for my earlier work, and some personal project that I worked on to improve my skills, or explore options to work on. </p>
        ${projects.map(project => drawProjectCard(project)).join("")}
   </section>
    
   
    `;
  
    

}

function drawProjectCard(project){
    return /*HTML */`
         <div class="project-card">
         <img src="${project.image}">
            <h2>Title: ${project.title}</h2>
            <h3>Category: ${project.category}</h3>
            <p>description: ${project.description}</p>
            <p>challenge: ${project.challenge}</p>
            <p>solution: ${project.solution}</p>
            <p>improvements: ${project.improvements}</p>
            <div>
                <a href="${project.livelink}" target="_blank">Live link</a>
                <a href="${project.githubLink}" target="_blank">GitHub link</a>
            </div>
           
            
        </div>
    `;
}