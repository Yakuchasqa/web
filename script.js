
// setInterval(nextSlide, 5000); // Desactiva para pruebas





 // Set slide width
 const slideWidth = slides[0].getBoundingClientRect().width;
 slides.forEach((slide, index) => {
     slide.style.left = slideWidth * index + 'px';
 });

 // Click handlers for nav dots
 nav.addEventListener('click', e => {
     const targetDot = e.target.closest('button');
     if (!targetDot) return;

     const currentSlide = track.querySelector('.current-slide');
     const currentDot = nav.querySelector('.active');
     const targetIndex = dots.findIndex(dot => dot === targetDot);
     const targetSlide = slides[targetIndex];

     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
     currentDot?.classList.remove('active');
     targetDot.classList.add('active');
 });

 // Intersection Observer for animations
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('animate');
         }
     });
 });

 document.querySelectorAll('.description-card, .app-item, .team-member').forEach((el) => {
     observer.observe(el);
 });