function init(){
	hour = parseInt(document.getElementById("hour").value);
	minute = parseInt(document.getElementById("minute").value);
	sec = parseInt(document.getElementById("sec").value);

	view_hour = document.getElementById("view-hour");
	view_minute = document.getElementById("view-minute");
	view_sec = document.getElementById("view-sec");

	/*Tao nut Play( Pause / Play)*/
	playpause = document.getElementById("playpause");
}

function setTime(){
	var flag = (sec || minute || hour);

	if(isNaN(sec) || isNaN(minute) || isNaN(hour)){
		flag = false;
	}

	if(flag)
	{
		sec = sec - 1;
 
 		if (sec === -1){
 			if(minute > 0){
 				minute = minute - 1;
 				sec = 59;
 			}
 			if(hour > 0){
 				hour = hour - 1;
 				minute = 59;
 				sec = 59;
 			}
 		}
 		view_sec.innerHTML = sec;
		view_minute.innerHTML = minute;
		view_hour.innerHTML = hour;
	}
	 
	else{
		if(sec === 0 && minute === 0 && hour === 0){
			alert("Xong!!!");
			clearInterval(start);
		}else{
			alert("Ban vui long nhap: gio, phut, giay(so)");
			clearInterval(start);
		}
	}
}

function startTime(){
	start = setInterval(setTime, 1000);
}

function pauseTime_playTime(){

	if(playpause.value == "Pause")
	{
		playpause.value = "Play";
		clearInterval(start);
	}

	else if(playpause.value == "Play")
	{
		playpause.value = "Pause";
		startTime();
	}
}

function resetTime(){
	clearInterval(start);
	document.getElementById("sec").value = "";
	document.getElementById("minute").value = "";
	document.getElementById("hour").value = "";
	view_sec.innerHTML = "00";
	view_minute.innerHTML = "00";
	view_hour.innerHTML = "00";
}

window.onload = init;
 