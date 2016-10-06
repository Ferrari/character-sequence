'use strict'

const leftPad = require('left-pad')
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

module.exports = {
  char2seq: function (word, opts) {
    if (typeof word !== 'string') {
      throw new TypeError('Input text must be string')
    }

    let countArr = _countCharSeq(word, opts)

    if (opts && opts.leftPad) {
      if (typeof opts.leftPad !== 'object' ||
      opts.leftPad.num === undefined ||
      opts.leftPad.fill === undefined) {
        throw new Error('Incorrect left-pad setting')
      }
      let tmpArr = countArr.map((char) => {
        return leftPad(char, opts.leftPad.num, opts.leftPad.fill)
      })
      countArr = tmpArr
    }

    return (opts && opts.sum === true)
    ? countArr.reduce((prev, curr) => { return (prev += curr) })
    : countArr

  },
  seq2char: function (seq, opts) {
    let character = ''
    if (Array.isArray(seq)) {
      seq.forEach((char) => {
        let convertChar = parseInt(char, 10)
        if (CHAR_ARRAY[convertChar] === undefined) {
          return false
        } else {
          character += CHAR_ARRAY[convertChar]
        }
      })
    } else if (typeof seq === 'string' && opts && opts.unit && Number.isInteger(opts.unit)) {
      while (seq.length >= opts.unit) {
        let pop = parseInt(seq.substring(0, (opts.unit)), 10)
        if (CHAR_ARRAY[pop] === undefined) {
          return false
        } else {
          character += CHAR_ARRAY[pop]
        }
        seq = seq.slice(opts.unit)
      }
    } else {
      return false
    }
    return character
  }
}
