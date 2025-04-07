function algoritm(m) {
    if (isNaN(m) || m < 1 || !Number.isInteger(m)) {
        console.log("Помилка: m повинно бути цілим числом більше або рівне 1.");
        return;
    }

    console.log(`Послідовність перших ${m} членів:`);
    for (let n = 1; n <= m; n++) {
        let x_n = (Math.cos(2 * n - 5) + n) / (4 * n + 1);
        console.log(`x_${n} = ${x_n.toFixed(6)}`);
    }
}

let m = parseInt(prompt("Введіть кількість членів послідовності (m ≥ 1):"), 10);
algoritm(m);
