clearInterval(timer);
var timer = null
var countdownNumber = 10
var changeState = function (state) {
	document.body.className = 'body-state'+state;

	if (state == 2) {
		timer = setInterval(function(){
			document.getElementById('countdown').innerHTML = countdownNumber = countdownNumber-1;
		if (countdownNumber <= 0) {
			changeState(3);
		}
		},1000);
	} 
	else if (state==3){
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10);

			console.log('randomNumber ',randomNumber)

			if (randomNumber > 6){
				changeState(4);
			}
			else {
				changeState(5);
			}
		}, 2000);
	}
	else if (state==4){
			alert:"ON MARS YOU GO";
	}
	else if (state==5){
			alert:"ON Earth you stay";
	}
		

	
};
