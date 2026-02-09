// ========================================
// PORTFOLIO COMPACTO - Henrique Pella
// ========================================

// Funções do Modal
function showModal() {
  document.getElementById('successModal').classList.add('show');
}

function closeModal() {
  document.getElementById('successModal').classList.remove('show');
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
  const modal = document.getElementById('successModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Formulário de contato - Envia via FormSubmit com AJAX
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;
      
      // Muda o botão para loading
      submitBtn.innerHTML = 'Enviando...';
      submitBtn.disabled = true;
      
      // Envia o formulário via fetch
      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Sucesso - mostra o modal
          showModal();
          contactForm.reset();
        } else {
          alert('Ocorreu um erro ao enviar. Tente novamente.');
        }
      })
      .catch(error => {
        alert('Ocorreu um erro ao enviar. Tente novamente.');
      })
      .finally(() => {
        // Restaura o botão
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      });
    });
  }
});

// Função para trocar imagem da galeria RPG
function changeRpgImage(thumb) {
  // Atualiza a imagem principal
  document.getElementById('rpg-main-img').src = thumb.src;
  
  // Remove classe active de todas as thumbs do RPG
  thumb.parentElement.querySelectorAll('.thumb').forEach(t => {
    t.classList.remove('active');
  });
  
  // Adiciona classe active na thumb clicada
  thumb.classList.add('active');
}

// Função para trocar imagem da galeria FUT360
function changeFut360Image(thumb) {
  // Atualiza a imagem principal
  document.getElementById('fut360-main-img').src = thumb.src;
  
  // Remove classe active de todas as thumbs do FUT360
  thumb.parentElement.querySelectorAll('.thumb').forEach(t => {
    t.classList.remove('active');
  });
  
  // Adiciona classe active na thumb clicada
  thumb.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animação de elementos ao aparecer na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  // Anima seções e cards
  document.querySelectorAll('.skill-group, .formation-card, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  console.log('Portfolio loaded successfully! 🚀');
});
