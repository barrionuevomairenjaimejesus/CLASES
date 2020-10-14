import { menu } from '../views/menus'
import { leerTeclado } from '../views/entradateclado'
import { Triangulo } from '../class/triangulo'
import { Cuadrado } from '../class/cuadrado'
import { Rectangulo } from '../class/rectangulo'
import { Circulo } from '../class/circulo'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Ha seleccionado Calcular el área y el perímetro del Rectangulo')
                let base:number, altura:number
                base = parseInt(await leerTeclado('Porfavor, introduzca la base del rectángulo'))
                altura = parseInt(await leerTeclado('Porfavor, introduzca la altura del rectángulo'))
                let r = new Rectangulo(base,altura)
                console.log("El perímetro del rectángulo es = "+ r.getArea())
                console.log("El área del rectángulo es = "+ r.getPerimetro())
                break
            case 2:
                console.log('Ha seleccionado Calcular el área y el perímetro del Cuadrado')
                let lado:number
                lado = parseInt(await leerTeclado('Porfavor, introduzca el lado del cuadrado'))
                let cu = new Cuadrado(lado)
                console.log("El perímetro del cuadrado es = "+ cu.getPerimetro)
                console.log("El área del cuadrado es = "+ cu.getArea)
                break
            case 3:
                console.log('Ha seleccionado Calcular el área y el perímetro del Triángulo')
                let baset:number, alturat:number, lado1:number, lado2:number
                baset =  parseInt( await leerTeclado('Porfavor, introduzca la base del triángulo'))
                alturat =  parseInt( await leerTeclado('Porfavor, introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Porfavor, introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Porfavor, introduzca el último lado del triángulo'))
                let t = new Triangulo(baset, alturat, lado1, lado2)
                console.log("El perímetro del triángulo es = "+ t.getPerimetro)
                console.log("El área del triángulo es = "+ t.getArea)
                break
            case 4:
                console.log('Ha seleccionado Calcular el área y el perímetro del Círculo')
                let radio:number
                radio = parseInt(await leerTeclado('Porfavor, introduzca el radio del círculo'))
                let c = new Circulo(radio)
                console.log("El perímetro del círculo es = "+ c.getPerimetro)
                console.log("El área del círculo es = "+ c.getArea)
                break
            case 0:
                console.log('\nGracias, Adiós')
                break
            default:
                console.log("Opción incorrecta, por favor use una opción válida")
                break
        }
    }while (n != 0)
}