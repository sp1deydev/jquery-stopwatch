let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

$("#start").click(function () {
  timer = true;
  stopWatch();
});

$("#stop").click(function () {
  timer = false;
});

$("#reset").click(function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  count = 0;
  $("#hr").html("00");
  $("#min").html("00");
  $("#sec").html("00");
  $("#count").html("00");
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

        $('#hr').html(hrString); 
        $('#min').html(minString); 
        $('#sec').html(secString); 
        $('#count').html(countString); 
		setTimeout(stopWatch, 10); 
	} 
}
