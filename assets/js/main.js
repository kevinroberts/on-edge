(function () {
  // ======= Sticky
  window.onscroll = function () {
    const headerEle = document.querySelector('.ud-header');
    const sticky = headerEle.offsetTop;
    const logo = document.querySelectorAll('.header-logo');

    if (window.pageYOffset > sticky) {
      headerEle.classList.add('sticky');
    } else {
      headerEle.classList.remove('sticky');
    }

    if (logo.length) {
      // === logo change
      if (headerEle.classList.contains('sticky')) {
        document.querySelector('.header-logo').src =
          'assets/logo/logo.svg';
      } else {
        document.querySelector('.header-logo').src =
          'assets/logo/logo-white.svg';
      }
    }

    if (document.documentElement.classList.contains('dark')) {
      if (logo.length) {
        // === logo change
        if (headerEle.classList.contains('sticky')) {
          document.querySelector('.header-logo').src = 'assets/logo/logo-white.svg';
        }
      }
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    }
  };

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

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const backToTopEle = document.querySelector('.back-to-top');
  if (backToTopEle) {
    document.querySelector('.back-to-top').onclick = () => {
      scrollTo(document.documentElement);
    };
  }
}());
