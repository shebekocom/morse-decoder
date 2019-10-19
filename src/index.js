const MORSE_TABLE = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd',
    '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h',
    '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p',
    '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z', '.----': '1', '..---': '2', 
    '...--': '3', '....-': '4', '.....': '5', '-....': '6',
    '--...': '7', '---..': '8', '----.': '9','-----': '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i <= expr.length; i = i + 10) {
        // break the string into 10 characters
        index = expr.slice(i, i + 10);
        
        // decode array strings into morse code 
        // and push also decode morse code in new array
        index === '**********' ? arr.push(' ') : arr
            .push(MORSE_TABLE[index
            .replace(/00/g, '')
            .replace(/10/g, '.').replace(/11/g, '-')]);
    }

    return arr.join('');
}

module.exports = {
    decode
}