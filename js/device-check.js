function setDesktop() {
	document.body.classList.add('desktop');
	document.getElementById('container').classList.add('desktop', 'dragscroll');
}

function deviceCheck() {
	const m = localStorage.getItem('isMobile') || mobilecheck();
	if (m === 'false' || m === false) 
		setDesktop();
	if (m === true || m === false)
		localStorage.setItem('isMobile', m);

}
window.addEventListener('load', deviceCheck);

function resizeHandler(ev) {
	ev.preventDefault();
	// alert(`please don't resize`);
	window.resizeTo(375, 667);
}	
window.addEventListener('resize', resizeHandler);


/*
	https
	https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/
*/