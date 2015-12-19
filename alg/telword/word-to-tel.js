'use strict';

const charToTel = require('./char-to-tel');

module.exports = s => s.toLowerCase().split('').map(charToTel).join('');
