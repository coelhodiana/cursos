function sayHello () {
    console.log('Hello there!')
}

sayHello()

//Função com argumento
function sayHi (name) {
    console.log(`Hello there ${name}!`)
}
sayHi("Diana")
sayHi('Isadora')

//Calcular a área
function area (length, width){
    console.log(length*width)
}
area (9,2) //18

function greet (p1, p2, p3){
    console.log('hi ' + p1)
    console.log('hi ' + p2)
    console.log('hi ' + p3)
}
greet('Harry', 'Ron', 'Hermione')