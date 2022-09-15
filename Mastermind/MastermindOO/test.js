//Funcion factoria
function createObjectCar(model,color){
    let that = {
        model: model,
        color: color,
        privateMethodChangeMyColor: function(color){
            this.color=color;
        }
    }
    return{
        getModel: function(){
            return that.model;
        },
        getColor: function(){
            return that.color;
        },
        createResume: function(){
            return [that.model,that.color];
        }
    }
}

const myCar = createObjectCar('Volkswagen Vento','White');

console.log(myCar);
console.log(myCar.createResume());
console.log(myCar.getModel());
console.log(myCar.getColor());
//Definicion de objeto previo a Ecmascript 6.  
const Car = {
    model:"",
    color:"",
    year:"",
    speed:"",
    price:"",
    mileaje:"",

    newCar: function(model,color,year,speed,price,mileaje){
        this.model = model;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.price = price;
        this.mileaje  = mileaje;
        return this;
    },
    getMileaje: function(){
        return this.mileaje;
    },
    method (){
        console.log("soy un metodo del objeto")
    }
}

//Definicion de clases luego de Ecmascript 6
//modelado de herencia
class vehiculo{
    marca;
    constructor(marca){
        this.marca = marca; 
    }
}

class Auto extends vehiculo{
    modelo;
    color;
    año;
    velocidad;
    precio;
    kilometraje;

    constructor(marca,modelo,color,año,velocidad,precio,kilometraje){
        super(marca);
        this.modelo=modelo;
        this.color=color;
        this.año=año;
        this.velocidad=velocidad;
        this.precio=precio;
        this.kilometraje=kilometraje;
    }

}
//const volkswagenVento = new Car.Car('Volkswagen Vento','White','2019','240','20000')

const fiatDuna = new Auto("Fiat","Duna","Rojo","1999","120","4_000","240_000")

    

