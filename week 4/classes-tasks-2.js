console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return this.name + ' ' + 'is age' + ' ' + this.age;

    }

    getHeight() {
      return this.name + ' ' + 'is' + ' ' + this.height + 'cm';
    }

    getWeight() {
      return this.name + ' ' + 'weighs' + ' ' + this.weight + 'kg';
    }
  }
  const player1 = new Player('Patrick Mahomes', 24, 188, 104)
  const player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
  const player3 = new Player('Julio Jones', 31, 191, 100)

  console.log(player1.getAge());
  console.log(player1.getHeight());
  console.log(player1.getWeight());

  console.log(player2.getAge());
  console.log(player2.getHeight());
  console.log(player2.getWeight());

  console.log(player3.getAge());
  console.log(player3.getHeight());
  console.log(player3.getWeight());


}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {

    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }

    divide(a, b) {
      return a / b;
    }
  }

  const calculator = new Calculator();

  console.log('Atsakymas:', calculator.add(5, 5), "Sprendimas:", "5 + 5 = 10");
  console.log('Atsakymas:', calculator.subtract(30, 5), "Sprendimas:", "30 - 5 = 25");
  console.log('Atsakymas:', calculator.multiply(5, 5), "Sprendimas:", "5 * 5 = 25");
  console.log('Atsakymas:', calculator.divide(10, 5), "Sprendimas:", "10 / 5 = 2");
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullName = `${firstname}, ${lastname}`; //!issiaiskinti
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }

  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");
  const emp4 = new Employee("Joshua", "Senoron");

  console.log(emp1.firstname, "John");
  console.log(emp1.lastname, "Smith");
  console.log(emp1.fullname, "John Smith");
  console.log(emp1.email, "john.smith@company.com");
  console.log(emp2.firstname, "Mary");
  console.log(emp2.lastname, "Sue");
  console.log(emp2.fullname, "Mary Sue");
  console.log(emp2.email, "mary.sue@company.com");
  console.log(emp3.firstname, "Antony");
  console.log(emp3.lastname, "Walker");
  console.log(emp3.fullname, "Antony Walker");
  console.log(emp3.email, "antony.walker@company.com");
  console.log(emp4.firstname, "Joshua");
  console.log(emp4.lastname, "Senoron");
  console.log(emp4.fullname, "Joshua Senoron");
  console.log(emp4.email, "joshua.senoron@company.com");


}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is the same age as me.`
      }
    }
  }

  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log(p1.compareAge(p2));
  console.log(p1.compareAge(p3));

  console.log(p2.compareAge(p1));
  console.log(p2.compareAge(p3));

  console.log(p3.compareAge(p1));
  console.log(p3.compareAge(p2));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  function round(number) {
    var factor = Math.pow(10, 5);
    return Math.round(number * factor) / factor;
  }

  let circo = new Circle(20);
  console.log(round(circo.getArea()));
  console.log(round(circo.getPerimeter()));
  let circo1 = new Circle(2);
  console.log(round(circo1.getArea()));
  console.log(round(circo1.getPerimeter()));
  let circo2 = new Circle(4.4);
  console.log(round(circo2.getArea()));
  console.log(round(circo2.getPerimeter()));
  let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
  let circo3 = new Circle(randomInt);
  console.log(round(circo3.getArea()), round(Math.PI * Math.pow(randomInt, 2)));
  console.log(round(circo3.getPerimeter()), round(2 * Math.PI * randomInt));
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(f, l) {
      this.fname = this.correct(f);
      this.lname = this.correct(l);
    }
    correct(s) {
      return s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase();
    }
    get fullname() {
      return `${this.fname} ${this.lname}`
    }
    get initials() {
      return `${this.fname[0]}.${this.lname[0]}`
    }
  }

  const a1 = new Name("john", "SMITH");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);

  const a2 = new Name("sARah", "fRolliE");
  console.log(a2.fname);
  console.log(a2.lname);
  console.log(a2.fullname);
  console.log(a2.initials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIcecream(arr) {
    const flavors = 
        {'Plain': 0,
         'Vanilla': 5,
         'ChocolateChip': 5,
         'Strawberry': 10,
         'Chocolate': 10
        };
  const sweetestIcecream = arr => 
  Math.max(...arr.map(a => flavors[a.flavor] + a.numSprinkles))
  }

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();
