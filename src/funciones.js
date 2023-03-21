const sumar = (num1, num2)=> {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Los argumentos deben ser números'
    }

    return num1 + num2
}

const filtrarArreglo = (arr, element)=> arr.filter((elem)=> elem != element)

const crearSaludo = (msg)=> {
    if(!msg) throw new Error('Argumento requerido')

    return `Hola ${msg}`
}

export { sumar, filtrarArreglo, crearSaludo }