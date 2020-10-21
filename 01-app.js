function crearIterador(carrito){
    let i = 0

    return{
        siguiente: () =>{
            const fin = (i >= carrito.length)
            const valor = !fin ? carrito[i++] : undefined

            return {
                fin, valor
            }
        }
    }
}

const productos = ["TV", "Mesa", "Lámpara", "Sillón"]
const recorrer = crearIterador(productos)
console.log(recorrer.siguiente())
console.log(recorrer.siguiente())
console.log(recorrer.siguiente())
console.log(recorrer.siguiente())


