import animationNumbers from './modules/animationNumbers';
window.addEventListener("DOMContentLoaded", () => {
	animationNumbers([{
		selectorNum: '.num__first',
		startNum: 1,
		endNum: 50
	}, {
		selectorNum: '.num__second',
		startNum: 1,
		endNum: 218
	}]);
});