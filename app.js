function sumOfNumbers(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
// console.log(sumOfNumbers(10)) // big o n 

function sumOfNumbers(n) {
    return n * (n + 1) / 2
}
// console.log(sumOfNumbers(10)) // big o 1

function multipleOfNumbers(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            console.log(i, j)
        }
    }
}

// console.log(multipleOfNumbers(10))// big o n2


function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
}
console.log(sum([2, 4, 6]))

function double(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray;
}
console.log(double([2, 4, 6]))

