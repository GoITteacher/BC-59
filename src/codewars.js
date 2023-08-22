// ================================================
// function decipherThis(str) {
//   const result = str.split(' ').map(decipherWord).join(' ');
//   return result;
// }

// function decipherWord(word) {
//   const newWord = parseInt(word);
//   const firstLetter = String.fromCharCode(newWord);
//   word = word.replace(newWord, '').split('');
//   [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
//   word = firstLetter + word.join('');
//   return word;
// }

// ================================================

// function foo(iterable) {
//   let res = '';
//   for (let letter of iterable) {
//     if (letter !== res[res.length - 1]) {
//       res += letter;
//     }
//   }
//   return res;
// }

// uniqueInOrder('AAABBBCCCDDDAABBCCAA'); // => "ABCDABCA"

// ================================================

function num(number) {
  while (number >= 10) {
    number = number + '';
    let result = 1;
    for (let i of number) {
      result *= i;
    }
    number = result;
  }
  console.log(number);
  return number;
}

num(39);

// 4

// ======================
