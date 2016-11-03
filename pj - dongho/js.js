function init(){
	hours_number = 0;
	minutes_number = 0;
	sec_number = 0;
	hours = document.getElementsByClassName("clockstyle")[0];
	minutes = document.getElementsByClassName("clockstyle")[1];
	sec = document.getElementsByClassName("clockstyle")[2];
}

function setup_clock(){
	var a = "0";
	var b = "0";
	var c = "0";
	if (sec_number >= 9) a = "";
	if (minutes_number >= 9) b = "";
	if (hours_number >= 9) c = "";

	sec_number = sec_number + 1;
	sec.innerHTML = a + sec_number;


	if (sec_number == 60)
	{
		sec.innerHTML = "00"
		a = "0"
		minutes_number = minutes_number  + 1;
		minutes.innerHTML = b + minutes_number;
		sec_number = 0;
	}

	if (minutes_number == 60)
	{
		minutes.innerHTML = "00"
		b = "0"
		hours_number = hours_number + 1;
		hours.innerHTML = c + hours_number;
		minutes_number = 0;
	}
	document.title = c + hours_number + ":" + b + minutes_number + ":" + a + sec_number + " - đồng hồ bấm giờ";
}

function start_clock(){
	start_clock_time = setInterval(setup_clock, 1000);
	return false;
}

function pause_clock(){
	clearInterval(start_clock_time);
	return false;
}

function reset_clock(){
	clearInterval(start_clock_time);
	document.title = "Đồng hồ bấm giờ"
	sec_number = 0;
	minutes_number = 0;
	hours_number = 0;
	sec.innerHTML = "00";
	minutes.innerHTML = "00";
	hours.innerHTML = "00";
	return false;
}
window.onload = init;