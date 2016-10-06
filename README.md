# character-sequence

Small toolkit can count word sequence and do something else

## Getting started

Install module from npm first:
```
npm install character-sequence
```

## Basic Usage

**char2seq**
```
var CharacterSequence = require('character-sequence')

var count1 = CharacterSequence.char2seq('test')
// count1: [ 19, 4, 18, 19 ]

var count2 = CharacterSequence.char2seq('small')
// count2: [ 18, 12, 0, 11, 11 ]
var count3 = CharacterSequence.char2seq('small', { positive: true })
// count3: [ 19, 13, 1, 12, 12 ]

var count4 = CharacterSequence.char2seq('test', { sum: true })
// count4: 60

var count5 = CharacterSequence.char2seq('test-abc')
// [ 19, 4, 18, 19, 0, 1, 2 ]
var count6 = CharacterSequence.char2seq('test-abc', { noSkip: true })
// [ 19, 4, 18, 19, -1, 0, 1, 2 ]
```

**char2seq**
```
var CharacterSequence = require('character-sequence')

var count1 = CharacterSequence.seq2char('0019000400180019', { unit: 4 })
// TEST
var count2 = CharacterSequence.seq2char([ 18, 12, 0, 11, 11 ])
// SMALL
```
