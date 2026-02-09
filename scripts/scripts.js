// ========================================
// PORTFOLIO PROFISSIONAL - Henrique Pella
// JavaScript: Performance, UX, Microinterações
// ========================================

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy loading de imagens
document.addEventListener('DOMContentLoaded', () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback para navegadores antigos
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
});

// ========== LOADING SCREEN ==========
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  // Timing otimizado para UX
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Trigger hero animations após loading
    document.querySelector('.hero-content')?.classList.add('loaded');
  }, 1200);
});

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verifica preferência do sistema
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.toggle('light-mode', savedTheme === 'light');
} else if (!prefersDarkScheme.matches) {
  body.classList.add('light-mode');
}

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  
  // Animação suave
  themeToggle.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    themeToggle.style.transform = '';
  }, 350);
});

// ========== NAVBAR SCROLL EFFECT (OTIMIZADO) ==========
const header = document.getElementById('header');
let lastScroll = 0;
let ticking = false;

const updateHeader = (currentScroll) => {
  if (currentScroll > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  
  // Hide/show navbar on scroll (opcional, pode comentar)
  // if (currentScroll > lastScroll && currentScroll > 100) {
  //   header.style.transform = 'translateY(-100%)';
  // } else {
  //   header.style.transform = 'translateY(0)';
  // }
  
  lastScroll = currentScroll;
  ticking = false;
};

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (!ticking) {
    window.requestAnimationFrame(() => updateHeader(currentScroll));
    ticking = true;
  }
}, { passive: true });

// ========== FLOATING BUTTON VISIBILITY ==========
const floatingBtn = document.getElementById('floatingBtn');
let floatingTicking = false;

const updateFloatingBtn = (scrollY) => {
  if (scrollY > 300) {
    floatingBtn.style.opacity = '1';
    floatingBtn.style.visibility = 'visible';
    floatingBtn.style.pointerEvents = 'all';
  } else {
    floatingBtn.style.opacity = '0';
    floatingBtn.style.visibility = 'hidden';
    floatingBtn.style.pointerEvents = 'none';
  }
  floatingTicking = false;
};

window.addEventListener('scroll', () => {
  if (!floatingTicking) {
    window.requestAnimationFrame(() => updateFloatingBtn(window.pageYOffset));
    floatingTicking = true;
  }
}, { passive: true });

// ========== PROJECT MODALS ==========
function openProjectModal(modalId) {
  const modal = document.getElementById(modalId);
  const scrollY = window.scrollY;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  
  // Armazena a posição do scroll
  modal.dataset.scrollPosition = scrollY;
}

function closeProjectModal(modalId) {
  const modal = document.getElementById(modalId);
  const scrollY = modal.dataset.scrollPosition || '0';
  
  modal.classList.remove('active');
  
  // Restaura o scroll suavemente
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.overflow = '';
  document.body.style.width = '';
  
  window.scrollTo(0, parseInt(scrollY));
}

// Fechar modal ao clicar fora
document.querySelectorAll('.project-modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal(modal.id);
    }
  });
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.project-modal.active').forEach(modal => {
      closeProjectModal(modal.id);
    });
  }
});

// ========== RIPPLE EFFECT (REFINED) ==========
function createRipple(event) {
  const button = event.currentTarget;
  
  // Remove ripples anteriores
  const existingRipples = button.querySelectorAll('.ripple-effect');
  existingRipples.forEach(ripple => ripple.remove());
  
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  const rect = button.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple-effect');
  
  button.appendChild(circle);
  
  // Remove após animação
  setTimeout(() => circle.remove(), 600);
}

// Adiciona ripple de forma inteligente
document.addEventListener('DOMContentLoaded', () => {
  const rippleElements = document.querySelectorAll(
    '.btn-primary, .btn-secondary, .btn-header, .btn-submit, .btn-project-details, .theme-toggle'
  );
  
  rippleElements.forEach(button => {
    if (!button.classList.contains('ripple')) {
      button.classList.add('ripple');
      button.addEventListener('click', createRipple);
    }
  });
});

// ========== ENHANCED SCROLL ANIMATIONS (OPTIMIZED) ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Desconecta após animação para performance
      animateOnScroll.unobserve(entry.target);
    }
  });
}, observerOptions);

// ========== STAGGERED ANIMATIONS (TIMING PROFISSIONAL) ==========
document.addEventListener('DOMContentLoaded', () => {
  // Skill categories - fade in
  document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 100}ms`;
    animateOnScroll.observe(el);
  });
  
  // Formation cards - fade in
  document.querySelectorAll('.formation-card').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 120}ms`;
    animateOnScroll.observe(el);
  });
  
  // Highlight items - scale in com stagger
  document.querySelectorAll('.about-highlights .highlight-item').forEach((el, index) => {
    el.classList.add('scale-in');
    el.style.transitionDelay = `${index * 80}ms`;
    animateOnScroll.observe(el);
  });
  
  // Project cards - fade in
  document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 150}ms`;
    animateOnScroll.observe(el);
  });
  
  // Skill items individuais - fade in left
  document.querySelectorAll('.skill-item').forEach((el, index) => {
    el.classList.add('fade-in-left');
    el.style.transitionDelay = `${(index % 6) * 60}ms`;
    animateOnScroll.observe(el);
  });
  
  // Project features - fade in right
  document.querySelectorAll('.project-features li').forEach((el, index) => {
    el.classList.add('fade-in-right');
    el.style.transitionDelay = `${index * 50}ms`;
    animateOnScroll.observe(el);
  });
  
  // Contact cards
  document.querySelectorAll('.contact-card').forEach((el, index) => {
    el.classList.add('fade-in-left');
    el.style.transitionDelay = `${index * 80}ms`;
    animateOnScroll.observe(el);
  });
});

// ========== FORM VALIDATION WITH ANIMATIONS ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const formInputs = contactForm.querySelectorAll('input, textarea');
  
  formInputs.forEach(input => {
    // Validação em tempo real com debounce
    let validationTimeout;
    
    input.addEventListener('blur', function() {
      validateInput(this);
    });
    
    input.addEventListener('input', function() {
      // Remove estado inválido durante digitação
      if (this.classList.contains('invalid')) {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(() => {
          validateInput(this);
        }, 500);
      }
    });
  });
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    formInputs.forEach(input => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });
    
    if (!isValid) {
      // Scroll suave para o primeiro campo inválido
      const firstInvalid = contactForm.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return;
    }
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Animação de loading no botão
    submitBtn.innerHTML = '<span style=\"display: flex; align-items: center; gap: 0.5rem;\"><span class=\"spinner\"></span>Enviando...</span>';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Envia o formulário
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        showModal();
        contactForm.reset();
        formInputs.forEach(input => {
          input.classList.remove('valid', 'invalid');
        });
      } else {
        showErrorMessage('Ocorreu um erro ao enviar. Tente novamente.');
      }
    })
    .catch(error => {
      showErrorMessage('Ocorreu um erro ao enviar. Tente novamente.');
    })
    .finally(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    });
  });
}

function validateInput(input) {
  const value = input.value.trim();
  
  if (input.hasAttribute('required') && value === '') {
    input.classList.remove('valid');
    input.classList.add('invalid');
    return false;
  }
  
  if (input.type === 'email' && value !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      input.classList.remove('valid');
      input.classList.add('invalid');
      return false;
    }
  }
  
  if (value !== '') {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
  
  return true;
}

function showErrorMessage(message) {
  // Cria notificação temporária
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #ef4444;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========== SUCCESS MODAL ==========
function showModal() {
  document.getElementById('successModal').classList.add('show');
}

function closeModal() {
  document.getElementById('successModal').classList.remove('show');
}

document.addEventListener('click', function(e) {
  const modal = document.getElementById('successModal');
  if (e.target === modal) {
    closeModal();
  }
});

// ========== GALLERY FUNCTIONS ==========
// ========== SMOOTH SCROLL FOR ANCHORS (OPTIMIZED) ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      const headerOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Fecha menu mobile se aberto
      const nav = document.getElementById('nav');
      nav?.classList.remove('active');
      document.getElementById('menuBtn')?.classList.remove('active');
    }
  });
});

// ========== SKILL BARS ANIMATION (PERFORMANCE OPTIMIZED) ==========
const skillBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target.querySelector('.skill-progress');
      if (progressBar && !progressBar.classList.contains('animated')) {
        const targetWidth = progressBar.style.width;
        progressBar.style.width = '0%';
        progressBar.classList.add('animated');
        
        // Use requestAnimationFrame para smooth animation
        requestAnimationFrame(() => {
          setTimeout(() => {
            progressBar.style.width = targetWidth;
          }, 100);
        });
      }
      skillBarsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-bar').forEach(bar => {
  skillBarsObserver.observe(bar.parentElement);
});

// ========== PARALLAX EFFECT ON HERO (SUBTLE) ==========
let heroTicking = false;

const updateHeroParallax = (scrolled) => {
  const hero = document.querySelector('.hero');
  if (hero && scrolled < window.innerHeight) {
    // Parallax mais sutil e performático
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = Math.max(0, 1 - (scrolled / 600));
  }
  heroTicking = false;
};

window.addEventListener('scroll', () => {
  if (!heroTicking) {
    window.requestAnimationFrame(() => updateHeroParallax(window.pageYOffset));
    heroTicking = true;
  }
}, { passive: true });

// ========== MENU MOBILE ==========
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    // Previne scroll quando menu aberto
    if (nav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ========== SCROLL PROGRESS BAR ==========
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}, { passive: true });

// ========== ANIMATED STATISTICS ==========
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      
      statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target;
          }
        };
        
        // Pequeno delay escalonado para cada card
        const delay = Array.from(statNumbers).indexOf(stat) * 150;
        setTimeout(() => {
          updateCounter();
        }, delay);
      });
      
      statsObserver.disconnect();
    }
  });
}, {
  threshold: 0.3
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ========== PERFORMANCE MONITORING ==========
if (window.performance && window.performance.measure) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      console.log('%c⚡ Performance Metrics', 'color: #10b981; font-weight: bold;');
      console.log(`DOM Load: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`);
      console.log(`Full Load: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
    }
  });
}

// ========== DEBUG MESSAGE ==========
console.log('%c🚀 Portfolio Henrique Pella', 'color: #8b5cf6; font-size: 18px; font-weight: bold; padding: 8px;');
console.log('%c✨ Design System | Performance Optimized | Accessible', 'color: #10b981; font-size: 12px;');
console.log('%c📊 Métricas:', 'color: #a78bfa; font-weight: bold;');
console.log('  • IntersectionObserver: Active');
console.log('  • RequestAnimationFrame: Active');
console.log('  • Passive Event Listeners: Active');
console.log('  • Theme: ' + (document.body.classList.contains('light-mode') ? 'Light' : 'Dark'));
