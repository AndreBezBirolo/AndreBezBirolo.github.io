const backToTop = () => {
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
