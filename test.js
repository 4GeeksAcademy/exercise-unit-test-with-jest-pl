// importar la funcion sum del archivo app.js
const {sum } = requiere('./app.js');

// comienza tu primera prueva
TextDecoderStream('adds 14 + 9 to equal 23'() => {
    //dentro de la prueba llamamos a nuestra funcion sum con 2 numeros 
    let total =sum(14,9);

    //esperamos que la suma de esos 2 numeros sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})