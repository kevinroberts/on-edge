(function () {
  // ===== Faq accordion
  const faqs = document.querySelectorAll('.single-faq');
  faqs.forEach((el) => {
    el.querySelector('.faq-btn')
      .addEventListener('click', () => {
        el.querySelector('.icon')
          .classList
          .toggle('rotate-180');
        el.querySelector('.faq-content')
          .classList
          .toggle('hidden');
      });
  });
}());
