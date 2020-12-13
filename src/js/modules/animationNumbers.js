function animationNumbers(arrObjects) {
	arrObjects.forEach(({ selectorNum, speedAmimation, startNum, endNum }) => {
		let number = document.querySelector(selectorNum),
			numberTop = number.getBoundingClientRect().top;

		window.addEventListener('scroll', function onScroll() {
			if (window.pageYOffset > numberTop - window.innerHeight) {
				this.removeEventListener('scroll', onScroll);
				let interval = setInterval(() => {
					number.textContent = ++startNum;
					if (startNum >= endNum) {
						clearInterval(interval);
					}
				}, speedAmimation);
			}
		});
	});
}

export default animationNumbers;