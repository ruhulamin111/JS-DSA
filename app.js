function sumOfNumbers(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sumOfNumbers(10)) // big o n 

function sumOfNumbers(n) {
    return n * (n + 1) / 2
}
console.log(sumOfNumbers(10)) // big o 1