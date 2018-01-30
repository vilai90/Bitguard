window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "Index Growth YTD",
		fontSize: 30,
	},
	axisY: {
		title: "Growth Rate (in %)",
		suffix: "%",
		includeZero: false,
		fontSize: 20,
	},
	axisX: {
		title: "Cryptocurrencies",
		fontSize: 20,
	},
	data: [{
		type: "column",
		
		dataPoints: [
			{ label: "BTC", y: 1000.09 },	
			{ label: "ETH", y: 800.40 },	
			{ label: "LTC", y: 600.50 },
			{ label: "ICX", y: 59.96 },	
			{ label: "VEN", y: 200.80 },
			{ label: "XLM", y: 300.56 },
			{ label: "ENG", y: 7.20 },
			{ label: "OMG", y: 5.1 }
			
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}