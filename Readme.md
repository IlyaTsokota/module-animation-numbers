# JS module for animating numbers when scrolling on the site

[Demo](https://ilyatsokota.github.io/module-animation-numbers)

## You will need to download the file to your project:

**src/js/modules/animationNumbers.js**

## How to import?

```
import animationNumbers from 'your_path/animationNumbers';
```

## How to use?

```
animationNumbers([{
	selectorNum: '.num__first',
	speedAmimation: 1,
	startNum: 1,
	endNum: 11510,
	step: 1
}, {
	selectorNum: '.num__second',
	speedAmimation: 5,
	startNum: 1,
	endNum: 115,
	step: 1
}]);
```

- **selectorNum** - element selector
- **speedAmimation** - speed animation in miles seconds, default 5
- **startNum** - the number at which the animation starts
- **endNum** - the number on which the animation ends
- **step** - this is the step by which the number increases
