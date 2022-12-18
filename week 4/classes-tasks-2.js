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

  console.log('------');
  console.log(player1.getAge());
  console.log(player1.getHeight());
  console.log(player1.getWeight());
  console.log('------');
  console.log(player2.getAge());
  console.log(player2.getHeight());
  console.log(player2.getWeight());
  console.log('------');
  console.log(player3.getAge());
  console.log(player3.getHeight());
  console.log(player3.getWeight());
  console.log('------');
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
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = firstname + ' ' + lastname;
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }

  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");
  const emp4 = new Employee("Joshua", "Senoron");

  console.log('------');
  console.log(emp1.firstname);
  console.log(emp1.lastname);
  console.log(emp1.fullname);
  console.log(emp1.email);
  console.log('------');
  console.log(emp2.firstname);
  console.log(emp2.lastname);
  console.log(emp2.fullname);
  console.log(emp2.email);
  console.log('------');
  console.log(emp3.firstname);
  console.log(emp3.lastname);
  console.log(emp3.fullname);
  console.log(emp3.email);
  console.log('------');
  console.log(emp4.firstname);
  console.log(emp4.lastname);
  console.log(emp4.fullname);
  console.log(emp4.email);
  console.log('------');

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
  console.log('------');
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);
  console.log('------');
  const a2 = new Name("sARah", "fRolliE");
  console.log(a2.fname);
  console.log(a2.lname);
  console.log(a2.fullname);
  console.log(a2.initials);
  console.log('------');
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  const sweetestIcecream = a => Math.max(...a.map(x => (
    { n: 0, a: 5, p: 5, y: 10, e: 10 }[x.flavor.slice(-1)] + x.numSprinkles
  )));

  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }
  const ice1 = new IceCream("Chocolate", 13);
  const ice2 = new IceCream("Vanilla", 0);
  const ice3 = new IceCream("Strawberry", 7);
  const ice4 = new IceCream("Plain", 18);
  const ice5 = new IceCream("ChocolateChip", 3);

  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
  console.log(sweetestIcecream([ice1, ice3]));
  console.log(sweetestIcecream([ice3, ice5]));

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(num) {
      this.num = num;
    }
    get ones() {
      return this.num / 1;
    }
    get threes() {
      return Math.floor(this.num / 3);
    }
    get nines() {
      return Math.floor(this.num / 9);
    }
  }

  const probs = [
    {
      num: 5,
      which: 'nines',
    }, {
      num: 5,
      which: 'ones'
    }, {
      num: 5,
      which: 'threes'
    }];

  probs.forEach(prob => {
    let testInstance = new OnesThreesNines(prob.num);
    console.log(testInstance[prob.which])
  });
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }
  console.log(User.userCount);

  const u1 = new User('johnsmith10', 1);
  console.log(User.userCount);
  console.log(u1.username);

  const u2 = new User('marysue', 2);
  console.log(User.userCount);
  console.log(u2.username);

  const u3 = new User('mailan_rodrick', 3);
  console.log(User.userCount);
  console.log(u2.username);
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return `Title: ${this.title}`;
    }

    getAuthor() {
      return `Author: ${this.author}`;
    }
  }

  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');
  const HP = new Book('Harry Potter', 'J.K. Rowling');

  console.log('-----');
  console.log(PP.title);
  console.log(PP.author);
  console.log(PP.getTitle());
  console.log(PP.getAuthor());
  console.log('-----');
  console.log(H.title);
  console.log(H.author);
  console.log(H.getTitle());
  console.log(H.getAuthor());
  console.log('-----');
  console.log(WP.title);
  console.log(WP.author);
  console.log(WP.getTitle());
  console.log(WP.getAuthor());
  console.log('-----');
  console.log(HP.title);
  console.log(HP.author);
  console.log(HP.getTitle());
  console.log(HP.getAuthor());
  console.log('-----');
}
console.groupEnd();
