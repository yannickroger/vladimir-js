export class Result {
    constructor (score = 0, notFound = []) {
        this.score = score;
        this.notFound = notFound;
    }

    addToScore(value = 0) {
        this.score = this.score + value;
    }

    addToNotFound(letter = '') {
        if (letter === ' ' || letter === ''){
            return;
        }

        this.notFound.push(letter);
    }
}

export const getLettersMap = () => {
    return {
        'а' : 1,
        'б' : 2,
        'в' : 3,
        'г' : 4,
        'д' : 5,
        'е' : 6,
        'ё' : 7,
        'ж' : 8,
        'з' : 9,
        'и' : 10,
        'й' : 11,
        'к' : 12,
        'л' : 13,
        'м' : 14,
        'н' : 15,
        'о' : 16,
        'п' : 17,
        'р' : 18,
        'с' : 19,
        'т' : 20,
        'у' : 21,
        'ф' : 22,
        'х' : 23,
        'ц' : 24,
        'ч' : 25,
        'ш' : 26,
        'щ' : 27,
        'ъ' : 28,
        'ы' : 29,
        'ь' : 30,
        'э' : 31,
        'ю' : 32,
        'я' : 33,
    };
};

/**
 *
 * @param letter
 * @returns {boolean}
 */
const isLetterInMap = letter => {
    const map = getLettersMap();
    return map[letter] > 0;
};

/**
 *
 * @param letter
 * @returns {*}
 */
const getLetterValue = letter => {
    const map = getLettersMap();
    return map[letter];
};


/**
 *
 * @param {String} word
 * @returns {Result}
 */
export const calculate = (word = '') => {
    const result = new Result();

    if (!word){
        return result;
    }

    const wordAsArray = word.split('');

    wordAsArray.forEach(letter => {

        if (isLetterInMap(letter)) {
            result.addToScore(getLetterValue(letter));
        } else {
            result.addToNotFound(letter);
        }
    });

    return result;
};



