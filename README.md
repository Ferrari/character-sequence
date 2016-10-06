# character-sequence

Small toolkit can count word sequence and do something else

## Getting started

Install module from npm first:
```
npm install character-sequence
```

## Basic Usage

```
var CharacterSequence = require('character-sequence')

var count1 = CharacterSequence('test')
// count1: [ 19, 4, 18, 19 ]

var count2 = CharacterSequence('small')
// count2: [ 18, 12, 0, 11, 11 ]
var count3 = CharacterSequence('small', { positive: true })
// count3: [ 19, 13, 1, 12, 12 ]

var count4 = CharacterSequence('test', { sum: true })
// count4: 60
```
