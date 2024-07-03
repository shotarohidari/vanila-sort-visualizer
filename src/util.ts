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
