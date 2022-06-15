console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    let sum = 0; 
  numbers.forEach(number => {
    sum += number;
  });
    return sum;
}
console.log (arraySum(numbers))

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title : "How Stella Learned to Talk by Christina Hunger",
    pages : 272,
    readCount : "never read", 
    info: "",
};
book.info = book.title + ", " + book.pages + ", " + book.readCount + ".";

console.log(book.info);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i ++) {
    let letters = words[i].split("");
    letters.reverse();
    let reverseWord = letters.join("")
    result.push(reverseWord);
  }

  return result.join(" ");
}

console.log(reverseWords(sentence))

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(str) {
  let headersStr = str.slice(0, str.indexOf("\n")).split(",");

  let values = str.slice(str.indexOf("\n") + 1).split("\n");

  const customArr = values.map((row) => {
    let values = row.split(",");
    let obj = {}
    values.forEach((col, idx) => {
      if (idx < headersStr.length) {
        obj[headersStr[idx]] = col;
      } else {obj[`misc${idx}`] = col;
      }
    });

    return obj;
  });

  return customArr;
}

console.log(csvConverter(csvData));

