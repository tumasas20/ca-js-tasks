console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    get points() {
      const obj = {
        'VE': 5,
        'EA': 10,
        'ME': 20,
        'HA': 40,
        'VH': 80,
        'EX': 120,
      }

      for (let key in obj) {
        if (key === this.level) return obj[key];
      }
    }
  }

  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge(challege) {
      this.xp += challege.points;
      this.log.push(challege.id);
    }
  }

  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);
  const challenge1 = new Challenge(1, 'VE');
  const challenge2 = new Challenge(2, 'EA');
  const challenge3 = new Challenge(3, 'ME');
  const challenge4 = new Challenge(4, 'HA');
  const challenge5 = new Challenge(5, 'VH');
  const challenge6 = new Challenge(6, 'EX');

  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  console.log(user1.name);
  console.log(user1.xp);
  console.log(user1.log);

  console.log(user2.name);
  console.log(user2.xp);
  console.log(user2.log);

  console.log(challenge1.id);
  console.log(challenge2.level);
  console.log(challenge3.points);
  console.log(challenge4.id);
  console.log(challenge5.level);
  console.log(challenge6.points);

  console.log(user1.xp > user2.xp);
  console.log(challenge6.points < challenge1.points);
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    constructor(a, b, c, d) {
      this.name = a;
      this.hp = b;
      this.maxHp = b;
      this.en = c;
      this.maxEn = c;
      this.armor = d;
    }

    healthPerc() {
      this.hpPerc = (this.hp / this.maxHp * 100).toFixed(2);
      return this.hpPerc + '% health.';
    }

    learnSkill(a, b) {
      this[a] = (x) => {
        let en = this.en - b.cost;
        if (en >= 0) {
          this.en = en;
          let arm = x.armor - b.penetration;
          let dmg = (b.demage * (100 - arm) / 100).toFixed(2);
          let t = `${this.name} used ${a}, ${b.desc}, against ${x.name}, doing ${dmg} damage! `;
          t += b.health ? `${this.name} healed for ${b.heal} health! ` : '';
          this.hp = Math.max(0, x.hp - dmg);
          t += x.name + ' ' + (x.hp ? `is at ${x.healthPerc()}` : `died.`);
          return t;
        } else {
          return `${this.name} attempt to use ${a}, but didn't have enough energy!`;
        }
      }
    }
  }


  console.log('----FIGHT!----')
  //player class exists
  const alice = new Player('Alice', 110, 50, 10);
  const bob = new Player('Bob', 100, 60, 20);
  console.log('Does our Player class exist?')
  console.log(bob instanceof Player && alice instanceof Player)

  //learn skill
  console.log("\n----\nCan our competitors learn new skills?")
  console.log(typeof alice.learnSkill,'->', 'Missing `learnSkill` method!')

  //skill is function
  console.log('\n----\nDoes the learnSkill method allow us to add a skill?')
  alice.learnSkill('fireball', {
    damage: 23,
    penetration: 1.2,
    heal: 0,
    cost: 15,
    desc: 'a firey magical attack'
  });
  console.log(typeof alice.fireball, '->', 'Could not learn skill "Fireball"!')

  //cast skill
  console.log('\n----\nCan we cast our new skill?')

  console.log(alice.fireball(bob), 'Alice used fireball, a firey magical attack, against Bob, doing 18.68 damage! Bob is at 81.32% health.', 'Using Fireball returned the wrong string!')

  //too high energy cost?
  console.log('\n----\nWhat about skills with too high an energy cost?')
  bob.learnSkill('superbeam', {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf"
  })

  console.log(bob.superbeam(alice), `Bob attempted to use superbeam, but didn't have enough energy!`, 'Bob should return that he cannot use this skill!')

  //can get a player's HP percent and energy
  console.log("\n----\nAfter that devastating attack, let's check in on Alice and Bob:")
  console.log(bob.hpPerc + '% health', '81.32% health', `Bob should be at 81.32% health`)
  console.log(alice.en + ' energy', '35 energy', `Alice's energy should be 35.`)

  //Combo attack
  console.log("\n----\nBut wait! Bob's back in action!")
  bob.learnSkill('Meteor Strike', {
    damage: 118,
    penetration: 4,
    heal: 5,
    cost: 20,
    desc: "an attack that basically ends the game (gg)"
  })

  console.log(bob['Meteor Strike'](alice), "Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. ")

  console.log('\n----\nAre the four health and energy properties private?');
  ['hp', 'maxHp', 'en', 'maxEn'].forEach(prop => {
    console.log(bob['#' + prop], '->', `Property #${prop} should not be publically accessible!`)
  })
}
console.groupEnd();

