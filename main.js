const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.link')

function linkAction(){
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//pop-up
function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active-popup');

	var popup = document.getElementById('popup');
	popup.classList.toggle('active-popup');
}

//scroll reveal animation
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duretion: 2000,
	reset: true
})
//scroll home
sr.reveal('.home__title',{})
sr.reveal('.home__text',{delay: 200})
sr.reveal('.img__disquete',{delay: 400})
sr.reveal('.home__seta',{delay: 600})
//scroll project
sr.reveal('.project__img',{interval: 200})
//scroll contact
sr.reveal('.contact__imput',{interval: 200})
sr.reveal('.buttom',{delay: 200})
