function algoritm(x, a, b) {
    let f_x;

    if (x > -2) {
        if (x < 10) {
            let sqrtExpression = b * x + 3;
            if (sqrtExpression >= 0) {
                f_x = Math.sqrt(sqrtExpression);
            } else {
                console.log("Помилка: підкореневий вираз не може бути від’ємним.");
                return;
            }
        } else {
            if (x === 10) {
                f_x = Math.abs(x ** 2 - a * x + 7);
            } else {
                f_x = Math.cos(x - 1);
            }
        }
    } else {
        console.log("Помилка: значення x поза допустимим діапазоном.");
        return;
    }

    console.log(`Значення функції f(${x}) = ${f_x}`);
}

let x = parseFloat(prompt("Введіть x:"));
let a = parseFloat(prompt("Введіть a:"));
let b = parseFloat(prompt("Введіть b:"));

if (!isNaN(x) && !isNaN(a) && !isNaN(b)) {
    algoritm(x, a, b);
} else {
    console.log("Помилка: введені некоректні числові значення.");
  }
