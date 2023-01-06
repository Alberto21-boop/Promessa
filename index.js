
console.log('Pedir Uber')

const promessa = new Promise((resolve, reject) => {
    return resolve('O motorista João Aceitou sua Corrida')
})

console.log('aguardanndo')

promessa.then(result => console.log(result))

//sempre vai dar que o resultado é ok, porem nem lingo, quero so complicar mesmo e nem faz xsentido isso

if(promessa == result){
    return console.log('Seu carro chegou')
}



