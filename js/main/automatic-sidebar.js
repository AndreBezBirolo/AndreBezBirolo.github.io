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
