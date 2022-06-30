const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('be different card', () => {
        expect(shuffleArray[1].length != shuffleArray[2].length)
    })
    test('check if an array', ()=> {
        expect(shuffleArray.isArray(true));
    })
})