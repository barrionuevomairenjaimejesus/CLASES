class Triangulo{
    private base: number
    private lado1: number
    private lado2: number
    private altura: number

    public constructor(base:number, lado1:number, lado2:number, altura:number){
        this.base = base
        this.lado1 = lado1
        this.lado2 = lado2
        this.altura = altura
    }

    getbase(){
        return this.base
    }

    getlado2(){
        return this.lado1
    }

    getlado3(){
        return this.lado2
    }

    getaltura(){
        return this.altura
    }

    getPerimetro(){
        return this.base+this.lado1+this.lado2
    }

    getArea(){
        return (this.base*this.altura)/2
    }

}

export{Triangulo}