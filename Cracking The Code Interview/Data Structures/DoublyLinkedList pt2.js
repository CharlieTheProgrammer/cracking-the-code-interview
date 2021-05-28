class DoublyLinkedList {
	constructor(data) {
		this.head = this.node(data);
	}

	node(data) {
		return {
			prev: null,
			data,
			next: null,
		};
	}

	append(data) {
		let cn = this.head;
		while (cn.next) {
			cn = cn.next;
		}
		let nn = this.node(data);
		nn.prev = cn;
		cn.next = nn;
		return this;
	}

	prepend(data) {
		let cn = this.head;
		let nn = this.node(data);
		nn.next = cn;
		cn.prev = nn;
		this.head = nn;
		return this;
	}

	count() {
		let cn = this.head;
		let count = 1;
		while (cn.next) {
			count++;
			cn = cn.next;
		}
		return count;
	}

	pop() {
		let cn = this.head;
		while (cn.next) {
			cn = cn.next;
		}
		cn.prev.next = null;
		cn.prev = null;
		return this;
	}

	find(data) {
		let cn = this.head;
		if (cn.data === data) {
			return cn;
		}
		while (cn.next) {
			cn = cn.next;
			if (cn.data === data) {
				return cn;
			}
		}
		return null;
	}

	insertAfter(data, search) {
		let matchedNode = this.find(search);

		if (!matchedNode) return false;

		let nn = this.node(data);
		nn.next = matchedNode.next;
		nn.prev = matchedNode;

		if (matchedNode.next) matchedNode.next.prev = nn;
		matchedNode.next = nn;
		return this;
	}

	
	insertBefore(data, search) {
		let matchedNode = this.find(search);

		if (this.head.data === search) return this.prepend(data);

		if (!matchedNode) return false;
		let nn = this.node(data);

		nn.next = matchedNode;
		nn.prev = matchedNode.prev;
		matchedNode.prev.next = nn;
		matchedNode.prev = nn;
		return this;
	}

  static swap(node1, node2) {
    let temp = node1.data;
    node1.data = node2.data;
    node2.data = temp;
    return this;
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
}

let ll = new DoublyLinkedList(1);
ll.append(2)
// ll.append(3)


// let node1 = ll.find(1);
ll.insertBefore(10, 2)
ll.insertAfter(11,2)
// let node2 = ll.find(3);

// console.log(node1);

// DoublyLinkedList.swap(node1, node2);

module.exports = {
	DoublyLinkedList
}