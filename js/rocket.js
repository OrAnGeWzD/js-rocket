
var timer = null
var countdownNumber = 10

var changeState = function (state) {
	document.body.className = 'body-state'+ state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


if (state==2) {
		countdownNumber = 10;
		timer = setInterval(function(){
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
		if (countdownNumber <= 0) {
			changeState(3);
		}
		},1000);
	} 
else if (state==3){

		var success = setTimeout(function()
		{
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber ',randomNumber)

			if (randomNumber > 4){
				
				changeState(4);
				success = true;
			}
			else {
				changeState(5);
				success = false;
			}
		},1000);
	}

else if (state==4){
		alert("ON MARS YOU GO");
	}

else if (state==5){
		alert("ON Earth you stay");
	}
		

	
};
