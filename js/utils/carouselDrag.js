export function enableCarouselDrag(){
    console.log('carousle, funker')
    const carousel = document.querySelector(".project-cards");
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if(!carousel) return;
     if (prevBtn && nextBtn) {
  
    const getScrollAmount = () => {
      const card = carousel.querySelector('.project-card');
      return card ? card.offsetWidth + 24 : 350; 
    };

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
  }
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () =>{
         isDown = false;
    });
    carousel.addEventListener('mouseup', () => {
    isDown = false;
  });
   carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault(); 
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; 
    carousel.scrollLeft = scrollLeft - walk;
  });
}

