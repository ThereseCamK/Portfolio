
export function drawProjectCard(project){
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