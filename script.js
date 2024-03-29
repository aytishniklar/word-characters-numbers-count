const app = () => {
	const $text = document.querySelector("#text");
	const $words = document.querySelector(".words span");
	const $characters = document.querySelector(".characters span");
	const $numbers = document.querySelector(".numbers span");

	const countWords = (text) => (text ? text.split(/\s\b/gim).length : 0);

	const countCharacters = (text = 0) => [...text].length;

	const countNumbers = (text) => text.match(/\d/gim)?.length || 0;

	const updateCounters = () => {
		$words.innerHTML = countWords($text.value);
		$characters.innerHTML = countCharacters($text.value);
		$numbers.innerHTML = countNumbers($text.value);
	};

	const init = () => {
		updateCounters();
		$text.addEventListener("input", updateCounters);
	};

	return {
		init,
		countWords,
		countCharacters,
		countNumbers
	};
};

const { init } = app();

window.onload = init;