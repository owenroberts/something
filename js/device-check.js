function deviceCheck() {
	window.addEventListener("orientationchange", function() {
		if (window.orientation)
			document.getElementById('orientation-blocker').style.display = 'block';
		else
			document.getElementById('orientation-blocker').style.display = 'none';
	});

	if (!mobilecheck()) {
		document.body.classList.add('desktop');
	}
}
window.addEventListener('load', deviceCheck);