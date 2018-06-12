function deviceCheck() {
	window.addEventListener("orientationchange", function() {
		if (window.orientation)
			document.getElementById('orientation-blocker').style.display = 'block';
		else
			document.getElementById('orientation-blocker').style.display = 'none';
	});

	if (!mobilecheck()) {
		document.body.classList.add('desktop');
		document.getElementById('container').classList.add('desktop');
		document.getElementById('container').classList.add('dragscroll');
		localStorage.setItem('isMobile', false);
	} else {
		localStorage.setItem('isMobile', true);
	}
}
window.addEventListener('load', deviceCheck);