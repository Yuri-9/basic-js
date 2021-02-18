const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction === false ? "revers" : "direct";
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.ALPHABET_LENGTH = 26;
  }

  findIndexLetterWord(i, word) {
    return this.alphabet.indexOf(word[i]);
  }

  findIndexLetterKey(i, keyWord) {
    return this.alphabet.indexOf(keyWord[i % keyWord.length]);
  }

  encrypt(currentWord, keyWord) {
    currentWord = currentWord.toUpperCase();
    keyWord = keyWord.toUpperCase();
    let cipherWord = [];
    let couterLetter = 0;

    for (let i = 0; i < currentWord.length; i++) {
      if (this.findIndexLetterWord(i, currentWord) !== -1) {
        let indexLetterCipherWord =
          (this.findIndexLetterWord(i, currentWord) +
            this.findIndexLetterKey(couterLetter, keyWord)) %
          this.ALPHABET_LENGTH;
        let cipherLetter = this.alphabet[indexLetterCipherWord];
        cipherWord.push(cipherLetter);
        couterLetter++;
      } else {
        cipherWord.push(currentWord[i]);
      }
    }
    return this.direction == "direct"
      ? cipherWord.join("")
      : cipherWord.reverse().join("");
  }
  decrypt(cipherWord, keyWord) {
    cipherWord = cipherWord.toUpperCase();
    keyWord = keyWord.toUpperCase();
    let currentWord = [];
    let couterLetter = 0;

    for (let i = 0; i < cipherWord.length; i++) {
      if (this.findIndexLetterWord(i, cipherWord) !== -1) {
        let indexLetterCurrentWord =
          (this.findIndexLetterWord(i, cipherWord) +
            this.ALPHABET_LENGTH -
            this.findIndexLetterKey(couterLetter, keyWord)) %
          this.ALPHABET_LENGTH;

        let currentLetter = this.alphabet[indexLetterCurrentWord];
        currentWord.push(currentLetter);
        couterLetter++;
      } else {
        currentWord.push(cipherWord[i]);
      }
    }
    return this.direction == "direct"
      ? currentWord.join("")
      : currentWord.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
