function forCount(number) {
    if (number <= 1 || number > 1000) {
        console.log("Данные неверны. Введите число от 2 до 1000.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} не является простым числом.`);
            return;
        }
    }

    console.log(`${number} является простым числом.`);
}

let userInput = prompt("Введите число:");
userInput = parseInt(userInput);
forCount(userInput);