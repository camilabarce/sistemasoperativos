const dowithPromises = (numero1, numero2) => {                                                     
    const resultado = numero1 + numero2
    return new Promise(resolve => {
        setTimeout(() => 
        {resolve(resultado)}, 500)
    })
}

dowithPromises(2, 3)
    .then(resultado => console.log(resultado))