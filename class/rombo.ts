class Rombo{
    private diagonalMayor: number
    private diagonalMenor: number
    private lado: number

    public constructor(diagonalMayor:number, diagonalMenor:number, lado:number){
        this.diagonalMayor = diagonalMayor
        this.diagonalMenor = diagonalMenor
        this.lado = lado
    }

    getdiagonalMayor(){
        return this.diagonalMayor
    }

    getdiagonalMenor(){
        return this.diagonalMenor
    }

    getlado(){
        return this.lado
    }


    getPerimetro(){
        return this.lado*4
    }

    getArea(){
        return (this.diagonalMayor*this.diagonalMenor)/this.lado
    }

}

export{Rombo}