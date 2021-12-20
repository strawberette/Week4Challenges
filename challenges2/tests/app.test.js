const { 
    notNull, 
    isTruthy, 
    isNotFalsy, 
    checkObj, 
    checkArray,
    numberToStr,
    planet,
    registerCount,
    square,
    century,
    integer 
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

test("should be at least 6 items long", () => {
    expect(checkArray().length).toBeGreaterThanOrEqual(6)
})

test("should convert number to string", () => {
    expect(numberToStr(5)).toEqual("5")
})

test("should display the correct planet", () => {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune" ]
    for (i = 0; i<= planets.length; i++) {
        expect(planet(i)).toEqual(planets[i])
    }
})

test("should count the number of present students", () => {
    expect(registerCount([true, false, true, true, true, false, true])).toEqual(5)
})

test("Should square each digit of a number and then concatenate it", () => {
    expect(square(34)).toEqual(916)
})

test("Should return Century from year",() => {
    expect(century(1705)).toEqual(18)
})

test("Should convert a binary array into an integer", () => {
    expect(integer([0, 1, 0, 1])).toEqual(5)
})