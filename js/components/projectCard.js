
export function drawProjectCard(project){
    return /*HTML */`
         <div class="project-card">
         <img src="${project.image}" alt="${project.alt}">
            <h2>Title: ${project.title}</h2>
            <h3>Category: ${project.category}</h3>
            <p>Description: ${project.description}</p>
            <p>Challenge: ${project.challenge}</p>
            <p>Solution: ${project.solution}</p>
            <p>Improvements: ${project.improvements}</p>
            <div>
                <a href="${project.livelink}" target="_blank">Live link</a>
                <a href="${project.githubLink}" target="_blank">GitHub link</a>
            </div>
           
            
        </div>
    `;
}