const sumar = (a, b)=> {
    return a + b
}

const filtrarArreglo = (arr, item)=> {
    return arr.filter((element)=> element !== item)
}

export { sumar, filtrarArreglo }