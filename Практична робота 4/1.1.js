function algoritm(x, a, b) {
    let f_x;

    if (x > -2 && x < 10) {
        if (b * x + 3 < 0) {
            console.log("Помилка: підкореневий вираз не може бути від’ємним.");
            return;
        }
        f_x = Math.sqrt(b * x + 3);
    } 
    else if (x === 10) {
        f_x = Math.abs(x ** 2 - a * x + 7);
    } 
    else if (x > 10) {
        f_x = Math.cos(x - 1);
    } 
    else {
        console.log("Помилка: значення x поза допустимим діапазоном.");
        return;
    }

    console.log(`Значення функції f(${x}) = ${f_x}`);
}

let x = parseFloat(prompt("Введіть x:"));
let a = parseFloat(prompt("Введіть a:"));
let b = parseFloat(prompt("Введіть b:"));

if (isNaN(x) || isNaN(a) || isNaN(b)) {
    console.log("Помилка: введені некоректні числові значення.");
} else {
    algoritm(x, a, b);
}
