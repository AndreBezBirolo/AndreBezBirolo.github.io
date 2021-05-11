function mascara(m,t,e,c){
  var cursor = t.selectionStart;
  var texto = t.value;
  texto = texto.replace(/\D/g,'');
  var l = texto.length;
  var lm = m.length;
  if(window.event) {
    id = e.keyCode;
  } else if(e.which){
    id = e.which;
  }
  cursorfixo=false;
  if(cursor < l)cursorfixo=true;
  var livre = false;
  if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
  ii=0;
  mm=0;
  if(!livre){
    if(id!=8){
      t.value="";
      j=0;
      for(i=0;i<lm;i++){
        if(m.substr(i,1)=="#"){
          t.value+=texto.substr(j,1);
          j++;
        }else if(m.substr(i,1)!="#"){
          t.value+=m.substr(i,1);
        }
        if(id!=8 && !cursorfixo)cursor++;
        if((j)==l+1)break;

      }
    }
    if(c)coresMask(t);
  }
  if(cursorfixo && !livre)cursor--;
  t.setSelectionRange(cursor, cursor);
}

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



document.addEventListener("DOMContentLoaded", function () {
  fixedMenu();
  if (document.querySelector('body').id === 'page-home') {
    typeWriter(document.querySelector('h1'));
    let form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
      successTemplate: '<span>Obrigado pelo contato!</span>'
    })
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
