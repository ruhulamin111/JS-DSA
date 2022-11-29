// time complexity 
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


// space complexity 
function sum(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
}
// console.log(sum([2, 4, 6])) // big o (1)

function double(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray;
}
// console.log(double([2, 4, 6])) // big o (n)

function uniqueName(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (!newArray.includes(element)) {
            newArray.push(element)
        }
    }
    return newArray;
}

// console.log(uniqueName(['rakib', 'rafe', 'rifat', 'ruhul', 'rakib'])); // big o (n)


// recursion 
function sumOfArray(arr) {
    console.log(arr);
    return helperSum(arr, 0)
}

function helperSum(arr, index) {
    if (arr.length === index) return 0;
    return arr[index] + helperSum(arr, index + 1)
}

console.log(sumOfArray([2, 3, 4]))
