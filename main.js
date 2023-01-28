//KELVIN PROJECT

// the variable kelvin is declared and assigned the value of 293. variable is constant
const kelvin= 293;

//declare variable celsius and assigned  value of kelvin minus 273 
let celsius = kelvin - 273

//declare variable fahrenheit and assign value of converting celsius to fahrenheit and rounding tot he nearest integer
let fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// 0 kelvin is -460 degrees Fahrenheit

let newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${celsius} degrees Celsius.`)

console.log(`The temperature is ${newton} degrees Newton.`)


