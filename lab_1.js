class Computer {
    constructor(name, ram) {
        this.name = name;
        this.ram = ram;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Додавання нового комп'ютера у чергу
    enqueue(computer) {
        this.items.push(computer);
    }

    // Видалення першого елемента з черги
    dequeue() {
        if (this.isEmpty()) {
            console.log("Черга порожня, видалення неможливе.");
            return null;
        }
        return this.items.shift();
    }

    // Перевірка, чи черга порожня
    isEmpty() {
        return this.items.length === 0;
    }

    // Перегляд даних черги
    displayQueue() {
        if (this.isEmpty()) {
            console.log("Черга порожня.");
            return;
        }
        console.log("Дані у черзі:");
        this.items.forEach((computer, index) => {
            console.log(`${index + 1}. Комп'ютер: ${computer.name}, ОЗП: ${computer.ram} ГБ`);
        });
    }

    // Обчислення загального обсягу пам'яті
    getTotalRAM() {
        return this.items.reduce((total, computer) => total + computer.ram, 0);
    }

    // Очистка черги
    clearQueue() {
        this.items = [];
        console.log("Черга очищена.");
    }
}

function main() {
    // Створення черги
    const queue = new Queue();

    // Додавання комп'ютерів у чергу
    queue.enqueue(new Computer("Dell XPS", 16));
    queue.enqueue(new Computer("MacBook Pro", 32));
    queue.enqueue(new Computer("HP Spectre", 8));
    queue.enqueue(new Computer("Asus ROG", 64));

    // Перегляд черги
    queue.displayQueue();

    // Видалення першого елемента (FIFO)
    console.log("Видаляємо перший комп'ютер...");
    queue.dequeue();

    // Перегляд оновленої черги
    queue.displayQueue();

    // Обчислення загального обсягу ОЗП
    console.log(`Загальний обсяг ОЗП: ${queue.getTotalRAM()} ГБ`);

    // Очищення черги
    queue.clearQueue();
}

main();
