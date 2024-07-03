export const shuffle = <T>(ary: T[]) => {
	const indexAry = ary.map((_, idx) => idx);
	const newArray: T[] = [];
	while (ary.length !== newArray.length) {
		const randIdx = Math.round(Math.random() * (indexAry.length - 1));
		const idx = indexAry.splice(randIdx, 1)[0];
		const item = ary[idx];
		newArray.push(item);
	}
	return newArray;
};

export function* resumableBubbleSort<T>(ary: T[]) {
	const cloned = structuredClone(ary);
	for (let i = ary.length - 1; 1 < i; i--) {
		for (let j = 0; j < i; j++) {
			const val1 = cloned[j];
			const val2 = cloned[j + 1];
			if (val1 > val2) {
				cloned[j] = val2;
				cloned[j + 1] = val1;
				yield cloned;
			}
		}
	}
	return cloned;
}
