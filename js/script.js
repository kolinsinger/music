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
		window.removeEventListener('scroll', showNextVideoByScrollingPage)
	}
}




/* iframe video by click
========================== */
/*
function findVideos() {
	let videos = document.querySelectorAll('.video-block__item');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video-block__item-link')
	let media = video.querySelector('.video-block__item-media')
	let button = video.querySelector('.video-block__item-button')
	let title = video.querySelector('.video-block__item-title')
	let id = parseMediaURL(media)

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		title.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video-block__item--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1]
}

function createIframe(id) {
	let iframe = document.createElement('iframe')

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video-block__item-media');

	return iframe
}

function generateURL(id) {
	let query = "?rel=1&showinfo=1&autoplay=1";
	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
*/
