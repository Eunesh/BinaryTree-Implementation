// Creating Node class for Nodes
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  InsertNewData(data) {
    // Data taking as parameter pass into Node class object for data in Node
    const newNode = new Node(data);

    //If root value is null then a NewNode is inserted
    if (this.root === null) {
      this.root = newNode;
    } else {
      //Find the appropraite location inside the tree and add a new node in that place
      this.addNewDataNode(this.root, newNode);
    }
  }

  // This method will add the new data at the appropriate position in the tree
  addNewDataNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNewDataNode(node.left, newNode); // If no left node having null value found call the same method recursively untill null node is found at left side
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNewDataNode(node.right, newNode);
      }
    }
  }

  //Retrieving data
  retrieveData() {
    return console.log(this.root);
  }
}

let BT = new BinaryTree();

BT.InsertNewData(25);
BT.InsertNewData(30);
BT.InsertNewData(17);

BT.retrieveData();

// let N = new Node();

// N.show();
