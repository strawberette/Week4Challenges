// CHALLENGE 1

// helloCodeNation = () => {
//     console.log("Hello Code Nation!")
// }

// const repetition = (fn) => {
//     for (i= 0; i<4; i++){
//         helloCodeNation()
//     }
// }

// repetition(helloCodeNation())

// CHALLENGE 2

// const sum = (num1, num2) => {
//     return num1 + num2
// }


// let total = 0

// repetition = (fn, num_1, num_2) => {
//     for (i = 0 ; i < 5; i++) {
     
//         total += fn(num_1, num_2);
//         console.log(total)
//     }
// }

// repetition(sum, 3,4)

// CHALLENGE 3

// let array = [
//     1,
//     2,
//     3,
//     4,
//     5
// ]


// const multiply = (fn) => {
//     return fn * 3
// } 

// const map = array.map(multiply)

// console.log(map)



// CHALLENGE 4

const multiply = (a,b) => {
    return a * b
}

const add = (a,b) => {
    return a + b
}

const divide = (a, b) => {
    return a / b
}

const subtract = (a, b) => {
    return a - b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}

const maths = doMath(5)
console.log(maths(3, multiply))
console.log(maths(3, add))
console.log(maths(3, divide))
console.log(maths(3, subtract))
