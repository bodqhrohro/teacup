var TEACUP_ANIMATION_TIME = 200;
window.addEventListener('load', function() {
	document.body.addEventListener('click', function(e) {
		var container = document.createElement('span');
		container.style.position = 'relative';

		var img = new Image;
		img.src = teacup_img;
		img.style.zIndex = 3;
		img.style.opacity = 0;
		container.appendChild(img);

		if (e.target.innerText && e.target.innerText.length && window.getSelection) {
			var selection = window.getSelection();
			var victimNode = selection.focusNode;
			var offset = selection.focusOffset;
			var html = victimNode.textContent;
			var preSpaceIndex = offset;
			var postSpaceIndex = offset;
			while (--preSpaceIndex > 0) {
				if (html.charAt(preSpaceIndex) == ' ') {
					preSpaceIndex++;
					break;
				}
			}
			while (++postSpaceIndex < html.length) {
				if (html.charAt(postSpaceIndex) == ' ') {
					break;
				}
			}
			victimNode.replaceWith(html.substring(0, preSpaceIndex), container, html.substring(postSpaceIndex));
		} else {
			e.target.parentNode.replaceChild(container, e.target);
		}

		var splash = new Image;
		splash.src = splash_img;
		splash.style.position = 'absolute';
		splash.style.width = '120px';
		splash.style.height = '120px';
		splash.style.left = '-28px';
		splash.style.bottom = '-28px';
		splash.style.zIndex = 2;
		container.appendChild(splash);

		// splash effect
		var startTime = null;
		var splasher = function(time) {
			if (!startTime) {
				startTime = time;
			}
			splash.style.filter = 'blur(' + (TEACUP_ANIMATION_TIME - time + startTime) / 25 + 'px)';
			img.style.opacity = (time - startTime) / TEACUP_ANIMATION_TIME;
			if (time - startTime <= TEACUP_ANIMATION_TIME) {
				requestAnimationFrame(splasher);
			} else {
				splash.remove();
				img.style.opacity = 1;
			}
		};
		requestAnimationFrame(splasher);

		e.preventDefault();
		e.stopPropagation();
	});
});
