class LinkedList {

    static nodeNum = 0;

    constructor(name) {
        this.name = name;
        this.head = null;
    }

    append(nodeName) {
        LinkedList.nodeNum++;
        const newNode = new Node(nodeName);
        if (this.head === null) {
            this.head = newNode;
        }
    }

    prepend(nodeName) {
        LinkedList.nodeNum++;
        const newNode = new Node(nodeName);
        this.head = newNode;
    }

    size() {
        console.log(`Node count: ${LinkedList.nodeNum}`);
    }

    getHead() {
        console.log(this.head)
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
newList.append("test");
newList.getHead();
console.log(newList);
newList.prepend("secondary");
newList.size();
newList.getHead();

