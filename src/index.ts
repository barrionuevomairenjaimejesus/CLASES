import { menu } from '../views/menus'
import { leerTeclado } from '../views/entradateclado'
import { Rombo } from '../class/rombo'
import { Cuadrado } from '../class/cuadrado'
import { Rectangulo } from '../class/rectangulo'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('HAS ELEGIDO LA OPCIÓN DE ROMBO')
                let diagonalmayor:number, diagonalmenor:number, lador:number 
                diagonalmayor =  parseInt( await leerTeclado('INTRODUZCA LA DIAGONAL MAYOR'))
                diagonalmenor =  parseInt( await leerTeclado('INTRODUZCA LA DIAGONAL MENOR'))
                lador =  parseInt( await leerTeclado('INTRODUZCA EL LADO'))
                let rom = new Rombo(diagonalmayor, diagonalmenor, lador)
                console.log("POR LO TANTO EL PERIMETRO ES = "+ rom.getPerimetro)
                console.log("POR LO TANTO EL ÁREA ES = "+ rom.getArea)
                break
            case 2:
                console.log('HAS ELEGIDO LA OPCIÓN DE CUADRADO')
                let lado:number
                lado = parseInt(await leerTeclado('INTRODUZCA EL LADO DEL CUADRADO'))
                let cu = new Cuadrado(lado)
                console.log("POR LO TANTO EL PERIMETRO ES = "+ cu.getPerimetro)
                console.log("POR LO TANTO EL ÁREA ES = "+ cu.getArea)
                break
            case 3:
                console.log('HAS ELEGIDO LA OPCIÓN DE RECTÁNGULO')
                let base:number, altura:number
                base = parseInt(await leerTeclado('INTRODUZCA LA BASE DEL RECTÁNGULO'))
                altura = parseInt(await leerTeclado('INTRODUZCA LA ALTURA DEL RECTÁNGULO'))
                let rec = new Rectangulo(base,altura)
                console.log("POR LO TANTO EL PERIMETRO ES  = "+ rec.getArea())
                console.log("POR LO TANTO EL ÁREA ES = "+ rec.getPerimetro())
                break
            case 0:
                console.log('\nPROCEDEMOS A CERRAR EL PROGRAMA...')
                break
            default:
                console.log("¿QUÉ HAS INTRODUCIDO?")
                break
        }
    }while (n != 0)
}