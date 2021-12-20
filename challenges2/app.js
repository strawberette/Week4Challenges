const notNull = () => {
    return 5
}

const isTruthy = () => {
    return "yes"
}

const isNotFalsy = () => {
    return 4
}

const checkObj = (prop1, prop2) => {
    return {
        "property1": prop1,
        "property2": prop2
    }
}

const checkArray = () => {
    return [1, 2, 3, 4, 5, 6]
}

const numberToStr = (number) => {
    return number.toString()
}

const planet = (i) => {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune" ]
    return planets[i]
}  

const registerCount = (register) => {
    let count = 0;
    for (i = 0; i<= register.length; i++) {
        if (register[i]) {
            count++
        }
    }
    return count
}


const square = (number) => {
    const str = number.toString()
    const split = str.split("")
    let whyBen = []
    for (i=0; i<= split.length; i++) {
       let  num = parseInt(split[i]) 
       num = num * num
       whyBen[i] = num
    }
    return parseInt(whyBen.join(""))
}

const century = (year) => {
    return Math.floor(year / 100) + 1
}

const integer = (ar) => {
    return parseInt(ar.join(""), 2)
}

exports.integer = integer
exports.century = century
exports.square = square
exports.registerCount = registerCount
exports.planet = planet
exports.notNull = notNull
exports.isTruthy = isTruthy
exports.isNotFalsy = isNotFalsy
exports.checkObj = checkObj
exports.checkArray = checkArray
exports.numberToStr = numberToStr
