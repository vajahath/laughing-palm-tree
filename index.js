class Link {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

const linkA = new Link('asd');

console.log(JSON.stringify(linkA));
