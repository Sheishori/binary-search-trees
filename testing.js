import Tree from './Tree.js';

let newTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

newTree.insert(0);
newTree.insert(55);
newTree.insert(45);
newTree.prettyPrint();
newTree.rebalance();
newTree.prettyPrint();
