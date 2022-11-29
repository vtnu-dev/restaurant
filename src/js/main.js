// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	const menuItems = document.querySelectorAll('.menu__item-link')

	const toogleMenu = () => {
		menu.classList.toggle('active')
		burger.classList.toggle('active-burger')
		body.classList.toggle('locked')

		const removeActive = () => {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
		menuItems.forEach(item => {
			item.addEventListener('click', removeActive)
		})

		document.addEventListener('keydown', e => {
			if (e.keyCode == 27) {
				// code for kye Escape, but can use e.key
				removeActive()
			}
		})

		// Прятать меню при повороте экрана
		window.addEventListener('orientationchange', removeActive)

		window.addEventListener('resize', () => {
			if (window.innerWidth > 991.98) {
				removeActive()
			}
		})
	}

	burger.addEventListener('click', toogleMenu)

	// Вот тут мы ставим брейкпоинт навбара
}
burgerMenu()

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
	const nav = document.querySelector('nav')
   let prevScrollpos = window.pageYOffset

	// тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
	const breakpoint = 60
	if (window.scrollY >= breakpoint) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
   

window.addEventListener('scroll', function () {
	let currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos || window.scrollY <= 270) {
		nav.style.top = '0'
	} else {
		nav.style.top = '-80px'
	}
	prevScrollpos = currentScrollPos
})
}
window.addEventListener('scroll', fixedNav)


/*---------------- SWIPER------------------ */

var swiper = new Swiper(".swiper", {
   loop:true,
   autoplay: true,

   breakpoints: {
         480: {
           slidesPerView: 2,
         },
         960: {
           slidesPerView: 3,
         },
         1440: {
           slidesPerView: 4,
         },
         1920: {
           slidesPerView: 5,
         },
         2400: {
           slidesPerView: 6,
         },
         2880: {
           slidesPerView: 7,
         },
         3360: {
           slidesPerView: 8,
         },
         3840: {
           slidesPerView: 9,
         },
   }
 
 });

 /*---------------- ------------------ */


