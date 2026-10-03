export default function Home(){
    return /*HTML */`
    <div class="home-page">
         <div class="tilt-card-container">
            <div class="tilt-card" id="tiltCard">

                <div class="card-glow" id="cardGlow"></div>
            
                <div class="card-content">
                <span class="badge">Frontend Developer</span>
                <h2>Therese Camilla Nordnes</h2>
                <p>I am passionate about building user-friendly websites with a strong focus on functionality and clean, reusable code tailored to every need.</p>
                <div class="tech-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>SPA Router</span>
                    <span>APIs</span>
                </div>
                </div>
            </div>
        </div>
    </div>
       
    `;
} 

export function initTiltCard() {
  const card = document.getElementById('tiltCard');
  const glow = document.getElementById('cardGlow');
  
  if (!card || !glow) return; 

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
   
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glow.style.setProperty('--x', `${x}px`);
    glow.style.setProperty('--y', `${y}px`);
    
   
    const width = rect.width;
    const height = rect.height;
    

    const xc = (x / width) - 0.5;
    const yc = (y / height) - 0.5;
    

    const rotateY = xc * 20; 
    const rotateX = -yc * 20;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });


  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
  