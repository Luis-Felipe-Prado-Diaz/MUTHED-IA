export default (() => {
	const menu = document.querySelector("#menu-toggle");
	const toggleMenu = document.querySelector('.menu')

	menu.addEventListener("click", () => {
		toggleMenu.classList.toggle('active')
	})

})()
