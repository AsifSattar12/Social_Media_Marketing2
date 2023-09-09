function animateCounters() {
    const counters = document.querySelectorAll('.satisfaction_count');
    const speed = 200; // Speed of animation (milliseconds)
  
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      const increment = target / speed;
  
      const updateCount = () => {
        const currentCount = +counter.innerText;
        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  }
  
  // Trigger the counter animation when the section is in the viewport
  function checkViewport() {
    const section = document.querySelector('.client_satisfaction_section');
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
  
    if (scrollTop > sectionTop - windowHeight + sectionHeight) {
      animateCounters();
      window.removeEventListener('scroll', checkViewport);
    }
  }
  
  window.addEventListener('scroll', checkViewport);
  checkViewport();