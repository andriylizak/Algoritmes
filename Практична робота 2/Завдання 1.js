class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Клас для роботи з односпрямованим списком
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Додавання елемента в кінець списку
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
        }
    }

    // Видалення першого парного елемента, який знаходиться на непарній позиції
    removeFirstEvenOnOddPosition() {
        let current = this.head;
        let prev = null;
        let index = 1;

        while (current) {
            if (index % 2 !== 0 && current.data % 2 === 0) {
                if (!prev) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                break;
            }
            prev = current;
            current = current.next;
            index++;
        }
    }

    // Виведення списку у консоль
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

const list = new LinkedList();
[3, 4, 7, 8, 10, 12].forEach(num => list.add(num));
console.log("Список перед видаленням:");
list.printList();
list.removeFirstEvenOnOddPosition();
console.log("Список після видалення:");
list.printList();
