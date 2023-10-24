
export function toggleMenu(element) {
  const menu = document.querySelector('.menu-open');
  const close = document.querySelector('.menu-close');

  menu.addEventListener('click', () => {
    element.classList.add('open-nav')
  })

  close.addEventListener('click', () => {
    element.classList.remove('open-nav')
  })
}