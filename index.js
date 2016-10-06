'use strict'

const CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CHAR_ARRAY = CHAR.split('')

function _countCharSeq (word, onlyPositive) {
  let wordArr = word.toUpperCase().split('')
  let countArr = wordArr.map((char) => {
    return (onlyPositive === true)
      ? (CHAR_ARRAY.indexOf(char) + 1)
      : CHAR_ARRAY.indexOf(char)
  })

  return countArr
}

function CharacterSequence (word, opts) {
  if (!this instanceof CharacterSequence) {
    return new CharacterSequence(word)
  }

  if (typeof word !== 'string') {
    throw new TypeError('Input text must be string')
  }

  let countArr = (opts && opts.positive === true)
    ? _countCharSeq(word, true)
    : _countCharSeq(word, false)

  return (opts && opts.sum === true)
  ? countArr.reduce((prev, curr) => { return (prev += curr) })
  : countArr
}

module.exports = CharacterSequence
