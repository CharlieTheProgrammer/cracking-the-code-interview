
class DoublyLinkedList {
  constructor(data) {
    this.head = this.node(data);
    this.count = 1;
  }

  node(data) {
    return {
      prev: null,
      data,
      next: null
    }
  }

  append(data) {
    let nn = this.node(data);
    let current = this.head;

    while (current.next) {
      current = current.next
    }
    current.next = nn;
    current.next.prev = current;
    this.count++;
  }

  prepend(data) {
    let nn = this.node(data);
    nn.next = this.head;
    this.head.prev = nn;
    this.head = nn;
    this.count++;
  }

  insertAfterValue(value, data) {
    let current = this.head;
    let nn = this.node(data);

    const walk = (value, data, node) => {
      if (node.data == value) {
        if (!node.next) {
          nn.prev = node;
          node.next = nn;
          this.count++;
          return;
        } else {
          node.next.prev = nn;
          nn.prev = node;
          nn.next = node.next;
          node.next = nn;
          this.count++;
          return;
        }
      } else {
        // Base case handling
        if (!node.next) return;
        node = node.next;
        walk(value, data, node);
      }
    }

    return walk(value, data, current);
  }

  first() {
    return this.head;
  }

  last() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  getAllValues() {
    let current = this.head;
    let values = [current.data];

    while(current.next) {
      current = current.next;
      values.push(current.data);
    }
    return values;
  }

  getAllValuesReversed() {
    let current = this.last();
    let values = [current.data];
    while(current.prev) {
      current = current.prev;
      values.push(current.data);
    }
    return values;
  }
}

let dll = new DoublyLinkedList('one');


// Testing
dll.append('two');
dll.prepend('Pre')
dll.insertAfterValue('doesn', 'insertedByValue');
console.log(dll.getAllValues());
console.log(dll.getAllValuesReversed());
console.log(dll.count);
console.log(dll.first());
console.log(dll.last())