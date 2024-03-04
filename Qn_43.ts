function createCar(manufacturer: string, modelName: string, additionalFeatures: { [key: string]: any }): object {
    let carDetails: { [key: string]: any } = { manufacturer, modelName, ...additionalFeatures };
    return carDetails;
}
let car1 = createCar('Tesla', 'Model S', { color: 'grey', autopilot: true });
console.log(car1);

let car2 = createCar('Ford', 'Mustang', { color: 'black', convertible: true });
console.log(car2);

let car3 = createCar('RX', 'Charger', { color: 'mahroon', navigationSystem: true });
console.log(car3);
