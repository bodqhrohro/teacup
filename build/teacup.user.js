// ==UserScript==
// @name        Teacup
// @namespace   teacup
// @version     1.0
// @grant       none
// @include     *
// ==/UserScript==
var teacup_img = "data:image/png;base64,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";
var splash_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhBBsDLRKygYEnAAAGiUlEQVRo3sWZbWyVZxnHf885py9AC2WkvAbGEAZug0HYJgOiCI6AZpnMKcsSM5Mli1Nk++AyE80WIsMgWVGjyeLmkqExm8kiyaZgojDKDBOkrgM3BEbnqFS0o6Uv9PS8/fzQ01JK2/M8cE68T3I+PPf9XNf/+t/X230/8H8eQbEFGlFwrATqE1GkFhkAkGAq8aIAEDFwgNSQ9k9jfpSNTRSYH0OMLsNLjLOCNKmiMJAXeBsTI9g/lTX0hFc/KoAA4BK1rKMi9DYsYw7nogRXIQaynGYNqwlCQahiHVmai8RA3o4mmnmMmyngjALMYyVNdBUNAABJ9jCTbzK+4MqA1UynkWQRAQQAxzjAl9hArMA21LKWJKeKnF5FXOEZ/+qikXOCiGv8r0edET5vhGAgb00Db7CITaNuQ4I1TOIEbcU0/7J1d3vGCz7ssNEg4kwPmXVzlMwZBUKlz5nzsJ8cToGI93rR895TAvV5BUs9YdafOHZYAGXuVI84LSqAUNUwHwuvIBtZPzQjCDCDTwONJfCAQRws8Ki63zlePbfBDlM+Gt0DQvYDAcBJfkkvy/kqZUPUlPNZqmnhnRK0WFfYOct6tclVly0VcbYN6gFvCGe/iDHLDAzfEQUAZ3mJTmaziUlXTC5mLvAWF0OpTjCNpSxhAkHUlkx+x5+AtXxlUGIuYxXVdNJINhj1ZWNMYQ3f4Wnu5iJt5K5lGz7vebXBW/q2QbzRI+rxoc455L1ql/qUe3zP33q/E64xYYlVvqBm/JFj7IfUrr7quBFSVNxZPuSv/NAOD7vZmYbrLka0ZbkfqC1+IS9+u5r2WzJMeI7zTrf4tl1mfM+nnW/8OnOlWO4W0+rrThWne1BtdoVXrgqc6gPu8iOzZj3pNheaKEKiFnGeh9UuHxdX2arWO8nL8+Xe4hPut0PNesrtLrasaFVCDHzMbrXRhT6j5txqzH5nW2mdJ+xVM550u0ssL2qJEnGqb6hpX3af2u4GMXCKG33FFnNq2vfd5u1FtHwIhL5w7DKp/s2bnOM33GenqinfdYsLS6A8f1yLGbfGF8zZN/a7w3dMqtrtX3zSuRbqIPMjyJfTOAnKSBCnkmpqqKGKSspIECNGQADESJCgnAoSlBFnHvdQAUiS8vyBNEkTB/mAJJLLI86RI0OaJF20004nSbJkSJMhGxhQyWTmcys3M40aqhjHOMZSQYI4MQL6S1xwFR3DPcvl3+lvG8w/zZKhl0t0000X7bRwkuOcTiAZOvgXCbo5SxXV1HADE4cwAMHAD2KMoWKQ8hw9A4oc+Hfg2WUG2rhAO5100Uoz5+gIGASWgIA4FVRSmWcgGLCnby7BWOayls9QO8juDp7nSF5NhhQp0mRwgIMc5hlIkqSXbP9cpO5BjLvApzxsj6pps2pOzbnL6pK0o4N8v9zFbvXvplTtcJ+/9pJ6yma11ftL0pAPKL/DHZ4yo+Zs8TUfdIrPqlm3+D1T6l6nlybqK7zTOs+YVdP+w52ucrxY6x/U837Omdar3T4eNvajKL/LnX5oTu2w3ie9zXL7zwnn1D9bK270Y7XBBUUCkKd9qXU2mTPrWV/1Qaf0WyjiJlPqNuPieH+hpv1+sQpuwkX+wNPmvGSDz7rcqsEuJlb6kvqx9+b5+JTvq6dcdp2uKMad53c9btJmX/Nr3nR1SRE/4TH1cN9RTIz7bXvM+fPhGrPwygOn+Ij7/Mi3fMaVjh+uexNxve3qc32Uizjd36strr8mDuyjdZk/dLd13ueMkXdTDNyqtvnFy8lOXOc59TfWRAaQV7/IL7ve2VaMboM4ydfVI4NvQ8Sx7jDrBTdG5kAMrLSqL8RCgF3oP9W6wd4h4nwPqXujH9KjsvWwPbZ535VwxcCHvGCnj15H5x8CQMIfq29fnXrF8T6v1ntjKQFMt17dfrWbirjEBi+5uUQciHiHLbYOH25izEds99DIJ8XrB/B1ez3g5BHvyyb6oh0+Ea40Rf9iUsatxPkjrcNNBgBt/IwTPMDsMOKiA5jM7fybN8kN304FAI38lFrWh7ljjwTAPgCzOMK7oy7MsZvdrGZGKRhYSBl7RruMCQA6eJH/cFehS/7oAOLMpZn60fvZAOA0u6hlQiGBhT5aDR3VzOBNmgotC1COkmICF0f/5BUBgAATiLGX3sKrA0xxjDEEo+9CdAaOR7iOTJEu5ARRASQ4SHu4pcEAbcUDEHCeLizZdezow75r+SIXmf8BeDbXhSVmCocAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDQtMjdUMDM6NDU6MTgrMDM6MDDZxzHAAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA0LTI3VDAzOjQ1OjE4KzAzOjAwqJqJfAAAAABJRU5ErkJggg==";
// from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/replaceWith()/replaceWith().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('replaceWith')) {
      return;
    }
    Object.defineProperty(item, 'replaceWith', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function replaceWith() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();
        
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        this.parentNode.replaceChild(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
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
