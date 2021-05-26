class LinkedList {
  constructor(data) {
    this.head = this.node(data);
  }

  node(data=null) {
    return {
      data,
      next: null
    }
  }

  append(data) {
    let cn = this.head;
    while(cn.next) {
      cn = cn.next;
    };
    cn.next = this.node(data);
    return this.head;
  }

  prepend(data) {
    let nn = this.node(data);
    // Point new node to the head node.
    nn.next = this.head;
    // Point this.head to the new node.
    this.head = nn;
    return this.head;
  }

  count() {
    let cn = this.head;
    let count = 1;
    while(cn.next) {
      count++;
      cn = cn.next;
    };
    return count;
  }

  find(data) {
    let cn = this.head;
    if (cn.data === data)
      return cn;
    while(cn.next) {
      if (cn.next.data === data)
        return cn.next;
      cn = cn.next;
    };
    return null;
  }

  map(cb) {
    let arr = [];
    let cn = this.head;
    arr.push(cb(cn.data));
    while(cn.next) {
      arr.push(cb(cn.next.data));
      cn = cn.next;
    }
    return arr;
  }

  pop() {
    let cn = this.head;
    while(cn.next) {
      if (cn.next.next)
        cn = cn.next;
      else
        cn.next = null;
    }
    return this.head;
  }

  static swap(node1, node2) {
    let tempData = node1.data;
    node1.data = node2.data;
    node2.data= tempData;
    return this.head;
  }


}


let ll = new LinkedList(1);
ll.append(2)
ll.append(3)
// ll.pop();
// ll.pop();

let node1 = ll.find(1);
let node2 = ll.find(3);
// console.log(node);

LinkedList.swap(node1, node2);

ll.map(data => console.log(data));