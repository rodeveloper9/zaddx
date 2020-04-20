(function () {
	function isVisible(elem) {
		let coords = elem.getBoundingClientRect();
		let windowHeight = document.documentElement.clientHeight;
		let extendedTop = -windowHeight;
		let extendedBottom = 1 * windowHeight;
		// top visible || bottom visible
		let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
		let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;
		return topVisible || bottomVisible;
	}

	function showVisible() {
		for (let img of document.querySelectorAll('img')) {
			let realSrc = img.dataset.src;
			if (!realSrc) continue;
			if (isVisible(img)) {
				img.src = realSrc;
				img.dataset.src = '';
			}
		}
		return true;
	}

	window.addEventListener('scroll', function () {
		showVisible();
	}, true);
})();