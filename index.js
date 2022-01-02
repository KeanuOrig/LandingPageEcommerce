//Page animation
const hero = document.querySelector(`.hero`);
const slider = document.querySelector(`.slider`);
const navbar = document.querySelector(`.navbar`);
const logo = document.querySelector(`.logo`);

const tl = new TimelineMax();

tl.fromTo(

	hero, 
	1, 
	{height:"0%"}, 
	{height:"80%", ease: Power2.easeInOut}

	)
.fromTo(

	hero, 
	1.2, 
	{width:"100%"}, 
	{width:"80%", ease: Power2.easeInOut}

	)
.fromTo(

	slider, 
	1.2, 
	{x:"-100%"}, 
	{x:"0%", ease: Power2.easeInOut},
	"-=1.2"
	)
.fromTo(
 
	logo, 
	0.6, 
	{opacity:0, y:-30}, 
	{opacity:1, y:0},
	"-=0.1"
	);

//Nav
const hamburger = document.querySelector(`.hamburger`);
const primaryNav = document.querySelector(`.primary-navigation`);

hamburger.addEventListener(`click`, () =>{
	const visibility = primaryNav.getAttribute("data-visible")
	if (visibility === "false"){
		primaryNav.setAttribute("data-visible", true)
	} else {
		primaryNav.setAttribute("data-visible", false)
	}
})