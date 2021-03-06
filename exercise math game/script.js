var sumScore = 0;
document.getElementById("answer").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		document.getElementById("myButton").click();
	}
});

function math () {
	document.getElementById("score").innerHTML = "Your score: " + sumScore;
	num1 = Math.floor(Math.random()*10) + 1;
	num2 = Math.floor(Math.random()*10) + 1;
	document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";
}

function calculate () {
	answerInput = document.getElementById("answer").value;
	if (answerInput == "")
		alert("Please enter an answer.");
	else {
		if (answerInput == (num1 + num2)) {
			sumScore++;
			alert("That's the right answer! Well done!");
			math();
			document.getElementById("question").style.fontSize = "larger";
			document.getElementById("answer").value = "";
		}	
		else {
			sumScore -= 5;
			alert("That's a wrong answer. Try again.");
			document.getElementById("score").innerHTML = "Your score: " + sumScore;
			document.getElementById("answer").value = "";
		}
	}
}