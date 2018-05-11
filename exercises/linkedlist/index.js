// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let node = this.head;

    while(node) {
      if(!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // getLast() {
  //   let node = this.head;
  //   let lastNode = null;
  //   while(node) {
  //     lastNode = node;
  //     node = node.next;
  //   }
  //   return lastNode;
  // }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if(last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if(index === counter) {
        return node;
      } else {
        counter++;
        node = node.next;
      }
    }
    return null;
  }

  removeAt(index) {
    if(!this.head) {
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {

    const node = new Node(data);

    if(!this.head) {
      this.head = node;
      return;
    }

    const previous = this.getAt(index - 1);
    const current = this.getAt(index);

    if(index === 0 && this.head.next) {
      this.insertFirst(data);
      return;
    }


    if(index > this.size()) {
      return this.insertLast(data);
    }

    previous.next = node;
    node.next = current;
    return this.getAt(index);
  }
}

module.exports = { Node, LinkedList };
