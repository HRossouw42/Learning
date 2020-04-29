// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
  if (
    password.length >= 8 &&
    password.includes(" ") === false &&
    password.localeCompare(username) != 0 &&
    password.includes(username) != true
  ) {
    return true;
  } else return false;
}

//Regular Expressions
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let re = /\s/g;
  let lowercase = sentence.toLowerCase().replace(re, "");
  //regular expression used else replace() would only replace the first pattern it found

  for (let i = 0; i < alphabet.length; i++) {
    if (!lowercase.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
};

//Get random card with no continuity 

const Card = {
    value: '',
    suit: ''
};

function picker(arr){
    const idx = Math.floor(Math.random() * arr.length)

    return (arr[idx])
}

function getCard() {

    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = ['heart', 'diamond', 'spade', 'club']

    Card.value = picker(values)
    Card.suit = picker(suits)

    return Card
}
