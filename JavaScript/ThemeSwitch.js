// SWITCH THEME WHEN CLICK ON THE MOON ICON
const switchTheme = document.querySelectorAll('.default');
const primaryStyles = document.querySelectorAll('.primary');
const grayStyles = document.querySelectorAll('.gray');
const successStyles = document.querySelectorAll('.success');
const alertStyles = document.querySelectorAll('.alert');
const sidebarMoon = document.querySelector('sidebar-moon');

sidebarMoon.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  switchTheme.forEach(singleElement => {
    singleElement.classList.toggle('default');
    singleElement.classList.toggle('dark');
  });

  primaryStyles.forEach(singleElement => {
    singleElement.classList.toggle('primary');
    singleElement.classList.toggle('primaryDark');
  });

  grayStyles.forEach(singleElement => {
    singleElement.classList.toggle('gray');
    singleElement.classList.toggle('grayDark');
  });

  successStyles.forEach(singleElement => {
    singleElement.classList.toggle('success');
    singleElement.classList.toggle('successDark');
  });

  alertStyles.forEach(singleElement => {
    singleElement.classList.toggle('alert');
    singleElement.classList.toggle('alertDark');
  });

});