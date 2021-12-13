const { 
    notNull, 
    isTruthy, 
    isNotFalsy, 
    checkObj, 
    checkArray,
    numberToStr
} = require("../app")

test("should not be null",() => {
    expect(notNull()).not.toBeNull()
})

test("should be truthy", () => {
    expect(isTruthy()).toBeTruthy()
})

test("should not be falsy", () => {
    expect(isNotFalsy()).not.toBeFalsy()
})

test("should equal to the expected properties", () => {
    const prop1 = "test1"
    const prop2 = "test2"
    testObj = {
        "property1": prop1,
        "property2": prop2
    }
    expect(checkObj(prop1, prop2)).toEqual(testObj)
})

test("should not at least 6 items long", () => {
    expect(checkArray().length).toBeGreaterThanOrEqual(6)
})

test("should convert number to string", () => {
    expect(numberToStr(5)).toEqual("5")
})



