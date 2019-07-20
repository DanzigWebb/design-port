let siteLogic = {
	// properties
	
	content: document.querySelector('.main-content'),
	menu: document.querySelector('.menu'),
	menuBtn: document.querySelector('#btnCloseMenu'),
	menuLinks: document.querySelectorAll('.menu .menu__link'),
	// defaults
	isMobWidth: false,

	// main
	init () {
		if (window.innerWidth < 768) this.isMobWidth = true;
		this.fixedWidth();
		this.widthListener();
		this.menuListener()
	},

	// methods

	fixedWidth() {
		if (this.menu.classList.contains('active')) {
			this.content.classList.remove('menu-active')
		} else {
			this.content.classList.add('menu-active')
		}
	},

	arrRemoveClass(arr) {
		arr.forEach(item => {
			item.classList.remove('active');
		})
	},

	// listeners
	widthListener() {
		let self = this;
		window.addEventListener('resize', function (e) {
			if (window.innerWidth < 768) {
				self.menu.classList.add('active');
				self.content.classList.remove('menu-active');
				self.isMobWidth = true;
			}
			else {
				self.menu.classList.remove('active');
				self.content.classList.add('menu-active');
				self.isMobWidth = false;
			}
		})
	},
	menuListener() {
		let self = this;
		this.menuBtn.addEventListener('click', () => {
			this.menu.classList.toggle('active')
		});
		this.menuLinks.forEach(link => {
			link.addEventListener('click', function () {
				self.arrRemoveClass(self.menuLinks);
				this.classList.add('active')
				if (self.isMobWidth) {
					self.menu.classList.add('active')
				}
			})
		})
	}
}

siteLogic.init()