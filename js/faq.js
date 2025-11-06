/**
 * FAQ Accordion Functionality
 * Handles expand/collapse of FAQ items
 */

document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');

      // Close all other FAQ items (optional - comment out for multiple open)
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });

      // Toggle current item
      faqItem.classList.toggle('active');

      // Smooth scroll to question if opening
      if (!isActive) {
        setTimeout(() => {
          const offset = faqItem.offsetTop - 100;
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });

  // Allow keyboard navigation for accessibility
  faqQuestions.forEach((question, index) => {
    question.setAttribute('tabindex', '0');
    question.setAttribute('aria-expanded', 'false');

    question.addEventListener('keydown', function(e) {
      // Enter or Space key
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }

      // Arrow key navigation
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextQuestion = faqQuestions[index + 1];
        if (nextQuestion) nextQuestion.focus();
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevQuestion = faqQuestions[index - 1];
        if (prevQuestion) prevQuestion.focus();
      }
    });
  });

  // Update aria-expanded attribute when toggling
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'class') {
        const faqItem = mutation.target;
        const question = faqItem.querySelector('.faq-question');
        const isActive = faqItem.classList.contains('active');
        question.setAttribute('aria-expanded', isActive);
      }
    });
  });

  document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item, { attributes: true });
  });

  // Search/Filter FAQ (if search input exists)
  const faqSearch = document.querySelector('#faq-search');
  if (faqSearch) {
    faqSearch.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
          item.style.display = 'block';

          // Highlight matching text
          if (searchTerm.length > 0) {
            item.classList.add('highlight');
          } else {
            item.classList.remove('highlight');
          }
        } else {
          item.style.display = 'none';
        }
      });

      // Show "no results" message if no matches
      const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
      let noResults = document.querySelector('.no-results');

      if (visibleItems.length === 0 && searchTerm.length > 0) {
        if (!noResults) {
          noResults = document.createElement('p');
          noResults.className = 'no-results';
          noResults.textContent = 'No matching questions found. Please try a different search term.';
          noResults.style.cssText = 'text-align: center; color: var(--gray); padding: 2rem;';
          document.querySelector('.faq-container').appendChild(noResults);
        }
      } else if (noResults) {
        noResults.remove();
      }
    });
  }
});
