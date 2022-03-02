const currentTheme = localStorage.getItem('theme');
let dark = false;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
      dark = true;
    }
}

const themeButton = document.querySelector('#theme-button');
themeButton.onclick = function() {
  dark = !dark;
  if(dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}