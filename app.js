const themeSelector = document.getElementById('themeSelect');
const printer = document.getElementById('printer');
const setTheme = () => {
  const theme = localStorage.getItem('theme');
  const body = document.querySelector('body');
  if (theme) {
    body.classList = `container ${theme}`;
  }
};
const toogleTheme = () => {
  const body = document.querySelector('body');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
const print = () => {
  window.print();
};
addEventListener('DOMContentLoaded', setTheme);
themeSelector.addEventListener('click', toogleTheme);
printer.addEventListener('click', print);
