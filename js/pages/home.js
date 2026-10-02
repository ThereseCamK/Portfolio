export default function Home(){
    return /*HTML */`
   
        <div class="tilt-card-container">
            <div class="tilt-card" id="tiltCard">

                <div class="card-glow" id="cardGlow"></div>
            
                <div class="card-content">
                <span class="badge">Frontend Developer</span>
                <h2>Therese Camilla Nordnes</h2>
                <p>Jeg brenner for å skape intuitive, lynraske og universelt utformede Single Page Applications.</p>
                <div class="tech-tags">
                    <span>JavaScript</span>
                    <span>CSS 3D</span>
                    <span>SPA Router</span>
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
  