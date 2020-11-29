// Queue is First In First Out (FIFO)
class Queue {
	constructor({ maxItems = null } = {}) {
		this.list = [];
		this.maxItems = maxItems;
	}

	enqueue(data) {
		if (this.maxItems == null) {
			this.list.push(data);
			return this;			
		} else if (this.maxItems !== this.list.length) {
      this.list.push(data);
      return this.list;
    }
  }

	dequeue() {
    if (this.isEmpty()) return null;
    return this.list.shift();
  }

	peek() {
		return this.isEmpty() ? null : this.list[0];
	}
	
	count() {
		return this.list.length;
	}

	isFull() {
		return this.maxItems === this.list.length;
	}

	isEmpty() {
		return this.list.length === 0;
	}
}


let myQ = new Queue();

console.log(myQ.isEmpty());
console.log(myQ.isFull());
myQ.enqueue("First");
console.log(myQ.isEmpty());
myQ.enqueue("Second");
// console.log(myQ.isFull());
myQ.enqueue("Third");
myQ.enqueue("Fourth");
console.log(myQ.isFull());
console.log(myQ.peek());
console.log(myQ.dequeue())
console.log(myQ.count());
console.log(myQ.dequeue())
console.log(myQ.count());
console.log(myQ.dequeue())
console.log(myQ.count());
console.log(myQ.dequeue())
console.log(myQ.count());