import Tree from './Tree.js';

let newTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

newTree.insert(0);
newTree.insert(5);
newTree.insert(6);
newTree.insert(6.5);
newTree.prettyPrint();
//console.log(newTree.levelOrder());
//console.log(newTree.preorder());
//console.log(newTree.inorder());
//console.log(newTree.postorder());
newTree.rebalance();

newTree.prettyPrint();
