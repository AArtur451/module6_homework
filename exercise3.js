function createNumber(baseNumber){
    return function (newNumber){
        return baseNumber + newNumber;
    };
}

let someNumber = createNumber(5);
let result = someNumber(10);
console.log(result);