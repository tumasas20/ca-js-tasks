/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
class Automobilis {
  brand;
  model;
  price;

  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}

const car1 = new Automobilis('Vw', 'Passat CC', 15000);
const car2 = new Automobilis('Audi', 'A6 avant', 13000);
const car3 = new Automobilis('MB', 'CLS', 12000);

console.log(car1, car2, car3);

console.group('Modeliai:');
{
  console.log(car1.model);
  console.log(car2.model);
  console.log(car3.model);
}
console.groupEnd();

console.group('Markės:');
{
  console.log(car1.brand);
  console.log(car2.brand);
  console.log(car3.brand);
}
console.groupEnd();

console.group('Kainos:');
{
  console.log(car1.price);
  console.log(car2.price);
  console.log(car3.price);
}
console.groupEnd();

console.group('Kainos padidintos 100:');
{
  car1.price = car1.price += 100;
  car2.price = car2.price += 100;
  car3.price = car3.price += 100;
  console.log(car1.brand, car1.model, car1.price);
  console.log(car2.brand, car2.model, car2.price);
  console.log(car3.brand, car3.model, car3.price);
  console.log(car1, car2, car3);
}
console.groupEnd();

