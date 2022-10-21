const observe = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'),
      animateElements = document.querySelectorAll('.animated'),
      animatePortfolioRifght = document.querySelectorAll('.right'),
      animatePortfolioLeft = document.querySelectorAll('.left');

hiddenElements.forEach((el) => observe.observe(el));
animateElements.forEach((el) => observe.observe(el));
animatePortfolioRifght.forEach((el) => observe.observe(el));
animatePortfolioLeft.forEach((el) => observe.observe(el));
