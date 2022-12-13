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
		root = insertRec(value, root);
	};

	const insertRec = (value, root) => {
		// if root is null, insert the new value as root
		if (root === null) return Node(value);
		// if value is smaller than the root, travel into the left side
		if (value < root.value) root.left = insertRec(value, root.left);
		// if value is bigger than the root, travel into the right side
		else if (value > root.value) root.right = insertRec(value, root.right);
		// don't do anything if the value already exists in the tree
		return root;
	};

	const deleteNode = (value) => {
		root = deleteNodeRec(value, root);
	};

	const deleteNodeRec = (value, root) => {
		// don't do anything if the tree is empty or value doesn't exist
		if (root === null) return root;
		// if deleting a value smaller than the root, travel into the left side
		if (value < root.value) root.left = deleteNodeRec(value, root.left);
		// if deleting a value bigger than the root, travel into the right side
		else if (value > root.value) root.right = deleteNodeRec(value, root.right);
		else {
			//if node has no children, remove it
			if (root.left === null && root.right === null) return null;
			// if deleting a node with only a right child, replace it with it
			if (root.left === null) return root.right;
			// if deleting a node with only a left child, replace it with it
			if (root.right === null) return root.left;

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

	const find = (value) => {
		return findRec(value, root);
	};

	const findRec = (value, root) => {
		if (root === null) return 'Node with a given value was not found';
		if (value === root.value) return root;
		if (value < root.value) return findRec(value, root.left);
		else return findRec(value, root.right);
	};

	// execute the function provided to the tree traversal methods
	const processFunc = (nodes, func) => {
		// if function exists, provide each node to the function
		if (func) {
			nodes.forEach((node) => {
				func(node);
			});
			// else return an array of values
		} else {
			let values = [];
			nodes.forEach((node) => {
				values.push(node.value);
			});
			return values;
		}
	};

	const levelOrder = (func) => {
		if (root === null) return;
		let queue = [root];
		let nodes = [];
		// queue all children using breadth-first traversal
		while (queue[0]) {
			// add all nodes to an array
			nodes.push(queue[0]);
			if (queue[0].left !== null) queue.push(queue[0].left);
			if (queue[0].right !== null) queue.push(queue[0].right);
			queue.shift();
		}
		return processFunc(nodes, func);
	};

	const preorder = (func) => {
		let nodes = preorderRec(root);
		return processFunc(nodes, func);
	};

	const preorderRec = (root, nodes = []) => {
		if (root === null) return;
		nodes.push(root);
		if (root.left !== null) preorderRec(root.left, nodes);
		if (root.right !== null) preorderRec(root.right, nodes);
		return nodes;
	};

	const inorder = (func) => {
		let nodes = inorderRec(root);
		return processFunc(nodes, func);
	};

	const inorderRec = (root, nodes = []) => {
		if (root === null) return;
		if (root.left !== null) inorderRec(root.left, nodes);
		nodes.push(root);
		if (root.right !== null) inorderRec(root.right, nodes);
		return nodes;
	};

	const postorder = (func) => {
		let nodes = postorderRec(root);
		return processFunc(nodes, func);
	};

	const postorderRec = (root, nodes = []) => {
		if (root === null) return;
		if (root.left !== null) postorderRec(root.left, nodes);
		if (root.right !== null) postorderRec(root.right, nodes);
		nodes.push(root);
		return nodes;
	};

	const height = (node) => {
		if (node === null) return -1;
		let leftHeight = height(node.left);
		let rightHeight = height(node.right);
		// pick the longer path
		return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
	};

	const depth = (node, nodeRoot = root) => {
		if (node === null) return -1;
		if (node === nodeRoot) return 0;
		// add 1 for every recursive call into a branch in search of the value
		if (node.value < nodeRoot.value) return depth(node, nodeRoot.left) + 1;
		else return depth(node, nodeRoot.right) + 1;
	};

	return {
		root,
		insert,
		deleteNode,
		find,
		levelOrder,
		preorder,
		inorder,
		postorder,
	};
};

export default Tree;
