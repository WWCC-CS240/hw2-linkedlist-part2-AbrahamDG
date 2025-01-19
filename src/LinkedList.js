// Copy your Linked List Part 1 solution or instructor provided solution as a starting point
const Node = require('./Node.js');

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	print(cb = console.log) {
		let current = this.head;
		while (current !== null){
			cb(current.value);
			current = current.next;
		}
	}

	append(value) {
		//this appends to end of the list
		const newNode = new Node(value);
		if (this.head === null){
			this.head = newNode;
		}
		else{
			let current = this.head;
			while (current.next){
				current = current.next;
			}
			current.next = newNode;

		}
		this.length ++;
	}

	prepend(value) {
		//create a new node
		const newNode = new Node(value);

		// this points to the current head of the list
		newNode.next = this.head;

		//this makes the new node the head of the list
		this.head = newNode;

	}

    get(ind){

        // Set up the varaibles one to start at the top of the list and teh other to count and track where we are
        let count = 0; 
        let current = this.head;

        // Travel thru the list and stop when we reach the end
		while (current !== null){
            // were checking if the current varibale macthes the index were trying to find and we return that index
			if (count === ind){
                return current.value;
            } 
            //if we do not find the index then we keep traveling and incrementing the count
            current = current.next;
            count ++;
		}
        throw new Error("Index doesnt exist");
        
    }

    find(value){
        //start at head
        let current = this.head;
		let index = 0;
        
        //travel thru the list unt9il we find the value we need
        while(current){
            if (current.value === value){
                return index;
            }
            //if we dont find it travel a little more
            current = current.next;
			index ++;
        }
        //if we dont find it at all we return null. 
        return -1;
    }


}

module.exports = LinkedList;