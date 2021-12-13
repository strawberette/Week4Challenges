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

exports.notNull = notNull
exports.isTruthy = isTruthy
exports.isNotFalsy = isNotFalsy
exports.checkObj = checkObj
exports.checkArray = checkArray
exports.numberToStr = numberToStr
