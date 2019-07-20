// //log to console
// console.log('hello')
// console.log(123)
// console.log(true)
// // let greeting = 'Hello'
// console.log(greeting)
// console.log([1, 2, 3])
// console.log({ a: 1, b: 2 })
// console.table({ a: 1, b: 2 })
// console.error('This is an error')
// console.clear() //check, it didn't clear
// console.warn('This is a warning')

// console.time('Hello') //consoles time that it took from the beginning to the end to run your script
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.log('hello')
// console.timeEnd('Hello')

// // var, let, const

// var name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// // Init var
// //Sets to undefined.  Initializing a variable but doesn't assign it to anything

// var greeting;
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

// variables can contain letters, numbers, _, $
// variables cannot start with a number

// // LET
// let name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// CONST

// const name = 'John'
// console.log(name)
// // Cannot reassign
// name = 'Sara'
//Have to assign a value.  Cannot init.
//Ex:  const greeting;

// const person = {
//     name: 'John',
//     age: 40
// }

// person.name = 'Sara'

// // We changed the data inside the const object and array, but cannot change the const itself

// console.log(person)

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)

// console.log(numbers)

// DATA TYPES
// Primitive Data Types: Stored directly in the location the variable accesses.  Stored on the stack.
// Reference Data Types:  Access by reference.  Objects that are stored on the heap.  A pointer to a location in memory.

// Primitive Data Types:  String, Number, Boolean, Null - an intentional empty value, Undefined - a variable that has not been assigned a value, Symbols (ES6)

// Reference Data Types / Objects:  Arrays, Object Literals, Functions, Dates, Anything else.  Not primitive.  Not accessed the actual value, they're accessed by reference.

// JS is a dynamically Typed Language.  Types are associated with values not variables.  The same variable can hold multiple types:  string, number, etc.  We do not need to specify types.  Most other languages are statically typed (Java, C#, C++).  There are supersets of JS and addons to allow static typing (TypeScript, Flow)

// PRIMITIVE DATA TYPES

// //String
// const name = 'John Doe'
// console.log(typeof name)

// //Number
// const age = 45
// console.log(typeof age)

// //Boolean
// const hasKids = true
// console.log(typeof hasKids)

// //Null (JS 'bug)
// const car = null
// console.log(typeof car)

// //Undefined
// let type
// console.log(typeof type)

// //Symbol
// const sym = Symbol()
// console.log(typeof sym)

// REFERENCE TYPES - Object

// // Array
// const hobbies = ['movies', 'music']
// console.log(typeof hobbies)

// //Object Literal
// const address = {
//     city: 'Dayton',
//     state: 'MA'
// }
// console.log(typeof address)

// const today = new Date()

// console.log(today)
// console.log(typeof today)

// Type Conversion - Taking a variable and changing the data type.  Example, putting data in a form and changing the data type.

// let val;

// // Number to string
// val = 5
// val = String(5)
// val = String(4 + 4)

// // Bool to string
// val = String(true)

// // Date to string
// val = String(new Date)

// // Array to string
// val = String([1, 2, 3, 4])

// // toString Method
// val = (5).toString()

// // String to number
// val = Number('5')
// val = Number(true) //gives 1
// val = Number(false) //gives 0
// val = Number(null) //gives 0
// val = Number('hello') // NaN - is an actual value

// val = parseInt('100') // whole numbers
// val = parseFloat('100.30') //gives decimals

// // Output
// console.log(val)
// console.log(typeof val)
// console.log(val.length) // Undefined because we can't get length from a number
// console.log(val.toFixed(2)) //Allows us to specifies decimals.  (2) adds 2 decimals

// Type Coercion 

// const val1 = String(5)
// const val2 = 6
// const sum = Number(val1 + val2)

// console.log(sum)
// console.log(typeof sum)

// const num1 = 100
// const num2 = 50
// let val

// // Simple math with numbers
// val = num1 + num2
// val = numb1 * num2
// val = numb1 - num2
// val = numb1 / num2
// val = numb1 % num2

// Math Object (has properties and methods)

// val = Math.PI
// val = Math.E
// val = Math.round(2.8)
// val = Math.ceil(2.2)
// val = Math.floor(2.8)
// val = Math.sqrt(64)
// val = Math.abs(-3)
// val = Math.pow(8, 2) //8 to the 2nd power
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2)
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2)
// val = Math.random() //gives a decimal number
// val = Math.random() * 20 //makes it larger than one up to but not including 20 add +1 to include 20, but still a decimal
// val = Math.floor(Math.random() * 20 + 1) //Always gives a whole number by adding Math.floor, but rounds down.  Round up --> Math.ceil

// console.log(val)

//STRINGS AND CONCATENATION

// const firstName = 'Robert'
// const lastName = 'Johnson'
// const age = 42
// const str = 'Hello there my name is Brandi'
// const tags = 'web design,web development,html,javascript,less,react'

// let val;

// val = firstName + lastName

// //Concatenation

// val = firstName + ' ' + lastName

// //Appending (addon to a variable, not replace it)

// val = 'Brandi '
// val += 'Taylor' //+= to append

// val = 'Hello, my name is ' + firstName + ' and I am ' + age

// // Escaping
// val = 'That\'s awesome, I can\'t wait'

// // Length
// val = firstName.length

// // concat - method that concatenates

// val = firstName.concat(' ', lastName)

// // Change case
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// val = firstName[0] // 0 index of this value

// val = firstName.indexOf(['b'])
// val = firstName.lastIndexOf(['e'])

// //charAt()

// val = firstName.charAt(2)

// // last character of a string

// val = firstName.charAt(firstName.length - 1)

// //Get Substring out of a string
// val = firstName.substring(0, 4)
// val = firstName.slice(0, 4) // slice mostly used with arrays
// val = firstName.slice(-3) //from the end

// //split()
// val = str.split(' ') //split at the space, turns string into an array

// // split() use case.  Blog with comma separated tags.  Turn tags into an array
// val = tags.split(',')

// //replace()
// val = str.replace('Brandi', 'Jack') // Replaces Brandi with Jack

// //includes()
// val = str.includes('Hello')
// val = str.includes('foo')

// console.log(val)

// // TEMPLATE LITERALS (TEMPLATE STRINGS)

// const name = 'Brandi'
// const age = 40
// const job = 'Section Lead at Lambda School'
// const city = 'Albuquerque'
// let html

// // Without Template Literals ES5

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

// html = '<ul>' +
//     '<li>Name: ' + name + '</li>' +
//     '<li>Age: ' + age + '</li>' +
//     '<li>Job: ' + job + '</li>' +
//     '<li>City: ' + city + '</li>' +
//     '</ul>'

// // With Template Literals ES6

// function hello() {
//     return 'Hello'
// }

// html = `
//     <ul>
//         <li> ${name} </li>
//         <li> ${age} </li>
//         <li> ${job} </li>
//         <li> ${city} </li>
//         <li> ${2 + 2} </li>
//         <li> ${hello()} </li>
//         <li> ${ age > 30 ? 'Over 30' : 'Under 30'} </li>
//     </ul>
// `

// document.body.innerHTML = html

// // ARRAYS AND ARRAY METHODS

// // Create some arrays

// const numbers = [43, 56, 33, 23, 44, 36, 5]
// const numbers2 = new Array(22, 45, 33, 76, 54)
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
// const mixedDataTypes = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()]

// let val;

// //Get Array Length
// val = numbers.length

// //Check if is array
// val = Array.isArray(numbers)

// //Get a single value from an array
// val = numbers[3]

// //Insert into an array
// numbers[2] = 100 //100 overwrote 33

// //Find index of
// val = numbers.indexOf(36)

// //MUTATING ARRAYS

// //  Add onto the end with push
// numbers.push(250)

// //Add onto the front with unshift
// numbers.unshift(120)

// //Take off from end
// numbers.pop() // Removes 250 because we added it with push

// //Take off from beginning
// numbers.shift() //Removes 120 because we added it with unshift

// //Splice values
// numbers.splice(1, 1) //where we want to start and where we want to end
// numbers.splice(1, 3)

// // Reverse
// numbers.reverse()

// // Concatenate arrays
// val = numbers.concat(numbers2)

// // Sort arrays
// val = fruit.sort() //Alphabetical order
// val = numbers.sort() //sorts by first digit of number

// //Use the 'compare function'
// val = numbers.sort(function (x, y) {
//     return x - y
// })

// // Reverse sort
// val = numbers.sort(function (x, y) {
//     return y - x
// })

// Find - takes in a testing function, returns first number that's under 50

// function under50(num) {
//     return num < 50
// }

// val = numbers.find(under50)

// console.log(numbers)
// console.log(val)

// // OBJECT LITERALS

// const person = {
//     firstName: 'Brandi',
//     lastName: 'Taylor',
//     age: 40,
//     email: 'yo@whatsup.com',
//     hobbies: ['gaming', 'coding', 'disneyland', 'working'],
//     address: {
//         city: 'Albuquerque',
//         state: 'New Mexico'
//     },
//     getBirthYear: function () {
//         return 2019 - this.age
//     }
// }

// let val;
// val = person;

// // Get specific value
// val = person.firstName
// val = person['firstName']
// val = person.age
// val = person.hobbies[1]
// val = person.address.state
// val = person.address['city']
// val = person.getBirthYear()

// console.log(val)

// const people = [
//     { name: 'Robert', age: 42 },
//     { name: 'Mike', age: 24 },
//     { name: 'Nita', age: 26 },
//     { name: 'Porky', age: 19 },
//     { name: 'Buddha', age: 3000 },
//     { name: 'Hope', age: 24 },
// ]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name)
// }

// // DATES AND TIMES = Date Object

// let val;

// const today = new Date()
// let birthday = new Date('9-10-1981 11:25:00')
// birthday = new Date('September 10 1981')
// birthday = new Date('9/10/1981') //Check MDN for more info on Date Object

// val = today.getMonth()
// val = today.getDate()
// val = today.getDay() // gets numeric value of the day, mon, tues, etc
// val = today.getFullYear()
// val = today.getHours()
// val = today.getMinutes()
// val = today.getSeconds()
// val = today.getMilliseconds()
// val = today.getTime() // Timestamp, amount of seconds that's passed since Jan 1, 1970

// birthday.setMonth(2)
// birthday.setDate(12)
// birthday.setFullYear(1985)
// birthday.setHours(3)
// birthday.setMinutes(30)
// birthday.setSeconds(25)

// console.log(birthday)

// IF STATEMENTS AND CONDITIONALS

// if (something) {
//     do something
// } else {
//     do something else
// }

const id = 100

// // Equal to
// if (id === 101) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // Not equal to

// if (id != 101) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// //test to see if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`)
// } else {
//     console.log('No ID')
// }

// // Greater or Less than
// if (id > 200) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// if else

// const color = 'yellow'

// if (color === 'red') {
//     console.log('Color is red')
// } else if (color === 'blue') {
//     console.log('Color is blue')
// } else {
//     console.log('Color is not red or blue')
// }

// // Logical Operators

// //Test more than one thing && ||

// const name = 'Steve'
// const age = 4

// if (age > 0 && age < 12) {
//     console.log(`${name} is a child.`)
// } else if (age >= 13 && age <= 19) {
//     console.log(`${name} is a teenager.`)
// } else {
//     console.log(`${name} is an adult.`)
// }

// // TERNARY OPERATOR ?

// console.log(id === 100 ? true : false)

// // In Conditionals, curlies are optional, although not recommened

// if (id === 100)
//     console.log(true)
// else
//     console.log(false)

// // SWITCH STATEMENTS

// const color = 'red'

// switch (color) {
//     case 'red':
//         console.log('Color is red')
//         break
//     case 'blue':
//         console.log('Color is blue')
//         break
//     default:
//         console.log('Color is not red or blue')
// }

// let day;

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday'
//         break
//     case 1:
//         day = 'Monday'
//         break
//     case 2:
//         day = 'Tuesday'
//         break
//     case 3:
//         day = 'Wednesday'
//         break
//     case 4:
//         day = 'Thursday'
//         break
//     case 5:
//         day = 'Friday'
//         break
//     case 6:
//         day = 'Saturday'
//         break
// }

// console.log(day)

// FUNCTIONS DECLARATIONS AND EXPRESSIONS

// function greet(firstName, lastName) {
//     // console.log('Hello')
//     return 'Hello ' + firstName + ' ' + lastName
// }

// console.log(greet('Brandi', 'Taylor'))

// function greet(firstName = 'Brandi', lastName = 'Taylor') { //Can set default values as arguments ES6
//     // console.log('Hello')
//     return 'Hello ' + firstName + ' ' + lastName
// }

// console.log(greet())

// const square = function (x) {
//     return x * x
// }

// console.log(square(8))

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFES
// a function you declare and run at the same time

// (function () {
//     console.log('IFFE Ran')
// })()

// // Can also take in params

// (function (name) {
//     console.log('Hello ' + name)
// })('Brad')

// Functions in Objects -- PROPERTY METHODS

// const todo = {
//     add: function () {
//         console.log('Add todo...')
//     },
//     edit: function (id) {
//         console.log(`Edit todo ${id}`)
//     }
// }

// todo.delete = function () {
//     console.log('Delete todo...')
// }

// todo.add()
// todo.edit(22)
// todo.delete()

// LOOPS AND ITERATION
// For, While, For While, Do While, forEach(), map(), forIn()

// for (let i = 0; i <= 10; i++) {
//     // console.log(i)
//     if (i === 2) {
//         console.log('2 is my favorite number')
//         continue //continues to the next iteration
//     }

//     if (i === 5) {
//         console.log('Stop the loop')
//         break //stops the loop
//     }
//     console.log('Number ' + i)
// }

// // While Loop runs only if the condition is met

// let i = 0

// while (i < 10) {
//     console.log('Number ' + i)
//     i++
// }

// // DO WHILE - will always run once no matter what

// let i = 0

// do {
//     console.log('Number ' + i)
//     i++
// }

// while (i < 10)

// // Loop through array
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// For each array loop -- looks cleaner that an iterating array loop

// cars.forEach(function (car, index, array) { //convention to use singluar of array
//     console.log(`${index} : ${car}`)
//     // console.log(array)
// })

// // Map - creates a different array
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Sara' },
//     { id: 3, name: 'Karen' },
//     { id: 4, name: 'Steve' },
// ]

// const ids = users.map(function (user) {
//     return user.id
// })

// console.log(ids)

// //For In Loop - used for objects

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`) //loops through object and gets the key value pairs
// }

// THE WINDOW OBJECT
// The global environment

// Window methods/objects/properties

// console.log(123)

// Alert
// alert('Hello World')

// Prompt - similar to alert but takes an input

// const input = prompt()
// alert(input)

// // Confirm

// if (confirm('Are You Sure')) {
//     console.log('Yes!')
// } else {
//     console.log('NO WAY!!!')
// }

// // Properties of Window

// let val;

// //Outer Height/Width

// val = window.outerHeight
// val = window.outerWidth

// // Inner Height/Width
// val = window.innerHeight
// val = window.innerWidth

// //Scroll Points - good for animations as you scroll down to a certain point in the page
// val = window.scrollY
// val = window.scrollX

// // Location Object

// val = window.location
// val = window.location.hostname
// val = window.location.port
// val = window.location.href.search

// Redirect
// window.location.href = 'http://google.com'

// Reload the page
// window.location.reload()

// History Object

// window.history.go(-2)
// val = window.history.length

// //Navigator Object - Actual Browser: Chrome, Firefox, etc.  Named after old Navigator by NetScape

// val = window.navigator
// val = window.navigator.appName
// val = window.navigator.appVersion
// val = window.navigator.userAgent
// val = window.navigator.platform
// val = window.navigator.vendor
// val = window.navigator.language

// console.log(val)

// // BLOCK SCOPE WITH LET AND CONST

// // Global Scope

// var a = 1
// let b = 2
// const c = 3


// // function test() {
// //     var a = 4
// //     let b = 5
// //     const c = 6
// //     console.log('Function Scope ', a, b, c)
// // }

// // test()

// // if (true) {
// //     //Block Scope
// //     var a = 4
// //     let b = 5
// //     const c = 6
// //     console.log('Block Scope: ', a, b, c)
// // }

// for (let a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`)
// }

// console.log('Global Scope: ', a, b, c)