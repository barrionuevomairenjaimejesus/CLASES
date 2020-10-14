class Cuadrado{
    private lado:number

    constructor(lado:number){
        this.lado = lado
    }

    getlado(){
        return this.lado
    }

    getArea(){
        return this.lado*this.lado
    }

    getPerimetro(){
        return this.lado*4
    }

}

export{Cuadrado}