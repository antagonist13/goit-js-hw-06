// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.


// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

class Storage {
    #items
    constructor(items) {
        this.#items = items
    }
    getItems() {
        return this.#items
    }
    addItem(item) {
        this.#items.push(item);
    }
    removeItem(itemToRemove) {
        const deleteItem = this.#items.indexOf(itemToRemove);
        if (deleteItem !== -1) {
            this.#items.splice(deleteItem, 1);
        } else {
            console.log("Error. Перелік товарів не містить такої назви.");
        }
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Залиш цей код для перевірки ментором.



// На що буде звертати увагу ментор при перевірці:

// Оголошений клас Storage
// У класі Storage оголошений метод getItems
// У класі Storage оголошений метод addItem
// У класі Storage оголошений метод removeItem
// Властивість items у класі Storage оголошена приватною
// Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає
// Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає
// Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає
// У результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage — це об'єкт
// У об’єкта storage немає публічної властивості items
// Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив ["Nanitoids", "Antigravitator", "Droid"]

