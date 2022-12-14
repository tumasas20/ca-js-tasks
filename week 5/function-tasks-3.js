console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printCapital(str) {
    return str.toUpperCase();
  }
  console.log('---');
  console.log("abcd");
  console.log(printCapital("abcd"));
  console.log("AAAA");
  console.log(printCapital("AAAA"));
  console.log("aBcD");
  console.log(printCapital("aBcD"));
  console.log('---');
}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printLower(str) {
    return str.toLowerCase();
  }
  console.log('---');
  console.log("ABCD");
  console.log(printLower("abcd"));
  console.log("AAAA");
  console.log(printLower("AAAA"));
  console.log("aBcD");
  console.log(printLower("aBcD"));
  console.log('---');
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
  // Funkcijos deklaravimas
  function printFirstLetter(str) {
    return str.charAt(0);
  }
  console.log('---');
  console.log("ABCD");
  console.log(printFirstLetter("abcd"));
  console.log("AAAA");
  console.log(printFirstLetter("AAAA"));
  console.log("aBcD");
  console.log(printFirstLetter("aBcD"));
  console.log('---');
}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
  // Funkcijos deklaravimas
  function printLastLetter(str) {
    return str.slice(str.length - 1);
  }
  console.log('---');
  console.log('Labas');
  console.log(printLastLetter('Labas'));
  console.log('Ate');
  console.log(printLastLetter('Ate'));
  console.log('Brieda');
  console.log(printLastLetter('Brieda'));
  console.log('---');
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
  // Funkcijos deklaravimas
  function printMiddleLetter(str) {
    const middle = str.slice(str.length / 2);
    return middle.charAt(0);
  }
  console.log('---');
  console.log('Labas');
  console.log(printMiddleLetter('Labas'));
  console.log('Ate');
  console.log(printMiddleLetter('Ate'));
  console.log('Brieda');
  console.log(printMiddleLetter('Brieda'));
  console.log('---');
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
  function getDoubleLetterCount(str) {
    return str.length;
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
  function getDoubleLetterCount(str) {
    return str.length * 2;
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
  function getArgsLetterSum(a, b) {
    return a.length + b.length;
  }
  console.log('---');
  console.log({
    'labas, abc': getArgsLetterSum('labas', 'abc'),
    'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
    'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
  function containsLetterA(str) {
    if (str.includes('a')) {
      return true;
    }
    return false;
  }
  console.log('---');
  console.log({
    'labas': containsLetterA('labas'),
    'kempė': containsLetterA('kempė'),
    'Finakolė': containsLetterA('Finakolė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
  function containsLetter(str, letter) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        return true;
      }
    }
    return false;
  }
  console.log('---');
  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    if (str.length % 2 === 0) {
      return true;
    }
    return false;
  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  const vovels = ['A', 'a', 'Ą', 'a', 'E', 'e', 'Ę', 'ę', 'Ė', 'ė', 'I', 'i', 'Į', 'į', 'Y', 'y', 'O', 'o', 'U', 'u', 'Ų', 'ų', 'Ū', 'ū'];
  function getNumberOfVowels(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (vovels.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  const consonants = ['B', 'b', 'C', 'c', 'Č', 'č', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'R', 'r', 'S', 's', 'Š', 'š', 'T', 't', 'V', 'v', 'Z', 'z', 'Ž', 'ž'];
  function getNumberOfConsonants(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (consonants.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
  function isOnlyLetters(str) {
    return !/^[0-9]+$/.test(str);
  }

  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  const letterA = ['a'];
  function letterACount(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (letterA.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (searchLetter.includes(letter)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function lastIndexOfLetterA(str) {
    const findFirstLetter = str.indexOf('a');
    return findFirstLetter;
  }
  console.log('---');
  console.log({
    'labas': lastIndexOfLetterA('labas'),
    'kempės': lastIndexOfLetterA('kempės'),
    '123123': lastIndexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function lastIndexOfLetter(str, searchLetter) {
    const findLetterByparameter = str.indexOf(searchLetter);
    return findLetterByparameter;
  }
  console.log('---');
  console.log({
    'labas, a': lastIndexOfLetter('labas', 'a'),
    'kempės, k': lastIndexOfLetter('kempės', 'k'),
    '123123, z': lastIndexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    let firstIndex = 0, index, newArr = [];
    while ((index = str.indexOf('a', firstIndex)) > -1) {
      newArr.push(index);
      firstIndex = index + str.indexOf('a', firstIndex);
    }
    return newArr;
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    let firstIndex = 0, index, newArr = [];
    while ((index = str.indexOf(searchLetter, firstIndex)) > -1) {
      newArr.push(index);
      firstIndex = index + str.indexOf(searchLetter, firstIndex);
    }
    return newArr;
  }
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    const removedLetter = str.replace('a', '');
    return removedLetter;
  }
  console.log('---');
  console.log({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    const lastIndex = str.lastIndexOf('a');
    if (lastIndex === -1) {
      return str;
    }
    return str.substring(0, lastIndex) + str.substring(lastIndex + 1);
  }
  console.log('---');
  console.log({
    'labas': removeLastLetterA('labas'),
    'kempiniukas': removeLastLetterA('kempiniukas'),
    '123123': removeLastLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    return str.replace(/a/g, '');
  }
  console.log('---');
  console.log({
    'labas': removeAllOccurencesOfLetterA('labas'),
    'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
    '123123': removeAllOccurencesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    let result = '';
    for (const ch of str) {
      if (ch !== letter) {
        result += ch;
      }
    }
    return result;
  }
  console.log('---');
  console.log({
    'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
    'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
    '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  function filterLetters(str, lettersToRemove) {
    let result = '';
    for (const ch of str) {
      if (!lettersToRemove.includes(ch)) {
        result += ch;
      }
    }
    return result;
  }
  console.log('---');
  const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  console.log(str);
  console.log('---');
}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    return str.replace(/ /g, '-');
  }
  console.log('---');
  console.log({
    'viens du trys': replaceSpaceWithDash('viens du trys'),
    'as tave myliu': replaceSpaceWithDash('as tave myliu'),
    'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      const firstLetter = words[i][0].toUpperCase();
      words[i] = firstLetter + words[i].substring(1);
      return words.join(' ');
    }
  }
  console.log('---');
  console.log({
    'viens du trys': capitalize('viens du trys'),
    'as tave myliu': capitalize('as tave myliu'),
    'Bairis seniuk': capitalize('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  console.log('---');
  console.log(strReverse('viens du trys'));
  console.log(strReverse('as tave myliu'));
  console.log(strReverse('Bairis seniuk'));
  console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    let i = 0;
    let k = str.length - 1;
    while (i < k) {
      if (str[i] !== str[k]) return false;
      i++;
      k--;
    }
    return true;
  }
  console.log('---');
  console.log({
    'mama': isPalyndrome('mama'),
    'mamam': isPalyndrome('mamam'),
    '123321': isPalyndrome('123321'),
    '123456': isPalyndrome('123456'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstLetter(str) {

  }

  function splitIntoSentences(paragraph) {
    /*
      2.1 Atskirti pagal sakinio baigimo ženklus ir juos įsiminti
      2.2 Pašalinti tuščius tarpus iš kairės ir dešinės
      2.3 grąžinti objektą su dviem masyvais:
      {
        sentences: [sentence1, sentence2, ... , sentenceN],
        separator: [ '.', '?', ... , '!'],
      }
    */
  }

  function reduceEmptySpaces(str) {
    // Jūsų sugalvota logika, kaip šalinti tarpus prieš kablelį ir kelis tarpus iš eilės
  }

  // 1.
  function fixParagraph(paragraph) {
    /*
      2. Pirmiausiai suskirstome į sakinius, naudojant splitIntoSentences: 
            string  ->  {
                          sentences: [sentence1, sentence2, ... , sentenceN],
                          separator: [ '.', '?', ... , '!'],
                        }
      3. Redaguoti kiekvieną sakinį, naudojant funkciją reduceEmptySpaces
      4. Redaguoti kiekvieną sakinį, naudojant funkciją capitalizeFirstLetter
      5. Sujungti sakinius su atitinkamais sakinių skiriamaisiais/baigiamaisiais ženklais
      6. Grąžinti rezultatą.
    */

    return paragraph
      .trim()
      .replaceAll(/\s+/g, ' ')
      .replaceAll(/\s+([!?.,])/g, '$1')
      .replaceAll(/\s*([!?.])\s*(.)\s*/g, (_, g1, g2) => `${g1} ${g2.toUpperCase()}`);
  }

  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  const fixedParagraph1 = fixParagraph(paragraph);
  const fixedParagraph = fixedParagraph1[0].toUpperCase() + fixedParagraph1.slice(1);
  console.log(paragraph);
  console.log(fixedParagraph);
  console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    return sentence.match(/[^\s]+/g);
  }
  console.log('---');
  console.log({
    'Labas aš Jonas': splitSentence('Labas aš Jonas'),
    'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  })
  console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    return str.split(separator);
  }
  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');
}
console.groupEnd();
console.log();
