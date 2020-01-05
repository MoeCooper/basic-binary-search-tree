class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BSTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode
    }
  }
  lookup(value){

  }
} 



const tree = new BSTree(10)
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)