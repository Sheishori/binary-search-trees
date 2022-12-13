import Node from './Node.js';
import removeDuplicates from './removeDuplicates.js';

const Tree = (array) => {
	const buildTree = (array, start = 0, end = array.length - 1) => {
		if (start > end) return null;

		const middle = Math.floor((start + end) / 2);
		const left = buildTree(array, start, middle - 1);
		const right = buildTree(array, middle + 1, end);

		return Node(array[middle], left, right);
	};

	let root = buildTree(removeDuplicates(array));

	const insert = (value) => {
		root = insertLeaf(value, root);
	};

	const insertLeaf = (value, root) => {
		// if root is null, insert a new value
		if (root === null) {
			root = Node(value);
			return root;
			// don't do anything if the value already exists in the tree
		} else if (value === root.value) return root;
		// if value is smaller than the root, travel into the left side
		else if (value < root.value) root.left = insertLeaf(value, root.left);
		// if bigger, travel into the right side
		else root.right = insertLeaf(value, root.right);
		return root;
	};
	return { root, insert };
};

export default Tree;
