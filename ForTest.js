var scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];
var highScore = 0;
var output;
var countR = 0;
// Write code without "scores.length"
var lgg = scores.lastIndexOf(44);
// That's why we added "lgg"
// lgg = Last indexnumber of "scores"

for (var i = 0; i < lgg+1 ; i++) { //we can put "scores.length" instead of "lgg+1"
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    countR++;
    if (scores[i] > highScore) {
        highScore = scores[i];

    }
}
console.log("Bubbles tests: " + countR);
console.log("Highest bubble score: " + highScore);

var bestSolurtions = [];
for (var i = 0; i<scores.length; i++){
    if (scores[i] == highScore) {
        bestSolurtions.push(i)

    }
}
console.log("Solurtions whit the Highest score : " + bestSolurtions);
// higt score code -> 
// var Hg = Math.max(scores);
