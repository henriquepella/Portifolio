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

// ========== INTERNATIONALIZATION (i18n) ==========
const translations = {
  pt: {
    'hero-badge': 'Disponível para oportunidades',
    'hero-role': 'Engenheiro de Software',
    'hero-tagline': 'Desenvolvimento de Software • QA • Java • Python • Web Development',
    'btn-contact': 'Entre em contato',
    'btn-download': 'Baixar Currículo',
    'stat-xp': 'Anos de Experiência',
    'stat-projects': 'Projetos Concluídos',
    'stat-tech': 'Tecnologias Dominadas',
    'stat-dedication': 'Dedicação',
    'about-title': 'Sobre mim',
    'about-p1': 'Profissional em início de carreira, motivado a aprender e me desenvolver constantemente. Utilizo minha vivência em <strong>desenvolvimento de software</strong>, competências em <strong>programação</strong> e conhecimento em <strong>testes de qualidade (QA)</strong> para agregar valor na criação, evolução e manutenção de sistemas.',
    'about-p2': 'Sou comprometido com <strong>aprendizado contínuo</strong> e <strong>colaboração em equipe</strong>, sempre aplicando minha capacidade de solucionar problemas e meu entusiasmo por tecnologia. Tenho facilidade em aprender, boa comunicação e grande interesse em crescer profissionalmente nas áreas de <strong>desenvolvimento</strong> ou <strong>engenharia de software</strong>.',
    'about-p3': 'Busco uma oportunidade que me permita aplicar meus conhecimentos, adquirir novas habilidades e contribuir de forma positiva para a equipe. Estou preparado para enfrentar novos desafios com dedicação, disciplina, responsabilidade e vontade de evoluir.',
    'highlight1-title': 'PUC Campinas',
    'highlight1-subtitle': 'Engenharia de Software (2024-2027)',
    'highlight2-title': 'Intercâmbio EUA',
    'highlight2-subtitle': 'Lassen High School (2022-2023)',
    'highlight3-title': 'Ensino Médio',
    'highlight3-subtitle': 'Anglo São João da Boa Vista (2018-2021)',
    'highlight4-title': 'Curso de Inglês',
    'highlight4-subtitle': 'America São João da Boa Vista (2017-2021)',
    'highlight5-title': 'Inglês Avançado',
    'highlight5-subtitle': 'Exchange Student',
    'projects-title': 'Projetos em Destaque',
    'btn-details': 'Ver Detalhes',
    'project1-title': 'DashBoard Fut 360',
    'project1-description': 'Dashboard completo para gerenciamento de dados de futebol, desenvolvido como Projeto Integrador na PUC Campinas.',
    'project1-tags': ['Java', 'Projeto Integrador', 'Dashboard', 'Gestão'],
    'project2-title': 'RPG Adventure Game',
    'project2-description': 'Jogo RPG completo desenvolvido em Java com interface gráfica Swing. Sistema completo de classes, combate e inventário.',
    'project2-tags': ['Java', 'Swing GUI', 'POO', 'Game Dev'],
    'skills-title': 'Habilidades Técnicas',
    'skills-title-alt': 'Conhecimentos na Área de TI',
    'skill-level-basic': 'Básico',
    'skill-level-intermediary': 'Intermediário',
    'skill-level-regular': 'Regular',
    'skill-level-advanced': 'Avançado',
    'skill-level-good': 'Bom',
    'skill-category-programming': '💻 Linguagens de Programação',
    'skill-category-development': '🌐 Desenvolvimento',
    'skill-category-database': '🗄️ Banco de Dados - Oracle',
    'skill-category-methodologies': '🛠️ Metodologias & Ferramentas',
    'skill-db-procedures': '✓ Desenvolvimento de Procedures',
    'skill-db-functions': '✓ Desenvolvimento de Funções',
    'skill-db-triggers': '✓ Desenvolvimento de Triggers',
    'modal-about': 'Sobre o Projeto',
    'modal-features': 'Funcionalidades',
    'modal-tech': 'Tecnologias',
    'download-cv': '📄 Baixar Currículo Completo',
    'fut360-description': 'Dashboard completo para gerenciamento de dados de futebol, desenvolvido como Projeto Integrador na PUC Campinas. Sistema integrado para gestão de atletas, calendário de jogos, controle financeiro e relatórios detalhados.',
    'fut360-f1': '📊 Dashboard com métricas e estatísticas em tempo real',
    'fut360-f2': '👥 Gestão completa de cadastro e perfis de atletas',
    'fut360-f3': '📅 Calendário interativo de jogos e eventos',
    'fut360-f4': '💰 Sistema de controle financeiro integrado',
    'fut360-f5': '📈 Geração de relatórios e análises detalhadas',
    'rpg-description': 'Jogo RPG completo desenvolvido em Java com interface gráfica Swing. Inclui sistema de criação de personagem com classes (Guerreiro, Mago, Arqueiro), combate por turnos, inventário com itens consumíveis, progressão de nível e narrativa imersiva.',
    'rpg-f1': '🎭 Sistema de classes com atributos e habilidades únicas',
    'rpg-f2': '⚔️ Combate estratégico por turnos',
    'rpg-f3': '🎒 Sistema de inventário e gerenciamento de itens',
    'rpg-f4': '📖 Narrativa rica com múltiplas escolhas',
    'rpg-f5': '📊 Sistema de progressão e evolução de personagem',
    'formation-title': 'Formação Acadêmica',
    'formation1-title': 'Curso de Inglês',
    'formation1-place': '💬 America São João da Boa Vista',
    'formation1-date': '📅 2017 - 2021',
    'formation2-title': 'Ensino Médio Completo',
    'formation2-place': '🏫 Anglo São João da Boa Vista',
    'formation2-date': '📅 2018 - 2021',
    'formation3-title': 'Senior Year Graduation',
    'formation3-place': '🌎 Lassen High School, EUA',
    'formation3-date': '📅 2022 - 2023',
    'formation4-title': 'Bacharelado em Engenharia de Software',
    'formation4-place': '🎓 PUC Campinas',
    'formation4-date': '📅 2024 - 2027',
    'badge-ongoing': 'Em andamento',
    'contact-title': 'Vamos criar algo',
    'contact-highlight': 'incrível juntos',
    'contact-subtitle': 'Disponível para oportunidades nas áreas de desenvolvimento ou engenharia de software.',
    'form-name': 'Seu Nome',
    'form-email': 'Seu E-mail',
    'form-message': 'Sua Mensagem',
    'btn-send': 'Enviar Mensagem',
    'nav-inicio': 'Início',
    'nav-sobre': 'Sobre',
    'nav-projetos': 'Projetos',
    'nav-skills': 'Skills',
    'nav-formacao': 'Formação',
    'nav-contato': 'Contato'
  },
  en: {
    'hero-badge': 'Available for opportunities',
    'hero-role': 'Software Engineer',
    'hero-tagline': 'Software Development • QA • Java • Python • Web Development',
    'btn-contact': 'Contact me',
    'btn-download': 'Download Resume',
    'stat-xp': 'Years of Experience',
    'stat-projects': 'Completed Projects',
    'stat-tech': 'Technologies Mastered',
    'stat-dedication': 'Dedication',
    'about-title': 'About me',
    'about-p1': 'Early-career professional, motivated to constantly learn and develop. I leverage my experience in <strong>software development</strong>, skills in <strong>programming</strong>, and knowledge in <strong>quality assurance (QA)</strong> to add value in the creation, evolution, and maintenance of systems.',
    'about-p2': 'I am committed to <strong>continuous learning</strong> and <strong>team collaboration</strong>, always applying my problem-solving skills and enthusiasm for technology. I am a quick learner with good communication skills and a strong interest in growing professionally in <strong>software development</strong> or <strong>software engineering</strong>.',
    'about-p3': 'I seek an opportunity that allows me to apply my knowledge, acquire new skills, and contribute positively to the team. I am prepared to face new challenges with dedication, discipline, responsibility, and a desire to evolve.',
    'highlight1-title': 'PUC Campinas',
    'highlight1-subtitle': 'Software Engineering (2024-2027)',
    'highlight2-title': 'Exchange in USA',
    'highlight2-subtitle': 'Lassen High School (2022-2023)',
    'highlight3-title': 'High School',
    'highlight3-subtitle': 'Anglo São João da Boa Vista (2018-2021)',
    'highlight4-title': 'English Course',
    'highlight4-subtitle': 'America São João da Boa Vista (2017-2021)',
    'highlight5-title': 'Advanced English',
    'highlight5-subtitle': 'Exchange Student',
    'projects-title': 'Featured Projects',
    'btn-details': 'View Details',
    'project1-title': 'DashBoard Fut 360',
    'project1-description': 'Complete dashboard for managing soccer data, developed as an Integrative Project at PUC Campinas.',
    'project1-tags': ['Java', 'Integrative Project', 'Dashboard', 'Management'],
    'project2-title': 'RPG Adventure Game',
    'project2-description': 'Complete RPG game developed in Java with Swing GUI. Complete system with classes, combat and inventory.',
    'project2-tags': ['Java', 'Swing GUI', 'OOP', 'Game Dev'],
    'skills-title': 'Technical Skills',
    'skills-title-alt': 'IT Knowledge & Skills',
    'skill-level-basic': 'Basic',
    'skill-level-intermediary': 'Intermediary',
    'skill-level-regular': 'Regular',
    'skill-level-advanced': 'Advanced',
    'skill-level-good': 'Good',
    'skill-category-programming': '💻 Programming Languages',
    'skill-category-development': '🌐 Development',
    'skill-category-database': '🗄️ Database - Oracle',
    'skill-category-methodologies': '🛠️ Methodologies & Tools',
    'skill-db-procedures': '✓ Procedures Development',
    'skill-db-functions': '✓ Functions Development',
    'skill-db-triggers': '✓ Triggers Development',
    'modal-about': 'About the Project',
    'modal-features': 'Features',
    'modal-tech': 'Technologies',
    'download-cv': '📄 Download Full Resume',
    'fut360-description': 'Complete dashboard for managing soccer data, developed as an Integrative Project at PUC Campinas. Integrated system for athlete management, game calendar, financial control, and detailed reports.',
    'fut360-f1': '📊 Dashboard with real-time metrics and statistics',
    'fut360-f2': '👥 Complete athlete registration and profile management',
    'fut360-f3': '📅 Interactive calendar for games and events',
    'fut360-f4': '💰 Integrated financial control system',
    'fut360-f5': '📈 Generation of detailed reports and analyses',
    'rpg-description': 'Complete RPG game developed in Java with Swing GUI. Includes character creation system with classes (Warrior, Mage, Archer), turn-based combat, inventory with consumable items, level progression, and immersive narrative.',
    'rpg-f1': '🎭 Class system with unique attributes and abilities',
    'rpg-f2': '⚔️ Strategic turn-based combat',
    'rpg-f3': '🎒 Inventory and item management system',
    'rpg-f4': '📖 Rich narrative with multiple choices',
    'rpg-f5': '📊 Character progression and evolution system',
    'formation-title': 'Education',
    'formation1-title': 'English Course',
    'formation1-place': '💬 America São João da Boa Vista',
    'formation1-date': '📅 2017 - 2021',
    'formation2-title': 'High School Diploma',
    'formation2-place': '🏫 Anglo São João da Boa Vista',
    'formation2-date': '📅 2018 - 2021',
    'formation3-title': 'Senior Year Graduation',
    'formation3-place': '🌎 Lassen High School, USA',
    'formation3-date': '📅 2022 - 2023',
    'formation4-title': 'Bachelor\'s Degree in Software Engineering',
    'formation4-place': '🎓 PUC Campinas',
    'formation4-date': '📅 2024 - 2027',
    'badge-ongoing': 'Ongoing',
    'contact-title': 'Let\'s build something',
    'contact-highlight': 'amazing together',
    'contact-subtitle': 'Available for opportunities in software development or software engineering.',
    'form-name': 'Your Name',
    'form-email': 'Your Email',
    'form-message': 'Your Message',
    'btn-send': 'Send Message',
    'nav-inicio': 'Home',
    'nav-sobre': 'About',
    'nav-projetos': 'Projects',
    'nav-skills': 'Skills',
    'nav-formacao': 'Education',
    'nav-contato': 'Contact'
  }
};

let currentLang = localStorage.getItem('language') || 'pt';

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  const langToggle = document.getElementById('langToggle');
  const flagIcon = langToggle?.querySelector('.flag-icon');
  const langText = langToggle?.querySelector('.lang-text');
  
  if (lang === 'en') {
    if (flagIcon) {
      flagIcon.innerHTML = `
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" fill="#B22234"/>
          <rect width="20" height="1.077" fill="white"/>
          <rect y="2.154" width="20" height="1.077" fill="white"/>
          <rect y="4.308" width="20" height="1.077" fill="white"/>
          <rect y="6.462" width="20" height="1.077" fill="white"/>
          <rect y="8.615" width="20" height="1.077" fill="white"/>
          <rect y="10.769" width="20" height="1.077" fill="white"/>
          <rect y="12.923" width="20" height="1.077" fill="white"/>
          <rect width="8" height="7.538" fill="#3C3B6E"/>
        </svg>
      `;
    }
    if (langText) langText.textContent = 'EN';
  } else {
    if (flagIcon) {
      flagIcon.innerHTML = `
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="14" fill="#009B3A"/>
          <path d="M10 1.5L17 7L10 12.5L3 7L10 1.5Z" fill="#FEDF00"/>
          <circle cx="10" cy="7" r="2.8" fill="#002776"/>
          <path d="M7.5 7C7.5 6.5 8 5.5 10 5.5C12 5.5 12.5 6.5 12.5 7" stroke="white" stroke-width="0.4" fill="none"/>
        </svg>
      `;
    }
    if (langText) langText.textContent = 'PT';
  }
  
  // Hero
  const heroBadge = document.querySelector('.hero-badge');
  const heroRole = document.querySelector('.hero-role');
  const heroTagline = document.querySelector('.hero-tagline');
  if (heroBadge) heroBadge.textContent = translations[lang]['hero-badge'];
  if (heroRole) heroRole.textContent = translations[lang]['hero-role'];
  if (heroTagline) heroTagline.textContent = translations[lang]['hero-tagline'];
  
  // Nav
  const navLinks = document.querySelectorAll('.nav-link');
  const navKeys = ['nav-inicio', 'nav-sobre', 'nav-projetos', 'nav-skills', 'nav-formacao', 'nav-contato'];
  navLinks.forEach((link, index) => {
    if (navKeys[index] && translations[lang][navKeys[index]]) {
      link.textContent = translations[lang][navKeys[index]];
    }
  });
  
  // Buttons
  const btnContact = document.querySelector('.hero-cta .btn-primary');
  const btnDownload = document.querySelector('.hero-cta .btn-secondary');
  if (btnContact) btnContact.textContent = translations[lang]['btn-contact'];
  if (btnDownload) btnDownload.textContent = translations[lang]['btn-download'];
  
  // CV/Resume Download Links
  const cvBtnHeader = document.getElementById('cvBtnHeader');
  const cvBtnHero = document.getElementById('cvBtnHero');
  const cvBtnContact = document.getElementById('cvBtnContact');
  
  if (lang === 'en') {
    // English - Use CV.pdf
    if (cvBtnHeader) {
      cvBtnHeader.href = 'assets/CV.pdf';
      cvBtnHeader.download = 'Henrique_Pella_CV.pdf';
    }
    if (cvBtnHero) {
      cvBtnHero.href = 'assets/CV.pdf';
      cvBtnHero.download = 'Henrique_Pella_CV.pdf';
    }
    if (cvBtnContact) {
      cvBtnContact.href = 'assets/CV.pdf';
      cvBtnContact.download = 'Henrique_Pella_CV.pdf';
    }
  } else {
    // Portuguese - Use Curriculo BR.pdf
    if (cvBtnHeader) {
      cvBtnHeader.href = 'assets/Curriculo%20BR.pdf';
      cvBtnHeader.download = 'Curriculo_Henrique_Pella.pdf';
    }
    if (cvBtnHero) {
      cvBtnHero.href = 'assets/Curriculo%20BR.pdf';
      cvBtnHero.download = 'Curriculo_Henrique_Pella.pdf';
    }
    if (cvBtnContact) {
      cvBtnContact.href = 'assets/Curriculo%20BR.pdf';
      cvBtnContact.download = 'Curriculo_Henrique_Pella.pdf';
    }
  }
  
  // Stats
  const statLabels = document.querySelectorAll('.stat-label');
  const statKeys = ['stat-xp', 'stat-projects', 'stat-tech', 'stat-dedication'];
  statLabels.forEach((label, index) => {
    if (statKeys[index] && translations[lang][statKeys[index]]) {
      label.textContent = translations[lang][statKeys[index]];
    }
  });
  
  // About Section
  const aboutTitle = document.querySelector('#sobre h2');
  const aboutParagraphs = document.querySelectorAll('#sobre .about-text p');
  if (aboutTitle) aboutTitle.textContent = translations[lang]['about-title'];
  if (aboutParagraphs[0]) aboutParagraphs[0].innerHTML = translations[lang]['about-p1'];
  if (aboutParagraphs[1]) aboutParagraphs[1].innerHTML = translations[lang]['about-p2'];
  if (aboutParagraphs[2]) aboutParagraphs[2].innerHTML = translations[lang]['about-p3'];
  
  // About Highlights
  const highlights = document.querySelectorAll('.highlight-item strong');
  const highlightSubtitles = document.querySelectorAll('.highlight-item span:not(.highlight-icon)');
  if (highlights[0]) highlights[0].textContent = translations[lang]['highlight1-title'];
  if (highlightSubtitles[0]) highlightSubtitles[0].textContent = translations[lang]['highlight1-subtitle'];
  if (highlights[1]) highlights[1].textContent = translations[lang]['highlight2-title'];
  if (highlightSubtitles[1]) highlightSubtitles[1].textContent = translations[lang]['highlight2-subtitle'];
  if (highlights[2]) highlights[2].textContent = translations[lang]['highlight3-title'];
  if (highlightSubtitles[2]) highlightSubtitles[2].textContent = translations[lang]['highlight3-subtitle'];
  if (highlights[3]) highlights[3].textContent = translations[lang]['highlight4-title'];
  if (highlightSubtitles[3]) highlightSubtitles[3].textContent = translations[lang]['highlight4-subtitle'];
  if (highlights[4]) highlights[4].textContent = translations[lang]['highlight5-title'];
  if (highlightSubtitles[4]) highlightSubtitles[4].textContent = translations[lang]['highlight5-subtitle'];
  
  // Projects Title
  const projectsTitle = document.querySelector('#projeto h2');
  if (projectsTitle) projectsTitle.textContent = translations[lang]['projects-title'];
  
  // Project Cards
  const projectCards = document.querySelectorAll('.project-card-info');
  if (projectCards[0]) {
    const h3 = projectCards[0].querySelector('h3');
    const p = projectCards[0].querySelector('p');
    const tagsDiv = projectCards[0].querySelector('.project-tags');
    if (h3) h3.textContent = translations[lang]['project1-title'];
    if (p) p.textContent = translations[lang]['project1-description'];
    if (tagsDiv && translations[lang]['project1-tags']) {
      tagsDiv.innerHTML = translations[lang]['project1-tags'].map(tag => `<span>${tag}</span>`).join('');
    }
  }
  if (projectCards[1]) {
    const h3 = projectCards[1].querySelector('h3');
    const p = projectCards[1].querySelector('p');
    const tagsDiv = projectCards[1].querySelector('.project-tags');
    if (h3) h3.textContent = translations[lang]['project2-title'];
    if (p) p.textContent = translations[lang]['project2-description'];
    if (tagsDiv && translations[lang]['project2-tags']) {
      tagsDiv.innerHTML = translations[lang]['project2-tags'].map(tag => `<span>${tag}</span>`).join('');
    }
  }
  
  // Skills
  const skillsTitle = document.querySelector('#skills h2');
  if (skillsTitle) {
    const originalText = skillsTitle.textContent.trim();
    if (originalText === 'Conhecimentos na Área de TI' || originalText === 'IT Knowledge & Skills') {
      skillsTitle.textContent = translations[lang]['skills-title-alt'];
    } else {
      skillsTitle.textContent = translations[lang]['skills-title'];
    }
  }
  
  // Skill levels
  document.querySelectorAll('.skill-level').forEach(level => {
    const text = level.textContent.trim();
    if (text === 'Básico' || text === 'Basic') level.textContent = translations[lang]['skill-level-basic'];
    if (text === 'Intermediário' || text === 'Intermediary') level.textContent = translations[lang]['skill-level-intermediary'];
    if (text === 'Regular') level.textContent = translations[lang]['skill-level-regular'];
    if (text === 'Avançado' || text === 'Advanced') level.textContent = translations[lang]['skill-level-advanced'];
    if (text === 'Bom' || text === 'Good') level.textContent = translations[lang]['skill-level-good'];
  });
  
  // Skill categories
  const skillCategories = document.querySelectorAll('.skill-category h3');
  if (skillCategories[0]) skillCategories[0].textContent = translations[lang]['skill-category-programming'];
  if (skillCategories[1]) skillCategories[1].textContent = translations[lang]['skill-category-development'];
  if (skillCategories[2]) skillCategories[2].textContent = translations[lang]['skill-category-database'];
  if (skillCategories[3]) skillCategories[3].textContent = translations[lang]['skill-category-methodologies'];
  
  // Database features
  const dbFeatures = document.querySelectorAll('.skill-features .feature-item');
  if (dbFeatures[0]) dbFeatures[0].textContent = translations[lang]['skill-db-procedures'];
  if (dbFeatures[1]) dbFeatures[1].textContent = translations[lang]['skill-db-functions'];
  if (dbFeatures[2]) dbFeatures[2].textContent = translations[lang]['skill-db-triggers'];
  
  // Download CV button
  const downloadCvBtn = document.querySelector('.download-cv');
  if (downloadCvBtn) downloadCvBtn.textContent = translations[lang]['download-cv'];
  
  // Project Modals - FUT360
  const fut360About = document.querySelectorAll('#projectModal1 .project-modal-info h3');
  const fut360Description = document.querySelector('#projectModal1 .project-modal-info p');
  const fut360Features = document.querySelectorAll('#projectModal1 .project-modal-info ul li');
  
  if (fut360About[0]) fut360About[0].textContent = translations[lang]['modal-about'];
  if (fut360About[1]) fut360About[1].textContent = translations[lang]['modal-features'];
  if (fut360About[2]) fut360About[2].textContent = translations[lang]['modal-tech'];
  if (fut360Description) fut360Description.textContent = translations[lang]['fut360-description'];
  if (fut360Features[0]) fut360Features[0].textContent = translations[lang]['fut360-f1'];
  if (fut360Features[1]) fut360Features[1].textContent = translations[lang]['fut360-f2'];
  if (fut360Features[2]) fut360Features[2].textContent = translations[lang]['fut360-f3'];
  if (fut360Features[3]) fut360Features[3].textContent = translations[lang]['fut360-f4'];
  if (fut360Features[4]) fut360Features[4].textContent = translations[lang]['fut360-f5'];
  
  // Project Modals - RPG
  const rpgAbout = document.querySelectorAll('#projectModal2 .project-modal-info h3');
  const rpgDescription = document.querySelector('#projectModal2 .project-modal-info p');
  const rpgFeatures = document.querySelectorAll('#projectModal2 .project-modal-info ul li');
  
  if (rpgAbout[0]) rpgAbout[0].textContent = translations[lang]['modal-about'];
  if (rpgAbout[1]) rpgAbout[1].textContent = translations[lang]['modal-features'];
  if (rpgAbout[2]) rpgAbout[2].textContent = translations[lang]['modal-tech'];
  if (rpgDescription) rpgDescription.textContent = translations[lang]['rpg-description'];
  if (rpgFeatures[0]) rpgFeatures[0].textContent = translations[lang]['rpg-f1'];
  if (rpgFeatures[1]) rpgFeatures[1].textContent = translations[lang]['rpg-f2'];
  if (rpgFeatures[2]) rpgFeatures[2].textContent = translations[lang]['rpg-f3'];
  if (rpgFeatures[3]) rpgFeatures[3].textContent = translations[lang]['rpg-f4'];
  if (rpgFeatures[4]) rpgFeatures[4].textContent = translations[lang]['rpg-f5'];
  
  // Formation
  const formationTitle = document.querySelector('#formacao h2');
  if (formationTitle) formationTitle.textContent = translations[lang]['formation-title'];
  
  const formationItems = document.querySelectorAll('.timeline-item');
  if (formationItems[0]) {
    const h3 = formationItems[0].querySelector('h3');
    const place = formationItems[0].querySelector('.formation-place');
    const date = formationItems[0].querySelector('.formation-date');
    if (h3) h3.textContent = translations[lang]['formation1-title'];
    if (place) place.textContent = translations[lang]['formation1-place'];
    if (date) date.textContent = translations[lang]['formation1-date'];
  }
  if (formationItems[1]) {
    const h3 = formationItems[1].querySelector('h3');
    const place = formationItems[1].querySelector('.formation-place');
    const date = formationItems[1].querySelector('.formation-date');
    if (h3) h3.textContent = translations[lang]['formation2-title'];
    if (place) place.textContent = translations[lang]['formation2-place'];
    if (date) date.textContent = translations[lang]['formation2-date'];
  }
  if (formationItems[2]) {
    const h3 = formationItems[2].querySelector('h3');
    const place = formationItems[2].querySelector('.formation-place');
    const date = formationItems[2].querySelector('.formation-date');
    if (h3) h3.textContent = translations[lang]['formation3-title'];
    if (place) place.textContent = translations[lang]['formation3-place'];
    if (date) date.textContent = translations[lang]['formation3-date'];
  }
  if (formationItems[3]) {
    const h3 = formationItems[3].querySelector('h3');
    const place = formationItems[3].querySelector('.formation-place');
    const date = formationItems[3].querySelector('.formation-date');
    if (h3) h3.textContent = translations[lang]['formation4-title'];
    if (place) place.textContent = translations[lang]['formation4-place'];
    if (date) date.textContent = translations[lang]['formation4-date'];
  }
  
  // Formation badge
  const formationBadge = document.querySelector('.formation-badge');
  if (formationBadge) formationBadge.textContent = translations[lang]['badge-ongoing'];
  
  // Contact
  const contactTitle = document.querySelector('.contact-info h2');
  if (contactTitle) {
    contactTitle.innerHTML = `${translations[lang]['contact-title']}<br><span class=\"highlight\">${translations[lang]['contact-highlight']}</span>`;
  }
  
  const contactSubtitle = document.querySelector('.contact-subtitle');
  if (contactSubtitle) contactSubtitle.textContent = translations[lang]['contact-subtitle'];
  
  // Form
  const nameInput = document.querySelector('input[name=\"name\"]');
  const emailInput = document.querySelector('input[name=\"email\"]');
  const messageInput = document.querySelector('textarea[name=\"message\"]');
  const btnSend = document.querySelector('.btn-submit');
  
  if (nameInput) nameInput.placeholder = translations[lang]['form-name'];
  if (emailInput) emailInput.placeholder = translations[lang]['form-email'];
  if (messageInput) messageInput.placeholder = translations[lang]['form-message'];
  if (btnSend) btnSend.textContent = translations[lang]['btn-send'];
  
  // Project buttons
  document.querySelectorAll('.btn-project-details').forEach(btn => {
    const svg = btn.querySelector('svg');
    btn.textContent = translations[lang]['btn-details'];
    if (svg) btn.appendChild(svg);
  });
}

// Inicializa
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => changeLanguage(currentLang), 100);
  
  const langToggle = document.getElementById('langToggle');
  langToggle?.addEventListener('click', () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    changeLanguage(newLang);
  });
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
