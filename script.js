
  // Update year dynamically
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Accordion functionality
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const question = item.querySelector('.q');
    const answer = item.querySelector('.answer');
    
    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');
      
      // Close all accordion items
      accordionItems.forEach(i => {
        i.querySelector('.q').classList.remove('active');
        i.querySelector('.answer').classList.remove('show');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        question.classList.add('active');
        answer.classList.add('show');
      }
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
