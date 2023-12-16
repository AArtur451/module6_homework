function countEvenOddZero(myArray) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < myArray.length; i++) {
        let element = myArray[i];

        if (typeof element === 'number' && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Четные элементы: ${evenCount}`);
    console.log(`Нечетные элементы: ${oddCount}`);
    console.log(`Нулевые элементы: ${zeroCount}`);
}

let myArray = [1, 2, 3, 4, 5, 6, 0, null, undefined];
countEvenOddZero(myArray);