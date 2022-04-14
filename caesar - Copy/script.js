let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// -------------------New added part---------------------------------------------// 

function encoder(word, num) {
    word = '`' + word + '`'
    return eval(replicateString('encodeWithCaesar(', num) + word + replicateString(')', num))
}
function decoder(word,num) {
    word = '`' + word + '`'
    return eval(replicateString('decodeWithCaesar(', num) + word + replicateString(')', num))
}

function replicateString(str, num) {
    newString = ''
    for (var i = 0; i < num; i++) {
        newString += str
    }
    return newString
}
//----------------------End of the new added part--------------------------------//



function encodeWithCaesar(word) {
    let newString = ''
    for (let letter of word) {
        if (alphabet.indexOf(letter.toLowerCase()) !== -1) {
            if (letter.toLowerCase() !== 'x' && letter.toLowerCase() !== 'y' && letter.toLowerCase() !== 'z') {
                if (letter == letter.toLowerCase()) {

                    newString = newString + alphabet[alphabet.indexOf(letter.toLowerCase()) + 3]
                }
                else {
                    newString = newString + alphabet[alphabet.indexOf(letter.toLowerCase()) + 3].toUpperCase()
                }
            }
            else if (letter.toLowerCase() == 'x') {
                if (letter == 'x') {
                    newString += 'a'
                }
                else newString += 'A'
            }
            else if (letter.toLowerCase() == 'y') {
                if (letter == 'y') {
                    newString += 'b'
                }
                else newString += 'B'
            }
            else if (letter.toLowerCase() == 'z') {
                if (letter == 'z') {
                    newString += 'c'
                }
                else newString += 'C'
            }
        }
        else {
            newString += letter
        }
    }
    return newString
}


function decodeWithCaesar(word) {
    let newString = ''
    for (let letter of word) {
        if (alphabet.indexOf(letter.toLowerCase()) !== -1) {
            if (letter.toLowerCase() !== 'a' && letter.toLowerCase() !== 'b' && letter.toLowerCase() !== 'c') {
                if (letter == letter.toLowerCase()) {

                    newString = newString + alphabet[alphabet.indexOf(letter.toLowerCase()) - 3]
                }
                else {
                    newString = newString + alphabet[alphabet.indexOf(letter.toLowerCase()) - 3].toUpperCase()
                }
            }
            else if (letter.toLowerCase() == 'a') {
                if (letter == 'a') {
                    newString += 'x'
                }
                else newString += 'X'
            }
            else if (letter.toLowerCase() == 'b') {
                if (letter == 'b') {
                    newString += 'y'
                }
                else newString += 'Y'
            }
            else if (letter.toLowerCase() == 'c') {
                if (letter == 'c') {
                    newString += 'z'
                }
                else newString += 'Z'
            }
        }
        else {
            newString += letter
        }
    }
    return newString
}

