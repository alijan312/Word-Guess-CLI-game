const Letter = function(letter){
    this.letter = letter;
    this.hideLetter = false;
    this.showLetter = function(userGuess){
        if (this.hideLetter === false){
            return '_';
        }
        else if (this.hideLetter === true){
            return this.letter;
        }
        else if (this.letter === ' '){
            this.hideLetter = true;
            return ' ';
        }
    }
};

module.exports = Letter;