const menuBtn = document.querySelector('.menu__iconi')
const menu = document.querySelector('.menu__list')


	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})

    menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})