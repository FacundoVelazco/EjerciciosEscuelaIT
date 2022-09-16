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


//Patron module para manejar objetos.
function createCarModuled(modelo,colorcito){
    let self = this;
    let model, color;
    model = modelo;
    color = colorcito;

    self.getModel = () => model;
    self.getColor = () => color;
    self.createResume = () => [model,color]

    return self;
}
const myCar = createCarModuled('Volkswagen Vento','White');
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

//Definicion de clases luego de Ecmascript 6, orientado a clases.
//modelado de herencia.
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

//Patron module para manejar objetos.
function myObjectModuled(parametro1){
    let self = this;
    let entrada = parametro1;
    self.getInfo = () => entrada;


    return self;
}