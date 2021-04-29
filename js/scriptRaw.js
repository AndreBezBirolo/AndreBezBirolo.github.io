const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
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
const typeWriter = function (element) {
  const textToAnime = element.innerText.split('');
  element.innerText = '';
  textToAnime.forEach((letter, i) => {
    setTimeout(() => element.innerText += letter, 75 * i);
  });
}
const automaticSidebar = function () {
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
  let menuItens = document.querySelectorAll('[data-sidebar="container"] .navigation-mobile a');
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
    menuItens.forEach((item) => {
      item.addEventListener('click', function () {
        toggleDirection(container, direction, content, width, 'closed')
      })
    })
  });


}
try {
  automaticSidebar()
} catch (e) {
  console.log('Você esqueceu de utilizar algum parametro do Automatic Sidebar, por favor revise seu código.');
  console.log('Veja o erro abaixo e vá arrumar.');
  console.log(e.message)
}
const fixedMenu = function () {
  const header = document.getElementById('primary-header');
  var scrollY = window.scrollY;
  window.addEventListener('scroll', debounce(() => {
    scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('fixed');
    } else {
      if (header.classList.contains('fixed')) {
        header.classList.remove('fixed');
      }
    }
  }), 200);
  if (scrollY > 0) {
    header.classList.add('fixed');
  }
}

function lazyLoadImg() {
  if ("IntersectionObserver" in window) {
    let lazyImages = Array.prototype.slice.call(document.querySelectorAll("img.lazy"));
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    let lazyImages = document.querySelectorAll('img.lazy');
    function isVisible(elem) {
      let coords = elem.getBoundingClientRect();
      let windowHeight = document.documentElement.clientHeight;
      let topVisible = coords.top > 0 && coords.top < windowHeight;
      let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      return topVisible || bottomVisible;
    }
    function showVisible() {
      for (let img of lazyImages) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;
        if (isVisible(img)) {
          realSrc += '?nocache=' + Math.random();
          img.src = realSrc;
          img.dataset.src = '';
        }
      }
    }
    window.addEventListener('scroll', debounce(showVisible), 200);
    showVisible();
  }
}

function inputMaskPhone(input) {
  function treatment(value, isOnBlur) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
    if (isOnBlur) {
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    } else {
      value = value.replace(/(\d)(\d{3})$/, "$1-$2");
    }
    return value;
  }
  input.onkeypress = function (evt) {
    var code = window.event ? window.event.keyCode : evt.which;
    var value = this.value;
    if (code > 57 || (code < 48 && code != 8)) {
      return false;
    } else {
      this.value = treatment(value, false);
    }
  };
  input.onblur = function () {
    var value = this.value;
    if (value.length < 13) {
      this.value = "";
    } else {
      this.value = treatment(this.value, true);
    }
  };
  input.maxLength = 14;
}


document.addEventListener("DOMContentLoaded", function () {
  fixedMenu();
  if (document.querySelector('body').id === 'page-home') {
    typeWriter(document.querySelector('h1'));
    let form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
      successTemplate: '<span>Obrigado pelo contato!</span>'
    })

    inputMaskPhone(document.querySelector('#whatsapp'))
  }
  lazyLoadImg();
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
