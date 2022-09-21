const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dark or Light Images
const imageMode = (color) => {
  image1.src = `/img/undraw_proud_coder_${color}.svg`
  image2.src = `/img/undraw_feeling_proud_${color}.svg`
  image3.src = `/img/undraw_conceptual_idea_${color}.svg`
}

// Helper Function for Modes
const toggleDarkLightMode = (isLight) => {
  nav.style.backgroundColor =
    isLight === 'light' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
  textBox.style.backgroundColor =
    isLight === 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
  toggleIcon.children[0].textContent =
    isLight === 'light' ? 'Light Mode' : 'Dark Mode'
  isLight === 'light'
    ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  isLight === 'light' ? imageMode('light') : imageMode('dark')
}

// Switch Theme Dynamically
const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    toggleDarkLightMode(DARK_THEME)
  } else {
    document.documentElement.removeAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'light')
    toggleDarkLightMode(LIGHT_THEME)
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    toggleDarkLightMode(DARK_THEME)
  }
}
