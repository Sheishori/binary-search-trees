import Node from './Node.js';

const Tree = (array) => {
	const buildTree = (array, start = 0, end = array.length - 1) => {
		if (start > end) return null;

		const middle = Math.floor((start + end) / 2);
		const left = buildTree(array, start, middle - 1);
		const right = buildTree(array, middle + 1, end);

		return Node(array[middle], left, right);
	};

	let root = buildTree(array);

	return { root };
};

export default Tree;
