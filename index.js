const menuToggler = document.querySelector('[data-nav-toggler]')
const navbar = document.querySelector('[data-nav]')
const menuTogglerX = document.querySelector('[data-navx-toggler]')

menuToggler.addEventListener('click', () => {
	navbar.classList.toggle('active')
})

menuTogglerX.addEventListener('click', () => {
	navbar.classList.toggle('active')
})
