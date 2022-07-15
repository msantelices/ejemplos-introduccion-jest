import { sumar, filtrarArreglo } from '../src/funciones.js'

describe('Pruebas para el archivo funciones.js', ()=> {
    test('La función sumar debe retornar la suma de sus argumentos', ()=> {
        const resultado = sumar(1, 2)
        expect(resultado).toBe(3)
    })

    test('La función filtrarArreglo debe retornar un arreglo sin el elemento especificado', ()=> {
        const arr = [1, 2, 3, 4, 5]
        const item = 4
        const filtrado = filtrarArreglo(arr, item)

        expect(filtrado).not.toContain(item)
    })
})



