;function openbox(id1, id2, id3){
    display = document.getElementById(id1).style.display;

    if(display=='none') {
       document.getElementById(id1).style.display='block';
	   document.getElementById(id2).style.display='none';
	   document.getElementById(id3).style.display='block';
    } else{
       document.getElementById(id1).style.display='none';
	   document.getElementById(id2).style.display='block';
	   document.getElementById(id3).style.display='none';
    }
};

function check(checkbox, id2, color1, color2) {
	var checked = checkbox.checked;
	if(checked) {
		document.getElementById(id2).style.backgroundImage = "url('icon/Group 50.svg')";
		checkbox.checked = true;
		document.getElementById(id2).parentNode.style.color = color1;
	} else {
		document.getElementById(id2).style.backgroundImage = "url('icon/Rectangle 20.svg')";
		checkbox.checked = false;
		document.getElementById(id2).parentNode.style.color = color2;
	}
};

function addValueToTable(idTable) {
	var data = new Array(["Roger pen",	"1,475,298",	"13,935",	"448%",	"$ 4,447",	"40%",	"$2,36",	"$2,36",	"$2,36", 7],
					["Roger pen",	"1,475,298",	"13,935",	"448%",	"$ 4,447",	"40%",	"$2,36",	"$2,36",	"$2,36", 7],
					["Roger pen",	"1,475,298",	"13,935",	"448%",	"$ 4,447",	"40%",	"$2,36",	"$2,36",	"$2,36", 7],
					["Roger pen",	"1,475,298",	"13,935",	"448%",	"$ 4,447",	"40%",	"$2,36",	"$2,36",	"$2,36", 7],
					["Roger pen",	"1,475,298",	"13,935",	"448%",	"$ 4,447",	"40%",	"$2,36",	"$2,36",	"$2,36", 7]);
	var td = document.getElementsByTagName("td");
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 9; j++) {
			td[i*10 + j].innerHTML = data[i][j];
		}
	}
	
	var canvas = new Array();
	for (var i = 1; i <= 5; i++) {
		canvas[i-1] = document.getElementById("tableCanvas" + i);
		var ctx = canvas[i-1].getContext("2d");
		
		ctx.fillStyle = "#E2E2E4";
		ctx.fillRect(0, 0, 154.71, 25.34);
		ctx.fillStyle = "#F39C12";
		ctx.fillRect(0, 0, (154.71 / 10) * data[i-1][9], 25.34);
		
		ctx.fillStyle = "#fff";
		ctx.font = "0.875em 'LibreFranklinLight'";
		ctx.fillText(""+ data[i-1][9] + "/10", 63.03, 16);
	}
}