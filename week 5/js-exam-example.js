const carsData = [{
    brand: 'Tesla',
    model: 'Model S',
    year: 2012,
    color: 'red',
    fuelTypes: ['electric'],
    price: 45000,
}, {
    brand: 'Audi',
    model: 'A6',
    year: 2014,
    color: 'black',
    fuelTypes: ['dysel', 'electric'],
    price: 16000,
}, {
    brand: 'audi',
    model: 'A5',
    year: 2014,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
}, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['electric', 'petrol'],
    price: 16000,
}, {
    brand: 'Subaru',
    model: 'Impreza',
    year: 2019,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
}, {
    brand: 'Audi',
    model: 'A7',
    year: 2015,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 12000,
}, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['dysel'],
    price: 16000,
}, {
    brand: 'Toyota',
    model: 'Prius',
    year: 2008,
    color: 'grey',
    fuelTypes: ['gas', 'petrol', 'electric'],
    price: 5000,
}];

class Car {
    // pirma
    brand;
    model;
    year;
    color;
    fuelTypes;
    price;

    constructor({
        brand,
        model,
        year,
        color,
        fuelTypes,
        price,
    }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.price = price;
    }
    // trecio
    getFuelType() {
        return this.fuelTypes.join('/');
    }
}
// bendri kintamieji
let cars, electricCars, petrolCars;

const EUR2USD = 1.05;

console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių.');
{
    console.dir(Car);
    console.log(new Car({
        brand: 'Tesla',
        model: 'Model x',
        year: 2018,
        color: 'green',
        fuelTypes: ['Electric'],
        price: 49000,
    }));
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
{
    cars = carsData.map(carData => new Car(carData));
    console.log(cars);
}
console.groupEnd();

console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)');
{
    cars.forEach((car) => console.log(car.getFuelType()));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:');
{
    cars.forEach((car) => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));
}
console.groupEnd();

console.group('5. Atrinkite tik elektrinius automobilius');
{
    electricCars = cars.filter(car => car.fuelTypes.includes('electric'));
    console.table(electricCars);
}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
    petrolCars = cars.filter(car => car.fuelTypes.includes('petrol') && car.year > 2016);
    console.table(petrolCars);
}
console.groupEnd();

console.group('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai');
{
    const selectCars = cars.filter(car =>
        car.brand.toLowerCase() === 'audi' &&
        car.year > 2012 &&
        car.year < 2016 &&
        !car.fuelTypes.includes('dysel')
    );
    console.table(selectCars);
}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
    const carsSum = electricCars.reduce((sum, { price }) => sum + price, 0);
    const carsAvg = carsSum / electricCars.length;
    console.log({ carsAvg });
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
    const carSum = petrolCars.reduce((sum, { price }) => sum + price, 0);
    console.log({ carSum });
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');
{
const formatedCars = cars.map((car) =>({
    brand: car.brand,
    model: car.model,
    price: EUR2USD * car.price,
    fuelTypes: car.getFuelType()
}));
console.table(formatedCars);
}
console.groupEnd();