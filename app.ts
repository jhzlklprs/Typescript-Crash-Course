//Interface

interface modelType {
    type : string,
    color : string,
    event : () => void;
}


// Classes
class Vehicle {
    modelType : modelType;

    constructor(model : modelType){
        this.modelType = model;
    }
}

let model_type = {
    type: 'Car',
    color: 'Blue',
    event: () => {
        console.log('Event Function');
    }
}

const car = new Vehicle(model_type);

console.log(car);


// pause at 1:52:00