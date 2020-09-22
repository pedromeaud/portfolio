let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function() {
    let mode = this.dataset.mode;
    console.log('Option clicked', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }
  if (mode == 'red') {
    document.getElementById('theme-style').href = 'red.css';
  }
  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  }
  if (mode == 'yellow') {
    document.getElementById('theme-style').href = 'yellow.css';
  }
  localStorage.setItem('theme', mode);
}
