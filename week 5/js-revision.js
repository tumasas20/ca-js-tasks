const people = [
    {
        name: "John",
        surname: "Doe",
        age: 35,
        height: 180,
        weight: 75,
        sex: "male"
    },
    {
        name: "Jane",
        surname: "Doe",
        age: 30,
        height: 170,
        weight: 60,
        sex: "female"
    },
    {
        name: "Alice",
        surname: "Smith",
        age: 25,
        height: 160,
        weight: 55,
        sex: "female"
    },
    {
        name: "Bob",
        surname: "Smith",
        age: 40,
        height: 190,
        weight: 85,
        sex: "male"
    },
    {
        name: "Eve",
        surname: "Jones",
        age: 28,
        height: 175,
        weight: 65,
        sex: "female"
    },
    {
        name: "Tom",
        surname: "Jones",
        age: 45,
        height: 185,
        weight: 80,
        sex: "male"
    },
    {
        name: "Chris",
        surname: "Williams",
        age: 32,
        height: 165,
        weight: 58,
        sex: "male"
    },
    {
        name: "Sara",
        surname: "Williams",
        age: 37,
        height: 172,
        weight: 68,
        sex: "female"
    }
];


console.log('------------------------------------ 1 Dalis ------------------------------------ ');

console.group('Panaudojant array.forEach: %c1. Atspausdinti kiekvieną elementą', 'color: red;')
{
    const everyPeople = people.forEach(person => console.log(person));
}
console.groupEnd();

console.group('Panaudojant array.forEach: %c2. Atspausdinti kiekvieno elemento pilną vardą', 'color: red;')
{
    const fullname = people.forEach(person => console.log(`${person.name} ${person.surname}`));
}
console.groupEnd();

console.group('Panaudojant array.forEach: %c3 Atspausdinti kiekvieno elemento kūno masės indeksą', 'color: red;')
{
    const kmis = people.forEach(person => console.log(person.weight / ((person.height / 100) * (person.height) / 100)));
}
console.groupEnd();

console.group('Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: %c1.Vardas ilgesnis nei 6 simboliai', 'color: red;')
{
    console.log(':');
    const longName = people.filter((person) => person.name.length > 6);
    console.table(longName);
}
console.groupEnd();

console.group('Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: %c2.Svoris didesnis nei 80kg', 'color: red;')
{
    const weigthUnder80 = people.filter(person => person.weight > 80);
    console.table(weigthUnder80);
}
console.groupEnd();

console.group('Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: %c3.Aukštesni nei 185cm', 'color: red;')
{
    const tallerThan185 = people.filter(person => person.height > 185);
    console.table(tallerThan185);
}
console.groupEnd();

console.group('Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: %c1.Ūgiai', 'color: red;')
{
    const heights = people.map(person => person.height);
    console.log(heights);
}
console.groupEnd();

console.group('Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: %c2.Svoriai', 'color: red;')
{
    const weights = people.map(person => person.weight);
    console.log(weights);
}
console.groupEnd();

console.group('Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: %c3.Ūgis, svoris ir amžius : [{height, weight, age}, ...]', 'color: red;')
{
    const dimensions = people.map(person => ({ height: person.height, weight: person.weight, age: person.age }));
    console.log(dimensions);
}
console.groupEnd();

console.group('Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: %c4.KMI indeksai', 'color: red;')
{
    const kmis = people.map(person => person.weight / ((person.height / 100) * (person.height / 100)));
    console.log(kmis);
}
console.groupEnd();

console.group('Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: %c5.KMI indeksai ir amžius', 'color: red;')
{
    const kmisAndAge = people.map(person => ({
        KMI: person.weight / ((person.height / 100) * (person.height / 100)),
        age: person.age,
    }));
    console.log(kmisAndAge);
}
console.groupEnd();

console.group('Panaudojant array.reduce suskaičiuoti ir po to atspausdinti: %c1.Svorių vidurkis', 'color: red;')
{
    const peopleWeightAvg = (people.reduce((sum, person) => sum + person.weight, 0)) / people.length;
    console.log(peopleWeightAvg);
}
console.groupEnd();

console.group('Panaudojant array.reduce suskaičiuoti ir po to atspausdinti: %c2.Ūgio vidurkis', 'color: red;')
{
    const peopleHeightAvg = (people.reduce((sum, person) => sum + person.height, 0)) / people.length;
    console.log(peopleHeightAvg);
}
console.groupEnd();

console.log('------------------------------------ 2 Dalis ------------------------------------ ');

class Person {
    constructor(name, surname, age, height, weight, sex) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    // Vidinis metodas kūno masės indeksui skaičiuoti
    getBMI() {
        return this.weight / (this.height / 100) ** 2;
    }

    // Vidinis metodas žmogaus duomenims atspausdinti
    toString() {
        return `${this.name} ${this.surname}, age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${this.sex}`;
    }
}

const peoples = [
    new Person("John", "Doe", 67, 172, 121, "male"),
    new Person("Jane", "Doe", 30, 170, 60, "female"),
    new Person("Alice", "Smith", 25, 160, 55, "female"),
    new Person("Bob", "Smith", 40, 190, 85, "male"),
    new Person("Eve", "Jones", 28, 175, 65, "female"),
    new Person("Tom", "Jones", 45, 185, 80, "male"),
    new Person("Chris", "Williams", 32, 180, 48, "male"),
    new Person("Sara", "Williams", 19, 172, 71, "female"),
    new Person("Dude", "Simons", 17, 172, 121, "female")
];


console.group('%c0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą: Person klasėje: *sukurti vidinį metodą: getBMI(); *sukurti vidinį metodą: toString(); ', 'color: blue;')
{

}
console.groupEnd();

console.group('%c1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ', 'color: blue;')
{
    const youngWomen = peoples.filter(person => person.sex === "female" && person.age < 20 && person.weight > 70);
    console.log(youngWomen);
}
console.groupEnd();

console.group('%c2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5', 'color: blue;')
{
    const olderMen = peoples.filter(person => person.sex === "male" && person.age > 25 && person.getBMI() < 18.5);
    console.log(olderMen);
}
console.groupEnd();

console.group('%c3. Atrinkti vaikus, su antsvoriu (KMI > 30)', 'color: blue;')
{
    const overweightChildren = peoples.filter(person => person.age < 18 && person.getBMI() > 30);
    console.log(overweightChildren);
}
console.groupEnd();

console.group('%c4. Atrinkti pensininkus, su antsvoriu (KMI > 30)', 'color: blue;')
{
    const overweightPensioners = people.filter(person => person.age >= 65 && person.getBMI() > 30);
    console.log(overweightPensioners);
}
console.groupEnd();


console.group('%c5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]', 'color: blue;')
{
    const peopleWithNormalWeight = peoples.filter(
        person => person.getBMI() >= 18.5 && person.getBMI() <= 25
    );
    console.log(peopleWithNormalWeight);

}
console.groupEnd();