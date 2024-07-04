import { resumableSelectionSort, shuffle } from "./util";

function run() {
	const barWrapper = document.createElement("div");
	barWrapper.style.height = "100%";
	document.body.prepend(barWrapper);

	const barLength = 100;
	const bars = Array.from({ length: barLength }, (_, idx) => idx + 1);
	// シャッフル
	const shuffledBars = shuffle(bars);
	updateBars(shuffledBars);
	// const barGen = resumableBubbleSort(shuffledBars);
	const barGen = resumableSelectionSort(shuffledBars);

	const intervalId = window.setInterval(() => {
		const { done, value } = barGen.next();
		if (done) {
			clearInterval(intervalId);
		}
		updateBars(value);
	}, 16);

	function bar2Elm(val: number) {
		const div = document.createElement("div");
		div.style.width = `${val % barLength}vw`;
		div.style.height = `${100 / barLength}%`;
		div.style.border = "1px solid black";
		div.style.borderRadius = "1px";
		div.style.backgroundColor = `rgb(${val % barLength},120,120)`;
		return div;
	}
	function updateBars(bars: number[]) {
		barWrapper.innerHTML = "";
		barWrapper.append(...bars.map((bar) => bar2Elm(bar)));
	}
}

run();
