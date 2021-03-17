const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true) {
    this.isReversed = !value;
    this.LATIN_ALPHABET_LENGTH = 26;
    this.A_POS_CODE = 65;
  }
  keyConvert( message, key) {
    if (arguments.length !== 2) {
      throw new Error();
    }
    let convertedKey = key.toUpperCase();
    let convertedMessage = message.toUpperCase();
    if (convertedKey.length < convertedMessage.length) {
      let diff = convertedMessage.length - convertedKey.length;
      if (diff > convertedKey.length) {
        let repeatNumb = Math.floor(convertedMessage.length / convertedKey.length);
        convertedKey = convertedKey.repeat(repeatNumb);
        diff = convertedMessage.length % convertedKey.length;
      }
      convertedKey =  convertedKey + convertedKey.substr(0, diff);
    }
    return { convertedMessage, convertedKey };
  }
  isLetter(letter){
    const letterCode = letter.codePointAt(0);
    return  letterCode >= this.A_POS_CODE && letterCode <= this.A_POS_CODE + this.LATIN_ALPHABET_LENGTH
  }
  encrypt( message, key ) {
    const { convertedMessage, convertedKey } = this.keyConvert(message, key);
    let encStr = '';
    let keyIndex = 0;
    for (let i = 0; i < convertedMessage.length; i++) {
      if (this.isLetter(convertedMessage[i])) {
        encStr += String.fromCodePoint(((convertedMessage.codePointAt(i) - this.A_POS_CODE) + (convertedKey.codePointAt(keyIndex) - this.A_POS_CODE)) % this.LATIN_ALPHABET_LENGTH + this.A_POS_CODE);
        keyIndex++;
      } else {
        encStr += convertedMessage[i];
      }
    }
    if (this.isReversed){
      return encStr.split('').reverse().join('');
    }
    return encStr;
  }
  decrypt( message, key ) {
    const { convertedMessage, convertedKey } = this.keyConvert(message, key);
    let decStr = '';
    let keyIndex = 0;
    for (let i = 0; i < convertedMessage.length; i++) {
      if (this.isLetter(convertedMessage[i])) {
        decStr += String.fromCodePoint((convertedMessage.codePointAt(i) - this.A_POS_CODE + this.LATIN_ALPHABET_LENGTH - (convertedKey.codePointAt(keyIndex) - this.A_POS_CODE)) % this.LATIN_ALPHABET_LENGTH + this.A_POS_CODE);
        keyIndex++;
      } else {
        decStr += convertedMessage[i];
      }
    }
    if (this.isReversed){
      return decStr.split('').reverse().join('');
    }
    return decStr;
  }
}

module.exports = VigenereCipheringMachine;
