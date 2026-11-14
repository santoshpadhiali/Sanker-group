/**
 * NovaPulse AI - Pricing Toggle Logic
 * Handles Monthly vs Annual Billing Switches and Dynamic Price Recalculation
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('pricingToggleSwitch');
  const labelMonthly = document.getElementById('labelMonthly');
  const labelAnnual = document.getElementById('labelAnnual');
  const priceAmounts = document.querySelectorAll('.price-amount');
  const selectPlanBtns = document.querySelectorAll('.select-plan-btn');

  if (!toggleSwitch) return;

  let isAnnual = false;

  const updatePrices = (annual) => {
    isAnnual = annual;

    if (isAnnual) {
      toggleSwitch.classList.add('annual');
      labelAnnual.classList.add('active');
      labelMonthly.classList.remove('active');
    } else {
      toggleSwitch.classList.remove('annual');
      labelMonthly.classList.add('active');
      labelAnnual.classList.remove('active');
    }

    priceAmounts.forEach(el => {
      const targetPrice = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
      
      // Smooth numeric transition
      el.style.opacity = '0';
      el.style.transform = 'translateY(-6px)';
      setTimeout(() => {
        el.textContent = targetPrice;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150);
    });
  };

  // Click handler on the switch
  toggleSwitch.addEventListener('click', () => {
    updatePrices(!isAnnual);
    if (window.showToast) {
      window.showToast(`Switched to ${isAnnual ? 'Annual (20% Savings applied!)' : 'Monthly'} billing`, 'info');
    }
  });

  // Keyboard accessibility
  toggleSwitch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      updatePrices(!isAnnual);
    }
  });

  // Click on labels
  if (labelMonthly) {
    labelMonthly.addEventListener('click', () => updatePrices(false));
  }
  if (labelAnnual) {
    labelAnnual.addEventListener('click', () => updatePrices(true));
  }

  // Handle plan selection buttons
  selectPlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planName = btn.getAttribute('data-plan') || 'Professional';
      const modal = document.getElementById('demoModal');
      const planSelect = document.getElementById('modalPlanSelect');

      if (planSelect) {
        planSelect.value = planName;
      }

      if (modal && window.openModal) {
        window.openModal('demoModal', 'demo');
        if (window.showToast) {
          window.showToast(`Selected ${planName} Plan (${isAnnual ? 'Annual' : 'Monthly'})`, 'success');
        }
      }
    });
  });
});
