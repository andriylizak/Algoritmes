class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    insertBeforePositive(value) {
        let current = this.head;
        while (current) {
            if (current.data > 0) {
                const newNode = new Node(value);
                newNode.next = current;
                newNode.prev = current.prev;
                if (current.prev) {
                    current.prev.next = newNode;
                } else {
                    this.head = newNode;
                }
                current.prev = newNode;
            }
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        console.log(result.trim());
    }
}

const list = new DoublyLinkedList();
[-2, 5, -7, 10, 3].forEach(num => list.add(num));
console.log("Двозв'язний список перед змінами:");
list.printList();
list.insertBeforePositive(2.5);
console.log("Після змін:");
list.printList();
