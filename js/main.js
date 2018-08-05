/*-----------burgerMenu---------*/
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
/*-----------checkedbox---------*/
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

/*-----------table fill----------*/
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



/*---------graph 1---------*/
var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontColor = '#989898';
Chart.defaults.global.defaultFontFamily = 'LibreFranklin';
Chart.defaults.global.defaultFontSize = 20;
var myChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: ["Video", "Social"],
		datasets: [{
		label: 'New',
		data: [3500, 2120],
		backgroundColor: 'rgba(0,183,241, 0.49)',
		}, 
		{
		label: 'Returning',
		data: [0, 0],
		backgroundColor: 'rgba(243,156,18, 0.49)',
	}]
	},
	options: {
	scales: {
		xAxes: [{
			ticks: {
				beginAtZero:true,
				max: 4000,
			},
			gridLines: {
				display: true,
				color: 'rgba(237,237,237,1)'
			},
			color: '#707070'
		}],
		yAxes:[{
			stacked: true,
			gridLines: {
				display: false
			},
			categoryPercentage: 0.6,
			barPercentage: 1,
			color: '#707070'
		}
		]
	}, legend: {
			display: false,
		},
		animation: {
			onComplete: function () {
				var chartInstance = this.chart,
				ctx = chartInstance.ctx;
				ctx.font = Chart.helpers.fontString(30, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
				ctx.textAlign = 'top';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = '#BBB';


				this.data.datasets.forEach(function (dataset, i) {
					var meta = chartInstance.controller.getDatasetMeta(i);
					meta.data.forEach(function (bar, index) {
						var data = dataset.data[index];                            
						ctx.fillText(data, bar._model.x - 100, bar._model.y);
					});
				});
			}
		}
	}
});

document.getElementById('chartjsLegend').innerHTML = myChart.generateLegend();
var span = [document.getElementById('chartjsLegend').firstChild.firstChild.firstChild, document.getElementById('chartjsLegend').firstChild.lastChild.firstChild];
span[0].style.backgroundColor = "rgb(0,183,241)";
span[1].style.backgroundColor = "rgb(243,156,18)";
							