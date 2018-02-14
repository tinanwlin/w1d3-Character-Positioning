function letterPosition(str) {

    var positionOfLetter = {};

    for (var i = 0; i < str.length; i++) {
        var eachLetter = str[i];
        if (eachLetter !== " ") {
            if (positionOfLetter[eachLetter] === undefined) {
                positionOfLetter[eachLetter] = [];
            } 
                positionOfLetter[eachLetter].push(i);
        }
    }
    return positionOfLetter;
}

console.log(letterPosition("lighthouse in the house"));