import Tree from './Tree.js';

function generateRandomArray(quantity) {
	let array = [];
	for (let i = 0; i < quantity; i++) {
		array[i] = Math.floor(Math.random() * 1000);
	}
	return array;
}

function printAllOrders(tree) {
	console.log('\nPrinting level order:', tree.levelOrder());
	console.log('\nPrinting preorder:', tree.preorder());
	console.log('\nPrinting inorder:', tree.inorder());
	console.log('\nPrinting postorder:', tree.postorder());
}

console.log('Generating a random array of 20 elements form 0 to 1000:');
const randomArray = generateRandomArray(20);
console.log(randomArray);

console.log('\nCreating a binary search tree from the array:');
const tree = Tree(randomArray);
tree.prettyPrint();

console.log('\nCheck if the tree is balanced:', tree.isBalanced());

printAllOrders(tree);

console.log('\nAdding 10 new elements:');
const more = generateRandomArray(10);
console.log(more);
for (let i = 0; i < more.length; i++) {
	tree.insert(more[i]);
}
tree.prettyPrint();

console.log('\nCheck if the tree is balanced:', tree.isBalanced());

console.log('\nRebalancing the tree:');
tree.rebalance();
tree.prettyPrint();

console.log('\nCheck if the tree is balanced:', tree.isBalanced());

printAllOrders(tree);
