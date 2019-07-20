let siteLogic = {
	// properties

	content: document.querySelector('.main-content'),
	menu: document.querySelector('.menu'),
	menuBtn: document.querySelector('#btnCloseMenu'),
	menuLinks: document.querySelectorAll('.menu .menu__link'),
	sections: document.querySelectorAll('.sections'),
	// defaults
	isMobWidth: false,

	// main
	init() {
		this.fixedWidth();
		this.widthListener();
		this.menuListener();
		if (window.innerWidth < 768) {
			this.content.classList.remove('menu-active');
			this.isMobWidth = true;
		}
		this.sections.forEach(sect => {
			sect.style.display = 'none'
		});
		this.sections[3].style.display = 'block'
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
			this.menu.classList.toggle('active');
			if (self.isMobWidth == false) {
				this.content.classList.toggle('menu-active')
			}
		});
		this.menuLinks.forEach(function(link, i) {
			link.addEventListener('click', function () {
				self.arrRemoveClass(self.menuLinks);
				this.classList.add('active');
				if (self.isMobWidth) {
					self.menu.classList.add('active')
				};
				self.sections.forEach(sect => {
					sect.style.display = 'none'
				});
				self.sections[i].style.display = 'block'
			})
		})
	}
}

siteLogic.init()