// Stack is Last in First Out (LIFO)
class Stack {
	constructor({ maxItems = null } = {}) {
		this.list = [];
		this.maxItems = maxItems;
	}

	push(data) {
		if (this.maxItems == null) {
			this.list.push(data);
			return this;
		} else if (this.maxItems !== this.list.length) {
			this.list.push(data);
			return this.list;
		}
	}

	pop() {
		if (this.isEmpty()) return null;
		return this.list.pop();
	}

	count() {
		return this.list.length;
	}

	peek() {
		return this.list[this.list.length - 1];
	}

	isFull() {
		return this.maxItems === this.list.length;
	}

	isEmpty() {
		return this.list.length === 0;
	}
}

let myS = new Stack({ maxItems: 3 });

console.log(myS.isEmpty());
console.log(myS.isFull());
myS.enqueue('First');
console.log(myS.isEmpty());
myS.enqueue('Second');
// console.log(myQ.isFull());
myS.enqueue('Third');
myS.enqueue('Fourth');
console.log(myS.isFull());
console.log(myS.peek());
console.log(myS.dequeue());
console.log(myS.count());
console.log(myS.dequeue());
console.log(myS.count());
console.log(myS.dequeue());
console.log(myS.count());
console.log(myS.dequeue());
console.log(myS.count());
