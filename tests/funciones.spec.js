import { sumar, filtrarArreglo, crearSaludo } from '../src/funciones.js'

describe("Pruebas para la funcion sumar", ()=> {
    // toBe -> Boolean, Number, Strings
    it('La función sumar debe retornar 3 si sus argumentos son 1 y 2', ()=> {
        const resultado = sumar(1, 2)

        expect(resultado).toBe(3)
        
    })

    it('La función sumar debe retornar un error si sus argumentos no son numeros', ()=> {
        const resultado = sumar('1')

        expect(resultado).toBe('Los argumentos deben ser números')
    })
})

describe("Pruebas para la función filtrarArreglo", ()=> {
    // toEqual -> Arrays y Objetos
    it("Debe retornar un nuevo array sin el elemento especificado", ()=> {
        const arr = [1, 2, 3, 4, 5]
        const elemento = 4
        const filtrado = filtrarArreglo(arr, elemento)

        expect(filtrado).toEqual([1, 2, 3, 5])
    })

    // toContain -> Si un elemento contiene a otro
    // not -> Sirve para negar a expresión
    it("Debe retornar un nuevo array que no contenga el elemento especificado", ()=> {
        const arr = [1, 2, 3, 4, 5]
        const elemento = 4
        const filtrado = filtrarArreglo(arr, elemento)

        expect(filtrado).not.toContain(elemento)
    })

    // toHaveLength -> Length de un Array
    it("Si el array original tiene 5 elementos, debe retornar un nuevo array con 4 elementos", ()=> {
        const arr = [1, 2, 3, 4, 5]
        const elemento = 4
        const filtrado = filtrarArreglo(arr, elemento)

        expect(filtrado).toHaveLength(4)
    })
})

describe("Pruebas para la función crearSaludo", ()=> {
    // toMatch -> Match de una String con una expresión regular
    it("Toma una palabra como argumento y retorna un mensaje que la contiene", ()=> {
        const saludo = crearSaludo('mundo')

        expect(saludo).toMatch(/mundo/)
        expect(saludo).not.toMatch(/[0-9]/)
    })

    // toThrow -> Arroja un error
    it("Retorna un error si se ejecuta sin argumentos", ()=> {
        // Escuchamos la ejecución de la función
        expect( ()=> crearSaludo() ).toThrow()
    })
})