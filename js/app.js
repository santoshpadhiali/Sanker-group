/**
 * NovaPulse AI - Core Application Logic & Interactive Features
 * Handles Navigation, Theme Switcher, Modals, FAQ, ROI Calculator, and Simulations
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Theme Management (Dark / Light Mode)
  // =========================================================================
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = themeToggleBtn?.querySelector('.sun-icon');
  const moonIcon = themeToggleBtn?.querySelector('.moon-icon');

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('novapulse-theme', theme);

    if (theme === 'light') {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  };

  // Initial Theme detection: check localStorage or prefer dark by default
  const savedTheme = localStorage.getItem('novapulse-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  });

  // =========================================================================
  // 2. Navbar Scroll Effects & Active Link Tracking
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], main section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  // IntersectionObserver for active navigation highlighting
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // =========================================================================
  // 3. Mobile Navigation Drawer
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileMenuBtn?.classList.add('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    mobileNavDrawer?.classList.add('open');
    mobileDrawerOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileMenuBtn?.classList.remove('active');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    mobileNavDrawer?.classList.remove('open');
    mobileDrawerOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  };

  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = mobileNavDrawer?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileDrawerOverlay?.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // =========================================================================
  // 4. Smooth Anchor Scrolling
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Back to Top button click
  document.getElementById('backToTopBtn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =========================================================================
  // 5. Interactive "How It Works" Step Switcher
  // =========================================================================
  const stepItems = document.querySelectorAll('.step-item');
  const stepCards = document.querySelectorAll('.preview-step-card');

  stepItems.forEach(item => {
    const activateStep = () => {
      const stepIndex = item.getAttribute('data-step');

      stepItems.forEach(s => s.classList.remove('active'));
      stepCards.forEach(c => c.classList.remove('active'));

      item.classList.add('active');
      const targetCard = document.getElementById(`stepCard${stepIndex}`);
      if (targetCard) {
        targetCard.classList.add('active');
      }
    };

    item.addEventListener('click', activateStep);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateStep();
      }
    });
  });

  // =========================================================================
  // 6. Interactive ROI Calculator
  // =========================================================================
  const teamSizeSlider = document.getElementById('teamSizeSlider');
  const teamSizeDisplay = document.getElementById('teamSizeDisplay');
  const calcHoursSaved = document.getElementById('calcHoursSaved');
  const calcAnnualSavings = document.getElementById('calcAnnualSavings');
  const calcEfficiency = document.getElementById('calcEfficiency');
  const calcPayback = document.getElementById('calcPayback');

  const updateROI = () => {
    if (!teamSizeSlider) return;
    const size = parseInt(teamSizeSlider.value, 10);
    if (teamSizeDisplay) teamSizeDisplay.textContent = `${size} People`;

    // Calculations: 16 hrs saved per person per month, avg developer cost $80/hr
    const monthlyHours = size * 16;
    const annualSavings = monthlyHours * 80 * 12;
    const efficiencyFactor = (size >= 100 ? 6.2 : (2.4 + (size / 30))).toFixed(1);

    if (calcHoursSaved) calcHoursSaved.textContent = `${monthlyHours.toLocaleString()} hrs`;
    if (calcAnnualSavings) calcAnnualSavings.textContent = `$${annualSavings.toLocaleString()}`;
    if (calcEfficiency) calcEfficiency.textContent = `${efficiencyFactor}x`;
    if (calcPayback) calcPayback.textContent = size > 50 ? '< 7 Days' : '< 14 Days';
  };

  teamSizeSlider?.addEventListener('input', updateROI);

  // =========================================================================
  // 7. Interactive Hero Dashboard Simulation
  // =========================================================================
  const simulateWorkflowBtn = document.getElementById('simulateWorkflowBtn');
  const node1 = document.getElementById('node1');
  const node2 = document.getElementById('node2');
  const node3 = document.getElementById('node3');
  const consoleStatusText = document.getElementById('consoleStatusText');
  const metricThroughput = document.getElementById('metricThroughput');

  let isSimulating = false;
  simulateWorkflowBtn?.addEventListener('click', () => {
    if (isSimulating) return;
    isSimulating = true;
    simulateWorkflowBtn.disabled = true;
    simulateWorkflowBtn.textContent = 'Simulating...';

    // Step 1: Ingest
    node1?.classList.add('active');
    node2?.classList.remove('active');
    node3?.classList.remove('active');
    if (consoleStatusText) consoleStatusText.textContent = '[AGENT-01] Intercepted 1,200 webhook events. Running schema validation...';

    // Step 2: Reasoning
    setTimeout(() => {
      node1?.classList.remove('active');
      node2?.classList.add('active');
      if (consoleStatusText) consoleStatusText.textContent = '[AGENT-02] LLM Swarm evaluating root cause across distributed traces...';
      if (metricThroughput) metricThroughput.innerHTML = `2,190 <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">ops/sec</span>`;
    }, 900);

    // Step 3: Action
    setTimeout(() => {
      node2?.classList.remove('active');
      node3?.classList.add('active');
      if (consoleStatusText) consoleStatusText.textContent = '[AGENT-03] Resolution pull request #418 opened and approved via Slack bot.';
    }, 1800);

    // Complete
    setTimeout(() => {
      node1?.classList.add('active');
      node2?.classList.add('active');
      node3?.classList.add('active');
      simulateWorkflowBtn.disabled = false;
      simulateWorkflowBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Re-Run Simulation
      `;
      isSimulating = false;
      window.showToast('Autonomous workflow simulation completed successfully!', 'success');
    }, 2800);
  });

  // =========================================================================
  // 8. FAQ Accordion Interaction
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');

    // Initial height for items starting open
    if (item.classList.contains('open') && answerDiv) {
      answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
    }

    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (answerDiv) answerDiv.style.maxHeight = '0px';
      } else {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (answerDiv) answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
      }
    });
  });

  // =========================================================================
  // 9. Modal Management
  // =========================================================================
  const modal = document.getElementById('demoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const tabDemoBtn = document.getElementById('tabDemoBtn');
  const tabSignupBtn = document.getElementById('tabSignupBtn');
  const modalDemoView = document.getElementById('modalDemoView');
  const modalSignupView = document.getElementById('modalSignupView');

  window.openModal = (modalId, activeTab = 'demo') => {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    targetModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Switch tab
    if (activeTab === 'signup') {
      tabSignupBtn?.classList.add('active');
      tabDemoBtn?.classList.remove('active');
      if (modalSignupView) modalSignupView.style.display = 'block';
      if (modalDemoView) modalDemoView.style.display = 'none';
    } else {
      tabDemoBtn?.classList.add('active');
      tabSignupBtn?.classList.remove('active');
      if (modalDemoView) modalDemoView.style.display = 'block';
      if (modalSignupView) modalSignupView.style.display = 'none';
    }
  };

  window.closeModal = () => {
    modal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Open modal buttons
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetModal = btn.getAttribute('data-modal-target') || 'demoModal';
      const defaultTab = btn.getAttribute('data-tab') || 'demo';
      window.openModal(targetModal, defaultTab);
    });
  });

  modalCloseBtn?.addEventListener('click', window.closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      window.closeModal();
    }
  });

  // Modal tab switcher
  tabDemoBtn?.addEventListener('click', () => {
    tabDemoBtn.classList.add('active');
    tabSignupBtn?.classList.remove('active');
    if (modalDemoView) modalDemoView.style.display = 'block';
    if (modalSignupView) modalSignupView.style.display = 'none';
  });

  tabSignupBtn?.addEventListener('click', () => {
    tabSignupBtn.classList.add('active');
    tabDemoBtn?.classList.remove('active');
    if (modalSignupView) modalSignupView.style.display = 'block';
    if (modalDemoView) modalDemoView.style.display = 'none';
  });

  // =========================================================================
  // 10. Global Toast Notification System
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  window.showToast = (message, type = 'info') => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'danger') {
      iconSvg = `<svg style="color:var(--accent-danger);" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else {
      iconSvg = `<svg style="color:var(--accent-primary);" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  };
});

