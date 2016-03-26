'use strict';

const wordToTel = require('./telword/word-to-tel');

const digits = '0123456789'.split('');

(module.exports = {
  initialize: function () {
    this.tels = Array.apply([], digits);
    this.words = Array.apply([], digits);
    this.lengthPrepared = digits.length;
    return this;
  },
  prepare: function (words) {
    this.words = this.words.concat(words);
    this.tels = this.tels.concat(words.map(wordToTel));
    this.lengthPrepared += words.length;
    return this;
  },
  perform: function (tel) {
    const keys = [];
    const sentences = [];
    let sentence = '';
    let telFulfilled = '';
    const shouldConcat = i => keys.length && !(keys[keys.length - 1] < 10 && i < 10);
    let initialKey = 0;
    const subtail = (s, length) => s.substr(0, s.length - length);
    const fallback = () => {
      if (keys.length === 0) {
        return false;
      }
      initialKey = keys.pop();
      sentence = subtail(sentence, this.words[initialKey].length + (shouldConcat(initialKey) ? 1 : 0));
      telFulfilled = subtail(telFulfilled, this.tels[initialKey].length);
      initialKey++;
      return true;
    };
    for (;;) {

      let i = initialKey;
      for (; i < this.lengthPrepared; i++) {
        if (this.tels[i] === tel.substr(telFulfilled.length, this.tels[i].length)) {
          break;
        }
      }
      if (i >= this.lengthPrepared) {
        if (fallback()) {
          continue;
        } else {
          break;
        }
      }

      sentence += (shouldConcat(i) ? '-' : '') + this.words[i];
      telFulfilled += this.tels[i];
      keys.push(i);

      if (telFulfilled.length === tel.length) {
        sentences.push(sentence);
        fallback();
      }

    }
    return sentences;
  }
}).initialize();
