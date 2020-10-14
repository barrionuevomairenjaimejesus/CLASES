class Circulo{
    private radio:number

    constructor (radio:number){
        this.radio = radio
    }

    getradio(){
        return this.radio
    }

    getArea(){
        return Math.PI*(this.radio*this.radio)
    }

    getPerimetro(){
        return 2*Math.PI*this.radio
    }
}

export{Circulo}