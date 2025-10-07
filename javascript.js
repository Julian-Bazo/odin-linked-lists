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
    
    at(index) {
        let i = 0;
        let currentNode = this.head;
        if (index > LinkedList.nodeNum - 1 || index < 0) {
            console.error("Index does not exist");
        }
        console.log("Index found:");
        if (index === 0) {
            console.log(currentNode);
            return currentNode;
        }
        while (i < index) {
            currentNode = currentNode.nextNode;
            i++;
        }
        console.log(currentNode);
        return currentNode;
    }

    pop() {
        LinkedList.nodeNum--;
        if (LinkedList.nodeNum > 0) {
        let newTail = this.at(LinkedList.nodeNum - 1);
        this.tail = newTail;
        console.log("Last node popped, new tail set:")
        console.log(this.tail);
        }
        else {
            console.error("Only the head remains. Nothing left to pop. Create new list instead.")
            LinkedList.nodeNum++;
        }
    }

    contains(value) {
        let i = 0;
        let currentNode = this.head;
        let valuePresent = false;
        while (i <= LinkedList.nodeNum - 1) {
            if (currentNode.value === value) {
                valuePresent = true;
            }
            currentNode = currentNode.nextNode;
            i++;
        }
        console.log("Value present?");
        console.log(valuePresent);
        return valuePresent;
    }

    find(value) {
        if (this.contains(value) === false) {
            console.log("No value present on list.");
            return null
        }
        else {
            let i = 0;
            let currentNode = this.head;
            while (i <= LinkedList.nodeNum) {
                if (currentNode.value === value) {
                    console.log(`${value} found at index ${i}`);
                    return i;
                }
                currentNode = currentNode.nextNode;
                i++
            }
        }
    }

    toString() {
        let i = 1;
        let currentNode = this.head;
        let totalString = "";
        let arrow = "--> ";
        while (i <= LinkedList.nodeNum) {
            if (i === LinkedList.nodeNum) {
                arrow = "";
            }
            totalString += `(${JSON.stringify(currentNode.value)}) ${arrow}`;
            currentNode = currentNode.nextNode;
            i++;
        }
        console.log(totalString);
        return totalString;
    }

    insertAt(index, value) {
        LinkedList.nodeNum++;
        if (index > LinkedList.nodeNum) {
            LinkedList.nodeNum--;
            return console.error("Not a valid index for insertion");
        }
        if (index === 0 || this.head === null) {
            return this.prepend(value);
        }
        if (index === LinkedList.nodeNum) {
            return this.append(value);
        }

        let i = 0;
        const newNode = new Node(value);
        let currentNode = this.head;

        while (i != index - 1) {
            currentNode = currentNode.nextNode; //2
            i++;
        }

        const attachedNode = currentNode.nextNode //3

        currentNode.nextNode = newNode;
        newNode.nextNode = attachedNode;

        console.log(currentNode);
        console.log(attachedNode);

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
newList.insertAt(3, "second two")
newList.append("End");
newList.toString();



// newList.getHead();
// newList.getTail();
// newList.size();