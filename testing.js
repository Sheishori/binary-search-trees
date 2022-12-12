import Tree from './Tree.js';

let newTree = Tree([1, 2, 3, 4, 5, 6, 7]);
console.log(newTree);

const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.root}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

prettyPrint(newTree.root);
console.log(newTree.root);
