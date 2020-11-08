export const generateID = () => {
	return Math.floor(Math.random() * (10000000 - 100) + 100);
};

export const updateNew = num => {
	if (parseInt(num) !== 0) {
		return `+${num}`;
	}
	return null;
};

export const standardizeCount = num => {
	const total = String(num);
	var out = '';
	let flag = 0;
	for (let i = total.length - 1; i >= 0; i--) {
		if (flag === 3) {
			out = `${total[i]},${out}`;
			flag = 1;
		} else {
			out = `${total[i]}${out}`;
			flag++;
		}
	}
	return out;
};
