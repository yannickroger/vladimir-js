import {
    getLettersMap,
    Result,
    calculate,
} from '../calculator';

describe('Letters map', () => {
    const letters = getLettersMap();

    const countLetters = letters => {
        return Object.keys(letters).length;
    };

    it('Should contain 33 letters', function() {
        expect(countLetters(letters)).toBe(33);
    });
});

describe('Result item', () => {
    it('should have a score with 0 as a default value', () => {
        let result = new Result();
        expect(result.score).toBe(0);
    });

    it('should have an array of letters not found, empty by default', () => {
       let result = new Result();
       expect(result.notFound).toEqual([]);
    });

    it('should allow to increment the score', () => {
        let increment = 42;
        let result = new Result();
        result.addToScore(); // should do nothing
        result.addToScore(increment);
        expect(result.score).toBe(increment);
    });

    it('should allow to add not found letters', () => {
        let letter = 'y';
        let result = new Result();
        result.addToNotFound(letter);
        expect(result.notFound).toEqual([letter]);
    });

    it('should ignore white spaces as a letter not found', () => {
        let result = new Result();
        result.addToNotFound();
        result.addToNotFound('');
        result.addToNotFound(' ');
        expect(result.notFound).toEqual([]);
    });

    it('should be possible to create a result with all params', () => {
        const score = 42;
        const notFound = ['a'];

        let result = new Result(score, notFound);

        expect(result.score).toBe(score);
        expect(result.notFound).toEqual(notFound);
    });
});

describe('Calculate', () => {
    it('should return a Result', () => {
        let result = calculate();

        expect(result instanceof Result).toBeTruthy();
    });

    let testedItems = new Map([
        // ['tested value', expected result]

        // empty values
        ['', new Result(0,[])],
        [null, new Result(0,[])],
        ['a', new Result(0,['a'])],


        // valid values
        ['х', new Result(23,[])],
        ['хт', new Result(43,[])],
        ['хт ', new Result(43,[])],
        [' хт àà', new Result(43, ['à', 'à'])],
    ]);

    it('Should calculate strings', function() {
        testedItems.forEach( function(expectedResult, word) {
            expect(calculate(word)).toEqual(expectedResult);
        });
    })
});