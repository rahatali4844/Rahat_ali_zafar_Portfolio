// Simple Scroll Animation and Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate Progress Bars on scroll
    const skillSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');

    const showProgress = () => {
        progressBars.forEach(bar => {
            const value = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = value;
                bar.style.transition = 'width 1.5s ease-in-out';
            }, 100);
        });
    };

    // Simple Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            showProgress();
        }
    }, { threshold: 0.5 });

    if(skillSection) observer.observe(skillSection);
});
  const text = "Rahat Ali Zafar";
  let index = 0;
  let isDeleting = false;
  const speed = 150;

  function typeEffect() {
    const element = document.getElementById("typing");

    if (isDeleting) {
      element.innerHTML = text.substring(0, index--);
    } else {
      element.innerHTML = text.substring(0, index++);
    }

    if (!isDeleting && index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // rukay ga end pe
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
    }

    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }

  typeEffect();


    const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / 100;
      const speed = 50;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });


  

