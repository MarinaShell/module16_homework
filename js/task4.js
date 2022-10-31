/*****************************************************************************/
/*родительская функция с методами, 
которые включают/выключают прибор из розетки*/
function Electropribor(name, price, power){
    this.name = name;
    this.price = price;
    this.power = power;
}

/*****************************************************************************/
/*метод, который выключает прибор из розетки*/
Electropribor.prototype.turnOff = function(){
    console.log(`${this.name} is turnOff`);
}

/*****************************************************************************/
/*метод, который включает прибор из розетки*/
Electropribor.prototype.turnOn = function(){
    console.log(`${this.name} is turnOn`);    
}

/*****************************************************************************/
/*метод, который сообщает об объекте его цену*/
Electropribor.prototype.getPrice = function(){
    console.log(`The price of ${this.name} is ${this.price}`);    
}

/*****************************************************************************/
/*метод, который сообщает об объекте его мощность*/
Electropribor.prototype.getPower = function(){
    console.log(`The power of ${this.name} is ${this.power}`);    
}

/*****************************************************************************/
/*электрический чайник*/
function ElectricKettle(size, name, price, power){
    Electropribor.call(this, name, price, power);
    this.size = size;    
}

/*делаем прототип ElectricKettle от Electropribor*/
ElectricKettle.prototype = Object.create(Electropribor.prototype);
ElectricKettle.prototype.constructor = ElectricKettle;

/*****************************************************************************/
/*метод возврата размера для электрического чайника*/
ElectricKettle.prototype.getSize = function(){
    console.log(`The size of ${this.name} is ${this.size}`);
}

/*****************************************************************************/
/*микроволновка*/
function Microwave(type, name, price, power){
    Electropribor.call(this, name, price, power);
    this.type = type;
}

/*делаем прототип Microwave от Electropribor*/
Microwave.prototype = Object.create(Electropribor.prototype);
Microwave.prototype.constructor = Microwave;

/*****************************************************************************/
/*метод возврата типа для микроволновки*/
Microwave.prototype.getType = function(){
    console.log(`The type of ${this.name} is ${this.type}`);
}

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