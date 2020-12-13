import animationNumbers from './modules/animationNumbers';
window.addEventListener("DOMContentLoaded", () => {
	animationNumbers([{
		selectorNum: '.num__first',
		speedAmimation: 1,
		startNum: 1,
		endNum: 11510
	}, {
		selectorNum: '.num__second',
		speedAmimation: 5,
		startNum: 1,
		endNum: 115
	}]);
});