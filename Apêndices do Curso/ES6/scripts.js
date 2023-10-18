// 1- var, let e const:
var x = 10
var y = 10

if (y > 30) {
    var x = 5
    console.log(x)
}
console.log(x)


let a = 10
let b = 10

if (b > 30) {
    let a = 5
    console.log(a)
}
console.log(a)

const name = 'Pedro'
console.log(name)


// 2 - arrow function:
const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => {
    return a + b
}

const arrowSum2 = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))
console.log(arrowSum2(5, 5))


const greeting = (name) => {
    if (name) {
        return `Olá ${name}!` 
    } else {
        return 'Olá!'
    }
} 
console.log(greeting('Flávia'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')
testeArrow()


const user = {
    name: 'Theo',
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username:' + this.name)
        }, 700)
    }
}

user.sayUserNameArrow()

