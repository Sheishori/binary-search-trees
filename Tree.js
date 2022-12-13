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

	const deleteNode = (value) => {
		root = deleteNodeRec(value, root);
	};

	const deleteNodeRec = (value, root) => {
		if (root === null) return root;
		//if node has no children, remove it
		if (value === root.value && root.left === null && root.right === null)
			return null;
		// if deleting a value smaller than the root, travel into the left side
		else if (value < root.value) root.left = deleteNodeRec(value, root.left);
		// if smaller, travel into the right side
		else if (value > root.value) root.right = deleteNodeRec(value, root.right);
		else {
			// if deleting a node with only a right child, replace it with it
			if (root.left === null) return root.right;
			// if deleting a node with only a left child, replace it with it
			else if (root.right === null) return root.left;

			// if deleting a node with two children, replace it's value with the smallest from the right subtree
			root.value = smallestChild(root.right);

			// delete the child whose value was used to replace the deleted node
			root.right = deleteNodeRec(root.value, root.right);
			return root;
		}
		return root;
	};

	const smallestChild = (root) => {
		// search for the smallest child in the tree
		if (root.left === null) return root.value;
		else return smallestChild(root.left);
	};

	return { root, insert, deleteNode };
};

export default Tree;
