const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const typeWriter = function(element) {
  const textToAnime = element.innerText.split('');
  element.innerText = '';
  textToAnime.forEach((letter, i) => {
    setTimeout(() => element.innerText += letter, 75 * i);
  });
}
const automaticSidebar = function() {
  function toggleDirection(container, direction, content, width, status) {
    if (status === 'closed') {
      if (direction === 'right') content.style.right = "-" + width + "px";
      else if (direction === 'left') content.style.left = "-" + width + "px";
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
    } else if (status === 'opened') {
      if (direction === 'right') content.style.right = "0";
      else if (direction === 'left') content.style.left = "0";
      container.style.opacity = '1';
      container.style.pointerEvents = 'all';
    }
  }
  let buttons = document.querySelectorAll('[data-sidebar="open"],[data-sidebar="close"]');
  buttons.forEach(function (button) {
    let target = button.dataset.sidebarTarget,
      container = document.querySelector('#' + target),
      content = container.querySelector('[data-sidebar="content"]'),
      direction = container.dataset.sidebarDirection || 'right',
      width = content.offsetWidth;
    toggleDirection(container, direction, content, width, 'closed');
    button.addEventListener('click', function () {
      if (button.dataset.sidebar === 'open') toggleDirection(container, direction, content, width, 'opened');
      else if (button.dataset.sidebar === 'close') toggleDirection(container, direction, content, width, 'closed');
    });
    document.addEventListener('click', function (e) {
      if (e.target === container) {
        toggleDirection(container, direction, content, width, 'closed');
      }
    });
  });
}
try {
  automaticSidebar()
} catch (e) {
  console.log('Você esqueceu de utilizar algum parametro do Automatic Sidebar, por favor revise seu código.');
  console.log('Veja o erro abaixo e vá arrumar.');
  console.log(e.message)
}
const fixedMenu = function() {
  const header = document.getElementById('primary-header');
  var scrollY = window.scrollY;
  window.addEventListener('scroll', debounce(() => {
    scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('fixed');
    } else {
        if(header.classList.contains('fixed')){
          header.classList.remove('fixed');
        }
      }
    }), 200);
  if (scrollY > 0) {
    header.classList.add('fixed');
  } 
}


document.addEventListener("DOMContentLoaded", function () {
  fixedMenu();
  typeWriter(document.querySelector('h1'));

  function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    function toggleVisibility() {
      (scrollY > 200) ? backToTopButton.classList.add('visible') : backToTopButton.classList.remove('visible')
    }
    window.addEventListener('scroll', debounce(() => {
      toggleVisibility();
    }), 200);
    backToTopButton.addEventListener('click', () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    })
    toggleVisibility();
  }
  backToTop();

});
