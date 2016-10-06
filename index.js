'use strict'

const CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CHAR_ARRAY = CHAR.split('')

function _countCharSeq (word, opts) {
  let wordArr = word.toUpperCase().split('')
  let countArr = wordArr.map((char) => {
    return (opts && opts.positive === true)
    ? (CHAR_ARRAY.indexOf(char) + 1)
    : CHAR_ARRAY.indexOf(char)
  })

  if (opts && opts.noSkip === true) {
    return countArr
  } else {
    return countArr.filter((item) => { return item >= 0 })
  }
}

function CharacterSequence (word, opts) {
  if (!this instanceof CharacterSequence) {
    return new CharacterSequence(word)
  }

  if (typeof word !== 'string') {
    throw new TypeError('Input text must be string')
  }

  let countArr = _countCharSeq(word, opts)

  return (opts && opts.sum === true)
  ? countArr.reduce((prev, curr) => { return (prev += curr) })
  : countArr
}

module.exports = CharacterSequence
