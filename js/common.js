let synergyMenu = function () {
	let menu = document.querySelector('.menu');
	let content = document.querySelector('.main-content');
	let menuBtn = document.querySelector('#btnCloseMenu');
	let menuLinks = document.querySelectorAll('.menu .menu__link');


	let fixedWidth = function () {
		if (menu.classList.contains('active')) {
			content.classList.remove('menu-active')
		} else {
			content.classList.add('menu-active')
		}
	}
	let arrRemoveClass = function (arr) {
		arr.forEach(item => {
			item.classList.remove('active');
		})
	}
	fixedWidth()

	menuBtn.addEventListener('click', function (e) {
		menu.classList.toggle('active');
		fixedWidth()
	})

	window.addEventListener('resize', function (e) {
		if (window.innerWidth < 768) {
			menu.classList.add('active')
		}
		else {
			menu.classList.remove('active')
		}
	})

	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			arrRemoveClass(menuLinks);
			this.classList.add('active')
		})
	})
}

synergyMenu()