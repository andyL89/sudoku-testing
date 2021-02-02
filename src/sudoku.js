

const rowArray = [1,2,3,4,5,6,7,8,9];
const columnArray = [1,2,3,4,5,6,7,8,9];

export default function checkRow(array) {
  let secondArray = [];
  let duplicate = false;
  for(let i = 0; i < array.length; i++) {
    let number = array[i];
    if (secondArray.includes(number)){
      duplicate = true;
    }
    secondArray.push(number);
    console.log(secondArray);
  }
  return duplicate;
}