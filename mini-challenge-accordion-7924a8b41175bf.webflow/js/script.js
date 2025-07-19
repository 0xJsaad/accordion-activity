document.addEventListener('DOMContentLoaded', function() {
  // Select all the FAQ items
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    // Use correct class names based on HTML
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function() {
      // Toggle the display of the answer
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
});
