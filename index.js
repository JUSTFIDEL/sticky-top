const menuToggler = document.querySelector('[data-nav-toggler]')
const navbar = document.querySelector('[data-nav]')

menuToggler.addEventListener('click', () => {
	navbar.classList.toggle('active')
})
