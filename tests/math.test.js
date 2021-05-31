const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')


test("Temperature in Celsius", () => {
    const temp = fahrenheitToCelsius(50)
    expect(temp).toBe(10)
})

test("Temperature in Fahrenheit", () => {
    const temp = celsiusToFahrenheit(50)
    expect(temp).toBe(122)
})