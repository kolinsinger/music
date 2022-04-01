
window.addEventListener('scroll', showNextVideoByScrollingPage)
document.querySelector('.intro__text-subdonat').addEventListener('click', copyCardNum)

function copyCardNum(event) {
	if (event.target.classList.contains('card__num')) {
		if (event.target.innerText != 'номер скопірований!') {
			const target = event.target
			const text = target.innerText
			const range = document.createRange();
			range.selectNode(target);
			window.getSelection().removeAllRanges(); // clear current selection
			window.getSelection().addRange(range); // to select text
			document.execCommand("copy");
			window.getSelection().removeAllRanges();// to deselect
			target.innerText = 'номер скопірований!'
			target.style.color = 'green'
			setTimeout(() => {
				target.style.color = '#212121'
				target.innerText = text
			}, 1000)
		}
	}
}

/* Show Video by scrolling page
======================= */

function showNextVideoByScrollingPage() {
	const topScrollPixels = window.pageYOffset;
	if (topScrollPixels > 300 && topScrollPixels < 999) {
		const videoArr = document.querySelectorAll('.video-block__item')
		videoArr.forEach((item, i) => {
			if (i > 1 && i < 4) {
				item.style.display = "flex"
			}
		})
	} else if (topScrollPixels > 1000) {
		const videoArr = document.querySelectorAll('.video-block__item')
		videoArr.forEach((item, i) => {
			if (i > 3)
				item.style.display = "flex"
		})
		window.removeEventListener('scroll', getPix)
	}
}
