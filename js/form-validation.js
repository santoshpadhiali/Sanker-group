/**
 * NovaPulse AI - Client-Side Form Validation & Submission System
 * Handles Real-Time Input Checking, Accessible Error States, and Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  // Email regex RFC 5322 standard compatible
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

  /**
   * Validate a single input field and set appropriate visual state
   */
  const validateField = (input, isValid, errorElement) => {
    if (!input) return isValid;

    if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      if (errorElement) errorElement.style.display = 'none';
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      if (errorElement) errorElement.style.display = 'block';
    }
    return isValid;
  };

  // -------------------------------------------------------------------------
  // 1. Main Contact & Demo Request Form
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const contactSuccessBanner = document.getElementById('contactSuccessBanner');
  const resetContactFormBtn = document.getElementById('resetContactFormBtn');

  if (contactForm) {
    const fullNameInput = document.getElementById('contactFullName');
    const emailInput = document.getElementById('contactEmail');
    const companyInput = document.getElementById('contactCompany');
    const teamSizeSelect = document.getElementById('contactTeamSize');
    const useCaseSelect = document.getElementById('contactUseCase');
    const termsCheckbox = document.getElementById('contactTerms');
    const termsErrorMsg = document.getElementById('termsErrorMsg');
    const submitBtn = document.getElementById('contactSubmitBtn');

    // Real-time error removal on input
    fullNameInput?.addEventListener('input', () => {
      if (fullNameInput.value.trim().length >= 2) {
        validateField(fullNameInput, true, fullNameInput.nextElementSibling);
      }
    });

    emailInput?.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value.trim())) {
        validateField(emailInput, true, emailInput.nextElementSibling);
      }
    });

    companyInput?.addEventListener('input', () => {
      if (companyInput.value.trim().length > 0) {
        validateField(companyInput, true, companyInput.nextElementSibling);
      }
    });

    teamSizeSelect?.addEventListener('change', () => {
      if (teamSizeSelect.value !== '') {
        validateField(teamSizeSelect, true, teamSizeSelect.nextElementSibling);
      }
    });

    useCaseSelect?.addEventListener('change', () => {
      if (useCaseSelect.value !== '') {
        validateField(useCaseSelect, true, useCaseSelect.nextElementSibling);
      }
    });

    termsCheckbox?.addEventListener('change', () => {
      if (termsCheckbox.checked) {
        if (termsErrorMsg) termsErrorMsg.style.display = 'none';
      }
    });

    // Submit handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(
        fullNameInput,
        fullNameInput.value.trim().length >= 2,
        fullNameInput.nextElementSibling
      );

      const isEmailValid = validateField(
        emailInput,
        emailRegex.test(emailInput.value.trim()),
        emailInput.nextElementSibling
      );

      const isCompanyValid = validateField(
        companyInput,
        companyInput.value.trim().length >= 1,
        companyInput.nextElementSibling
      );

      const isTeamSizeValid = validateField(
        teamSizeSelect,
        teamSizeSelect.value !== '',
        teamSizeSelect.nextElementSibling
      );

      const isUseCaseValid = validateField(
        useCaseSelect,
        useCaseSelect.value !== '',
        useCaseSelect.nextElementSibling
      );

      const isTermsValid = termsCheckbox ? termsCheckbox.checked : true;
      if (termsErrorMsg) {
        termsErrorMsg.style.display = isTermsValid ? 'none' : 'block';
      }

      if (isNameValid && isEmailValid && isCompanyValid && isTeamSizeValid && isUseCaseValid && isTermsValid) {
        // Show loading state
        const originalBtnContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation:spin 1s linear infinite;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
          Scheduling Your Session...
        `;

        // Add keyframe for spin if not present
        if (!document.getElementById('spinStyle')) {
          const style = document.createElement('style');
          style.id = 'spinStyle';
          style.textContent = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
          document.head.appendChild(style);
        }

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnContent;
          contactForm.style.display = 'none';
          contactSuccessBanner.classList.add('visible');

          if (window.showToast) {
            window.showToast(`Thank you, ${fullNameInput.value.trim()}! Demo request submitted.`, 'success');
          }
        }, 800);
      } else {
        if (window.showToast) {
          window.showToast('Please fix the highlighted form errors.', 'danger');
        }
      }
    });

    // Reset button
    resetContactFormBtn?.addEventListener('click', () => {
      contactForm.reset();
      [fullNameInput, emailInput, companyInput, teamSizeSelect, useCaseSelect].forEach(el => {
        el.classList.remove('is-valid', 'is-invalid');
      });
      contactSuccessBanner.classList.remove('visible');
      contactForm.style.display = 'block';
    });
  }

  // -------------------------------------------------------------------------
  // 2. Modal Demo Form
  // -------------------------------------------------------------------------
  const modalDemoForm = document.getElementById('modalDemoForm');
  if (modalDemoForm) {
    const modalName = document.getElementById('modalName');
    const modalEmail = document.getElementById('modalEmail');

    modalDemoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isNameValid = validateField(modalName, modalName.value.trim().length >= 2, modalName.nextElementSibling);
      const isEmailValid = validateField(modalEmail, emailRegex.test(modalEmail.value.trim()), modalEmail.nextElementSibling);

      if (isNameValid && isEmailValid) {
        if (window.closeModal) window.closeModal();
        if (window.showToast) {
          window.showToast(`Demo booked successfully for ${modalEmail.value.trim()}!`, 'success');
        }
        modalDemoForm.reset();
        modalName.classList.remove('is-valid');
        modalEmail.classList.remove('is-valid');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. Modal Sign Up Form
  // -------------------------------------------------------------------------
  const modalSignupForm = document.getElementById('modalSignupForm');
  if (modalSignupForm) {
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');

    modalSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isNameValid = validateField(signupName, signupName.value.trim().length >= 2, signupName.nextElementSibling);
      const isEmailValid = validateField(signupEmail, emailRegex.test(signupEmail.value.trim()), signupEmail.nextElementSibling);
      const isPassValid = validateField(signupPassword, signupPassword.value.length >= 8, signupPassword.nextElementSibling);

      if (isNameValid && isEmailValid && isPassValid) {
        if (window.closeModal) window.closeModal();
        if (window.showToast) {
          window.showToast(`Welcome aboard, ${signupName.value.trim()}! Free trial started.`, 'success');
        }
        modalSignupForm.reset();
        [signupName, signupEmail, signupPassword].forEach(el => el.classList.remove('is-valid'));
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Newsletter Subscription Form in Footer
  // -------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    const newsletterEmail = document.getElementById('newsletterEmail');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (emailRegex.test(newsletterEmail.value.trim())) {
        if (window.showToast) {
          window.showToast('Subscribed to NovaPulse AI product updates!', 'success');
        }
        newsletterEmail.value = '';
      } else {
        if (window.showToast) {
          window.showToast('Please enter a valid email address.', 'danger');
        }
      }
    });
  }
});
