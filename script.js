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

  // Enhanced Contact Form with AJAX
const contactForm = document.querySelector('.form');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');
    
    // Update button state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Hide any previous messages
    messageDiv.style.display = 'none';
    messageDiv.className = 'form-message';
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        messageDiv.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        messageDiv.className = 'form-message success';
        contactForm.reset(); // Clear the form
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      messageDiv.textContent = '✗ Something went wrong. Please try again or contact us via WhatsApp.';
      messageDiv.className = 'form-message error';
    } finally {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show button when user scrolls down 300px
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Sticky Header with Scroll Effect
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll to top when clicked
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
