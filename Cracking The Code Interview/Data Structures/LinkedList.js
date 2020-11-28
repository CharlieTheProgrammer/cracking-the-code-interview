class LinkedList {
	//
	constructor(data) {
		this.head = this.node(data);
	}

	node(data) {
		return {
			data: data,
			next: null,
		};
	}

	// Append
	append(data) {
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = this.node(data);
	}

	// Prepend
	prepend(data) {
		// let current = this.head;
		let newNode = this.node(data);
		newNode.next = this.head;
		this.head = newNode;
	}
	// Count Nodes
	static count(node) {
		let count = 1;
		while (node.next) count++;
		return count;
	}
	// Delete Node by value
	deleteNodeByValue(data) {
		if (this.head.data === data) this.head = this.head.next;

		let current = this.head;
		while (current.next) {
			if (current.next.data === data) current.next = current.next.next;
		}
	}

	// get all values as array
	getAllValues() {
		let arr = [this.head.data];
    // data is a given for this class
		// arr.push(this.head.data);
    
		let current = this.head;
		while (current.next) {
			current = current.next;
			arr.push(current.data);
		}

		return arr;
	}
}

let ll = new LinkedList('one');

console.log(LinkedList.count(ll));

// Append two nodes
ll.append('two');
// ll.append('Three');
// ll.prepend('Pre')

console.log(ll.getAllValues());
