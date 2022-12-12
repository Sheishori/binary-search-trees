const Node = (root) => {
	let leftChild = null;
	let rightChild = null;

	const setLeftChild = (node) => {
		leftChild = node;
	};

	const setRightChild = (node) => {
		rightChild = node;
	};

	const getLeftChild = () => {
		return leftChild;
	};

	const getRightChild = () => {
		return rightChild;
	};

	return { root, setLeftChild, setRightChild, getLeftChild, getRightChild };
};

export default Node;
