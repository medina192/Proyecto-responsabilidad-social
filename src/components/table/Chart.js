import React, { Component } from 'react';
import CanvasJSReact from '../../canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
CanvasJS.addColorSet("customColorSet1",
	[//colorSet Array
	"#fd7b01",
	"#7f0895",
	"#ceff1a",
	"#fd3e81",
	"#0b0a07"
]); 

class AreaChart extends Component {
	
	render() {
		var dataPoint;
		var total;
		const options = {
			theme: "light1",
			animationEnabled: true,
			colorSet: "customColorSet1",
			title:{
				text: "Feminicidios en México desde el 2015 hasta el 2019"
			},
			data: [{
				type: "funnel",
				indexLabel: "{label} - {y}",
				toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
				neckWidth: 20,
				neckHeight: 0,
				valueRepresents: "area",
				dataPoints: [
					{ y: 976, label: "2019 feminicidios" },
					{ y: 891, label: "2018 feminicidios" },
					{ y: 741, label: "2017 feminicidios" },
					{ y: 602, label: "2016 feminicidios" },
					{ y: 411, label: "2015 feminicidios" }
				]
			}]
		}
		//calculate percentage
		dataPoint = options.data[0].dataPoints;
		total = dataPoint[0].y;
		for(var i = 0; i < dataPoint.length; i++) {
			if(i == 0) {
				options.data[0].dataPoints[i].percentage = 100;
			} else {
				options.data[0].dataPoints[i].percentage = ((dataPoint[i].y / total) * 100).toFixed(2);
			}
		}
		
		return (
			<div className="chart-styles">
				<CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref}
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default AreaChart;  