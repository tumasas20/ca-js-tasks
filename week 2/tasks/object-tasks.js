console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        const change = drinks.sort(function sortDrinkByPrice(a, b) {
            return a.price - b.price;
        });
        return change;
    }
    const result = sortDrinkByPrice([{ name: "lemonade", price: 50 }, { name: "lime", price: 10 }]);
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
    }
    const result = addName({ piano: 500, stereo: 300 }, 'Caligula', 300);
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(x, y) {
        obj = {
            '-3': { m: 'great grandfather', f: 'great grandmother' },
            '-2': { m: 'grandfather', f: 'grandmother' },
            '-1': { m: 'father', f: 'mother' },
            '0': { m: 'me!', f: 'me!' },
            '1': { m: 'son', f: 'daughter' },
            '2': { m: 'grandson', f: 'granddaughter' },
            '3': { m: 'great grandson', f: 'great granddaughter' },
        }
        return obj[`${x}`][`${y}`];
    }
    const result = generation(0, 'm');
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    function maximumScore(tileHand) {
        let sum = 0;
        for (let i = 0; i < tileHand.length; i++) {
            sum += tileHand[i]['score'];
        }
        return sum;
    }
    const result = maximumScore([
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ]);
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, limit) {
        let sum = 0;
        for (let item in obj) {
            sum += obj[item];
        }
        return sum - limit;
    }
    const result = calculateDifference({ skate: 10, painting: 20 }, 19);
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
        let results = [];
        for (let key in obj) {
            let newArr = [key, obj[key]]
            results.push(newArr);
        }
        return results;
    }
    const result = toArray({ a: 1, b: 2 });
    console.log(result);
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
function inkLevels(inks){
    let noPage = inks.cyan;
    for (i in inks) {
        if (noPage > inks[i]) noPage = inks[i];
    }
    return noPage;
}
const result = inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  });
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj) {
	for (let key in obj){
        return Object.values(obj).reduce((a, c) => a+c);
    }
    return 'Lucky you!';
    }
    const result = calculateLosses({
        tv: 30,
        skate: 20,
        stereo: 50,
      });
      console.log(result);
}
console.groupEnd();


