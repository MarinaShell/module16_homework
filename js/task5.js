/*****************************************************************************/
/*родительский класс с методами, 
которые включают/выключают прибор из розетки*/
class Electropribor{
    constructor(name, price, power){
        this.name = name;
        this.price = price;
        this.power = power;
    }

    /*метод, который выключает прибор из розетки*/
    turnOff(){
        console.log(`${this.name} is turnOff`);
    }
    /*метод, который включает прибор из розетки*/
    turnOn(){
        console.log(`${this.name} is turnOn`);    
    }
    /*метод, который сообщает об объекте его цену*/
    getPrice(){
        console.log(`The price of ${this.name} is ${this.price}`);    
    }
    /*метод, который сообщает об объекте его мощность*/
    getPower(){
        console.log(`The power of ${this.name} is ${this.power}`);    
    }
    
}

/*класс электрический чайник*/
class ElectricKettle extends Electropribor{
    constructor(size, name, price, power){
        super(name, price, power);  
        this.size = size;    
    }
    /*метод возврата размера для электрического чайника*/
    getSize(){
        console.log(`The size of ${this.name} is ${this.size}`);
    }
}

/*класс микроволновка*/
class Microwave extends Electropribor{
    constructor(type, name, price, power){
        super(name, price, power)
        this.type = type;
    }
    /*метод возврата типа для микроволновки*/
    getType(){
        console.log(`The type of ${this.name} is ${this.type}`);
    }
}


/*****************************************************************************/

/*for testing*/

const kettleTefal = new ElectricKettle(12, "Tefal", 2130, 2000);
kettleTefal.getSize();
kettleTefal.turnOn();
kettleTefal.turnOff();
kettleTefal.getPrice();
kettleTefal.getPower();

const microW = new Microwave("Grill", "Garenia", 10000, 2200);
microW.getType();
microW.turnOn();
microW.turnOff();

const electro = new Electropribor("Cleaner", 1000, 2400);
electro.turnOn();
electro.turnOff();