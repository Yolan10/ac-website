// Enhanced Form Validation and Interaction
// ActiveCampaign Partner Program

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
  initFormValidation();
  initNewsletterForms();
});

// ============================================
// Contact Form Handling
// ============================================
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      company: document.getElementById('company').value,
      website: document.getElementById('website').value,
      businessType: document.getElementById('business-type').value,
      message: document.getElementById('message').value
    };

    // Show loading state
    showLoading(form);

    // Simulate form submission (replace with actual API call)
    try {
      await simulateFormSubmission(data);
      showSuccess(form, 'Thank you! Your application has been submitted. We\'ll review it and get back to you within 2-3 business days.');
      form.reset();
    } catch (error) {
      showError(form, 'Sorry, there was an error submitting your application. Please try again or email us directly at partners@example.com');
    } finally {
      hideLoading(form);
    }
  });
}

// ============================================
// Form Validation
// ============================================
function initFormValidation() {
  const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');

  inputs.forEach(input => {
    // Real-time validation on blur
    input.addEventListener('blur', function() {
      validateField(this);
    });

    // Clear error on focus
    input.addEventListener('focus', function() {
      clearFieldError(this);
    });

    // Real-time validation on input for certain fields
    if (input.type === 'email' || input.type === 'url') {
      input.addEventListener('input', debounce(function() {
        if (this.value) {
          validateField(this);
        }
      }, 500));
    }
  });
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('.form-input[required], .form-textarea[required]');

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const id = field.id;

  // Clear previous errors
  clearFieldError(field);

  // Required field check
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    return false;
  }

  // Email validation
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      return false;
    }
  }

  // URL validation
  if (type === 'url' && value) {
    try {
      new URL(value);
    } catch {
      showFieldError(field, 'Please enter a valid URL (e.g., https://example.com)');
      return false;
    }
  }

  // Name validation (at least 2 characters)
  if (id === 'name' && value && value.length < 2) {
    showFieldError(field, 'Name must be at least 2 characters');
    return false;
  }

  // Message validation (at least 10 characters)
  if (id === 'message' && value && value.length < 10) {
    showFieldError(field, 'Message must be at least 10 characters');
    return false;
  }

  // Field is valid
  showFieldSuccess(field);
  return true;
}

function showFieldError(field, message) {
  field.classList.add('error');
  field.classList.remove('success');

  // Remove existing error message
  const existingError = field.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  field.parentElement.appendChild(errorDiv);
}

function showFieldSuccess(field) {
  field.classList.add('success');
  field.classList.remove('error');
  clearFieldError(field);
}

function clearFieldError(field) {
  field.classList.remove('error', 'success');
  const errorMessage = field.parentElement.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// ============================================
// Loading States
// ============================================
function showLoading(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  // Store original button content
  submitBtn.dataset.originalText = submitBtn.innerHTML;

  // Add loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Submitting...';
  submitBtn.classList.add('loading');
}

function hideLoading(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  submitBtn.disabled = false;
  submitBtn.innerHTML = submitBtn.dataset.originalText || 'Submit';
  submitBtn.classList.remove('loading');
}

// ============================================
// Success/Error Messages
// ============================================
function showSuccess(form, message) {
  // Remove existing messages
  removeMessages(form);

  // Create success message
  const successDiv = document.createElement('div');
  successDiv.className = 'form-message success-message';
  successDiv.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;

  form.insertBefore(successDiv, form.firstChild);

  // Animate in
  setTimeout(() => successDiv.classList.add('show'), 10);

  // Scroll to message
  successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Auto-remove after 10 seconds
  setTimeout(() => {
    successDiv.classList.remove('show');
    setTimeout(() => successDiv.remove(), 300);
  }, 10000);
}

function showError(form, message) {
  // Remove existing messages
  removeMessages(form);

  // Create error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-message error-message-box';
  errorDiv.innerHTML = `
    <i class="fas fa-exclamation-circle"></i>
    <span>${message}</span>
  `;

  form.insertBefore(errorDiv, form.firstChild);

  // Animate in
  setTimeout(() => errorDiv.classList.add('show'), 10);

  // Scroll to message
  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeMessages(form) {
  const messages = form.querySelectorAll('.form-message');
  messages.forEach(msg => msg.remove());
}

// ============================================
// Newsletter Forms
// ============================================
function initNewsletterForms() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      if (!emailInput) return;

      // Validate email
      if (!validateEmail(emailInput.value)) {
        showFieldError(emailInput, 'Please enter a valid email address');
        return;
      }

      // Show loading
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-small"></span>';

      // Simulate newsletter subscription
      try {
        await simulateFormSubmission({ email: emailInput.value, type: 'newsletter' });

        // Show success inline
        const successSpan = document.createElement('span');
        successSpan.className = 'newsletter-success';
        successSpan.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        submitBtn.replaceWith(successSpan);

        emailInput.value = '';
        emailInput.disabled = true;
      } catch (error) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showFieldError(emailInput, 'Subscription failed. Please try again.');
      }
    });
  });
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// Utility Functions
// ============================================
function simulateFormSubmission(data) {
  // Simulate API call with 2 second delay
  return new Promise((resolve, reject) => {
    console.log('Form submitted with data:', data);
    setTimeout(() => {
      // 95% success rate simulation
      if (Math.random() > 0.05) {
        resolve({ success: true });
      } else {
        reject(new Error('Submission failed'));
      }
    }, 2000);
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================
// Character Counter for Textarea
// ============================================
function initCharacterCounter() {
  const textareas = document.querySelectorAll('.form-textarea');

  textareas.forEach(textarea => {
    const maxLength = textarea.getAttribute('maxlength');
    if (!maxLength) return;

    const counter = document.createElement('div');
    counter.className = 'character-counter';
    counter.textContent = `0 / ${maxLength}`;
    textarea.parentElement.appendChild(counter);

    textarea.addEventListener('input', function() {
      const current = this.value.length;
      counter.textContent = `${current} / ${maxLength}`;

      if (current > maxLength * 0.9) {
        counter.classList.add('warning');
      } else {
        counter.classList.remove('warning');
      }
    });
  });
}

// Initialize character counter
document.addEventListener('DOMContentLoaded', initCharacterCounter);
