
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'home', 'wood', 'knife'];
// indeksai:    0       1         2        3       4        5       6      7       8       9
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'from'];
// indeksai:    0       1     2      3     4    5     6     7     8

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister
// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.
// my table is from wood
// my knife is in home
// sister is in home
let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
console.log(sentence2);

let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
console.log(sentence3);

let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];
console.log(sentence4);

let sentence5 = helpers[3] + helpers[7] + nouns[4] + helpers[7] + helpers[4] + helpers[7] + helpers[8] + helpers[7] + nouns[8];
console.log(sentence5);

let sentence6 = helpers[3] + helpers[7] + nouns[9] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + nouns[7];
console.log(sentence6);

let sentence7 = nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + nouns[7];
console.log(sentence7);

