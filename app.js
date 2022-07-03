const panel = document.querySelectorAll('.productItem')
const cartButton = document.querySelectorAll('.menuButton')
const cartMenu = document.querySelector('.cartMenu')
const closeButton = document.querySelector('.close')
const closeButton2 = document.querySelector('.close2')
const menu = document.querySelector('.menu')
const noThanks = document.querySelector('.noThanks')
const confirmButton = document.querySelector('.confirm')
const msgBox = document.querySelector('.msgBox')

panel.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panel.forEach((panel) => {
    panel.classList.remove('active')
  })
}

cartButton.forEach((cartButton) => {
  cartButton.addEventListener('click', () => {
    cartMenu.style.display = 'unset'
    menu.style.opacity = '0.25'
  })
})

closeButton.addEventListener('click', () => {
  cartMenu.style.display = 'none'

  menu.style.opacity = '1'
})

closeButton2.addEventListener('click', () => {
  msgBox.style.display = 'none'

  menu.style.opacity = '1'
})

noThanks.addEventListener('click', () => {
  cartMenu.style.display = 'none'

  menu.style.opacity = '1'
})
confirmButton.addEventListener('click', () => {
  cartMenu.style.display = 'none'
  msgBox.style.display = 'unset'
  menu.style.opacity = '0.25'
})
