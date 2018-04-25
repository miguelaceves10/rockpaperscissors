var imgPlayer;
var btnRock;
var btnPaper;
var btnScissors;
var btnGo;
var computerChoice;
var playerChoice;

function init(){
	imgPlayer = document.getElementById("imgPlayer");
	btnRock = document.getElementById("btnRock");
	btnPaper = document.getElementById("btnPaper");
	btnScissors = document.getElementById("btnScissors");
	btnGo = document.getElementById('btnGo');
	deselectAll();
}

function deselectAll(){
	$("#btnPaper").css("backgroundColor", "white");
	//btnPaper.style.backgroundColor = 'white';
	$("#btnScissors").css("backgroundColor", "red");
	//btnScissors.style.backgroundColor ='red';
	$("#btnRock").css("backgroundColor", "green");
	//btnRock.style.backgroundColor = 'green';
}	

function select(choice){
	playerChoice = choice;
	$("#imgPlayer").attr("src", "images/" + choice + ".png");
	//imgPlayer.src = 'images/' + choice + '.png';
	deselectAll();
	if(choice == 'rock')btnRock.style.backgroundColor = 'green';
	if(choice == 'paper')btnRock.style.backgroundColor = 'white';
	if(choice == 'scissors')btnRock.style.backgroundColor = 'red';
	
	btnGo.style.display = 'block';
}

function go(){
	var txtEndTitle = document.getElementById('txtEndTitle');
	var txtEndMessage = document.getElementById('txtEndMessage');
	
	var numChoice = Math.floor(Math.random()*3);
	var imgComputer = document.getElementById('imgComputer');
	
	$("#lblRock").css("backgroundColor", "yellow");
	$("#lblPaper").css("backgroundColor", "yellow");
	$("#lblScissors").css("backgroundColor", "yellow");
	
	// document.getElementById('lblRock').style.backgroundColor = 'blue';
	// document.getElementById('lblPaper').style.backgroundColor = 'blue';
	// document.getElementById('lblScissors').style.backgroundColor = 'blue';
	
	
	if(numChoice == 0){
		computerChoice = 'rock';
		$("#btnRock").attr("src", "images/rock" + ".png");
		//imgComputer.src ='images/rock.png';
		$("#lblRock").css("backgroundColor", "yellow");
		//document.getElementById('lblRock').style.backgroundColor = 'blue';
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'scissors') {
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
	}
	 else if(numChoice == 1){
		computerChoice = 'paper';
		$("#btnPaper").attr("src", "images/paper" + ".png");
		//imgComputer.src ='images/paper.png';
		$("#lblPaper").css("backgroundColor", "yellow");
		//document.getElementById('lblPaper').style.backgroundColor = 'blue';
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = 'Paper covers Rock';
			txtEndMessage.innerHTML = 'YOU LOSE';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		
		}
		else if(playerChoice == 'scissors') {
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
	}
	else if(numChoice == 2){
		computerChoice = 'scissors';
		$("#btnScissors").attr("src", "images/scissors" + ".png");
		//imgComputer.src ='images/scissors.png';
		$("#lblScissors").css("backgroundColor", "yellow");
		//document.getElementById('lblScissors').style.backgroundColor = 'blue';
		if(playerChoice == 'rock'){
			txtEndTitle.innerHTML = 'Rock smashes Scissors';
			txtEndMessage.innerHTML = 'YOU WIN';
		}
		else if(playerChoice == 'paper'){
			txtEndTitle.innerHTML = 'Scissors cuts Paper';
			txtEndMessage.innerHTML = 'YOU LOSE';
		
		}
		else if(playerChoice == 'scissors') {
			txtEndTitle.innerHTML = '';
			txtEndMessage.innerHTML = 'TIE';
		}
	}
		$("#endScreen").css("display", "block");
		//document.getElementById('endScreen').style.display = 'block';
		
	
}

function startGame(){
	$("#introScreen").css("display","none");
	
}
// function startGame(){
// 	document.getElementById('introScreen').style.display = 'none';
// }

function replay(){
	location .reload();
}
