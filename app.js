
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    //convertir el valor de dolar a euro
    let valueInEuro = valueInDollar / 1.07;
    //convertimos el valor a yen
    let valueInYen = valueInEuro * 156.5;
    //Retornamos el valor en yen
    return valueInYen;
}

const fromYenToPound = function(valueinYen) {
    //convertimos el valor de Yean a euro
    let valueInEuro = valueinYen / 156.5;
    let valueinPound = valueInEuro * 0.87;
    //Retornamos el valor a Pound
    return valueinPound
}



// esta es mi funcion que suma dos numeros
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros
console.log(sum(7,3))

//exporta la funcion para usarla en otros archivos
//(similar a la palabra clave "export" cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
