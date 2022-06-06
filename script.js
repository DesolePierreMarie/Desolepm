const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

const enhaut = document.querySelector('.enhaut');
enhaut.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

const body = document.querySelector('body')
const initialTheme = 'light'

const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  body.setAttribute('data-theme', theme)
}

const toggleTheme = () => {
  const activeTheme = localStorage.getItem('theme');

  if (activeTheme === 'light') setTheme('dark');
  else setTheme('light');
}

const setThemeOnInit = () => {
  const savedTheme = localStorage.getItem('theme');
  savedTheme
      ? body.setAttribute('data-theme', savedTheme)
      : setTheme(initialTheme);
}

setThemeOnInit()
