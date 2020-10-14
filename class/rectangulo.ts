class Rectangulo{
    private base: number
    private altura: number

    constructor ( base:number, altura:number ){
        this.base = base
        this.altura = altura
    }

    getbase(){
        return this.base
    }

    getaltura(){
        return this.altura
    }

    getArea(){
        return this.base*this.altura
    }

    getPerimetro(){
        return this.base*2+this.altura
    }
}

export{Rectangulo}