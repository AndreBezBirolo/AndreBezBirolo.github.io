document.addEventListener("DOMContentLoaded", function () {
  fixedMenu();
  lazyLoadImg();
  backToTop();

  if (document.querySelector('body').id === 'page-home') {
    typeWriter(document.querySelector('h1'));
    let form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
      successTemplate: '<span>Obrigado pelo contato!</span>'
    })
  }

});
