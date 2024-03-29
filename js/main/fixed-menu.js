const fixedMenu = function () {
  const header = document.getElementById('primary-header');
  let scrollY = window.scrollY;
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
