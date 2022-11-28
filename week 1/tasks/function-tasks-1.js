console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function returnFirstArrayElement(array) {
    return array[0];
  }
  const res1 = returnFirstArrayElement([1, 2, 3]);
  const res2 = returnFirstArrayElement(['vienas', 'du', 'trys']);
  console.log({ res1, res2 });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function deleteFirstArray(array) {
    const firstElement = array[0];
    delete array[0];
    for (let i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    return firstElement;
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('numbers before removal', numbers);
  const firstElement = deleteFirstArray(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', firstElement);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnArrayLastElement(array) {
    return array[array.length - 1]
  }
  const res1 = returnArrayLastElement([1, 3, 5]);
  const res2 = returnArrayLastElement([2, 7, 12, 14]);

  console.log({ res1, res2 });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastElement(array) {
    let lastElement = array[array.length - 1];
    array.length = array.length - 1;
    return lastElement;
  }
  const res1 = removeLastElement([5, 12, 16, 24]);
  const res2 = removeLastElement(['vienas', 'du', 'trys', 'keturi']);
  console.log({ res1, res2 });

}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function returnArrayLength(array) {
    return array = array.length;
  }
  const res1 = returnArrayLength(['keturi', 'trys', 'penki', 'du', 'devyni']);
  const res2 = returnArrayLength([3, 9, 11, 15, 19, 21, 23]);
  const res3 = returnArrayLength(['baltas', 'raudonas', 'judas']);

  console.log({ res1, res2, res3 });
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function returnLastIndex(arrId) {
    for (let i = 0; i >= arrId; i--);
    return arrId = arrId.length - 1;
  }

  const res1 = returnLastIndex([15, 12, 24, 10, 11]);
  const res2 = returnLastIndex(['vienas', 'du', 'trys', 'keturi']);
  console.log({res1, res2});
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function returArrIndexRow(){
    const arr = ['du', 'trys', 'keturi', 'vienas'];
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
  returArrIndexRow();
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function returnArrRow() {
    const arr = [15, 4, 'vienas', 'du', 'trys']
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
  }
  returnArrRow();
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function returnArrIndexRow() {
    const arr = ['du', 4, 'vienas', 5, 'trys']
    for (let i = 0; i < arr.length; i++){
      console.log([i], '=>', arr[i])
    }
  }
  returnArrIndexRow();
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function returnArrRowBack() {
    const arr = ['du', 4, 'vienas', 5, 'trys']
    for (let i = arr.length - 1; i >= 0; i--){
      console.log(arr[i]);
    }
  }
  returnArrRowBack();
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function returnIndexRow(arr){
    let resultRow = '';
    for(let i = 0; i < arr.length; i++){
      const isNotLastElement = i < arr.length - 1;
      resultRow += [i];
      
      if(isNotLastElement){
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }
  const testArr1 = ['vienas', 'du', '15', '4'];

  returnIndexRow(testArr1);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function returnIndexRow(arr){
    let resultRow = '';
    for(let i = 0; i < arr.length; i++){
      const isNotLastElement = i < arr.length - 1;
      resultRow += arr[i];
      
      if(isNotLastElement){
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }
  const testArr1 = [-111, 2, -9, 48];

  returnIndexRow(testArr1);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function returnIndexRow(arr){
    let resultRow = '';
    for(let i = 0; i < arr.length; i++){
      const isNotLastElement = i < arr.length - 1;
      resultRow += '[';
      resultRow += [i];
      resultRow += '] => ';
      resultRow += arr[i];
      if(isNotLastElement){
        resultRow += ', ';
      }
    }
    console.log(resultRow);
  }
  const testArr1 = [-111, 2, -9, 48];

  returnIndexRow(testArr1);
}
console.groupEnd();
