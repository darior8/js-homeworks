let text = "Wonderful, Joyful, Happiness, Time, Task, Apple";

let words = text.match(/[a-zA-Z]+/g);

let result = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= 6) {
        if (!/[aA]/.test(word)) {
            result.push(word);
        }
    }
}

console.log(result);