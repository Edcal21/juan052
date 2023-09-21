// Create Temperature Gauge
function createTemperatureGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperatu',
        width: 50,
        height: 200,
        units: "Temperature C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 40,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 30,
                "to": 40,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 0,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}

// Create Humidity Gauge
function createHumidityGauge(){
    var gauge = new RadialGauge({

        renderTo: 'gauge-humidity',
        width: 200,
        height: 200,
        units: "V",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        valueBox:true,
        maxValue: 200,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            
            "40",
            
            "80",
            
            "120",
            
            "160",
            
            "200",
            
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 120,
                "to": 200,
                "color": "#03C0C1"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 5,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1000,
        animationRule: "linear"
    });
    return gauge;
}



function currentGauge(){
    var gauge = new RadialGauge({

        renderTo: 'gauge-temperature',
        width: 200,
        height: 200,
        units: "A",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        valueBox:true,
        maxValue: 10,
        colorValueBoxRect: "#DB4F7B",
        colorValueBoxRectEnd: "#DB4F7B",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            
            "2",
            
            "4",
            
            "6",
            "8",
            "10",
            

        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 8,
                "to": 10,
                "color": "#DB4F7B"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#DB4F7B",
        colorNeedleEnd: "#DB4F7B",
        needleWidth: 2,
        needleCircleSize: 5,
        colorNeedleCircleOuter: "#DB4F7B",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 500,
        animationRule: "linear"
    });
    return gauge;
}