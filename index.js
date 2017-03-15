class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class Pellist {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	// insert into beginning of the list
	insert(value) {
		let node = new Node(value);

		if (this.length) {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this.length++;

		return node;
	}

	// insert into end of the list
	insert_last(value) {
		let node = new Node(value);

		if (this.length) {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this.length++;

		return node;
	}

	// return the node at the position
	getNodeAt(position) {
		let currentNode = this.head;
		let length = this.length;
		let count = 1;
		let message = {
			failure: "non-existent node in the list"
		};

		// invalid position
		if (
			length === 0 ||
			position < 0 ||
			position > length
		) {
			throw new Error(message.failure);
		} else {
			while (count < position) {
				currentNode = currentNode.next;
				count++;
			}
			return currentNode;
		}
	}

}


let list = new Pellist();

list.insert('1');
list.insert_last('3');
list.insert('5');
list.insert('11');
list.insert_last('33');
list.insert('55');
list.insert('111');
list.insert_last('333');
list.insert('555');

console.log(list.getNodeAt(4));
