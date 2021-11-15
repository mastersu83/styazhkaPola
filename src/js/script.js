// const menu = document.querySelector('.header__botoom');

// function popupOpenAdd() {
// 	menu.classList.toggle('gotop');
// }

// menu.addEventListener('click', popupOpenAdd);
// const element =
// 	document.querySelector('.header__botoom') + window.pageYOffset + 'px';
// window.addEventListener('scroll', function () {
// 	if (element > 100) {
// 		element.classList.toggle('gotop');
// 	} else {
// 		element.classList.remove('gotop');
// 	}
// });

const menu = document.querySelector(".header__botoom");
const navMargin = document.querySelector(".subheader");
const newNav = document.querySelector(".header__nav-list");
const phone = document.querySelector("#navphone");

// function scroll() {
// 	if (window.scrollY > 134) {
// 		menu.classList.add('gotop');
// 		navMargin.classList.add('navmargin');
// 		newNav.classList.add('newnav');
// 	} else {
// 		menu.classList.remove('gotop');
// 		navMargin.classList.remove('navmargin');
// 		newNav.classList.remove('newnav');
// 	}
// }
const scroll = () => {
  if (window.scrollY > 134) {
    menu.classList.add("gotop");
    navMargin.classList.add("navmargin");
    newNav.classList.add("newnav");
    phone.classList.remove("hide");
  } else {
    menu.classList.remove("gotop");
    navMargin.classList.remove("navmargin");
    newNav.classList.remove("newnav");
    phone.classList.add("hide");
  }
};

window.addEventListener("scroll", scroll);
