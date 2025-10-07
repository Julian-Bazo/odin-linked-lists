class LinkedList {

    static nodeNum = 0;

    constructor(name) {
        this.name = name;
        this.head = null;
        this.tail = null;
    }

    append(nodeName) {
        LinkedList.nodeNum++;
        const newNode = new Node(nodeName);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            const tailNode = new Node(nodeName);
            this.tail.nextNode = tailNode;
            this.tail = tailNode;
            // if (this.head.nextNode.nextNode === null) {
            //     console.log("ping")
            //     this.tail = this.head.nextNode;
            // }
            // else {
                
            // }
        }
    }

    prepend(nodeName) {
        LinkedList.nodeNum++;
        const newNode = new Node(nodeName);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
        newNode.nextNode = this.head;
        this.head = newNode;
        }
    }

    size() {
        console.log(`Node count: ${LinkedList.nodeNum}`);
    }

    getHead() {
        console.log("Head Node:")
        console.log(this.head);
    }

    getTail() {
        console.log("Tail Node:")
        console.log(this.tail);
    }
    


}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = null;
    }
}

const newList = new LinkedList("Default");
console.log(newList);
newList.prepend("first");
newList.append("second");
newList.append("third");
newList.prepend("zero");
newList.append("End");


newList.getHead();
newList.getTail();
newList.size();

