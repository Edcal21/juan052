// Create the charts when the web page loads
window.addEventListener('load', onload);

function onload(event) {
  chartT = createTemperatureChart();
  chartH = createHumidityChart();
  chartP = createPressureChart();
}


function Lanuza() {
  var gauge = new Highcharts.Chart({

    chart: {
      renderTo: 'lanuza',
      type: 'solidgauge'
    },

    title: null,

    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },

    exporting: {
      enabled: false
    },

    tooltip: {
      enabled: false
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'] // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
        y: -70
      },
      labels: {
        y: 16
      }
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }

  });
  return gauge
}

// Create Temperature Chart
function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-temperature',
      type: 'spline'
    },
    series: [
      {
        name: 'BME280'
      }
    ],
    title: {
      text: undefined
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: {
        text: 'Current'
      }
    },
    credits: {
      enabled: false
    }
  });
  return chart;
}

// Create Humidity Chart
function createHumidityChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-humidity',
      type: 'spline'
    },
    series: [{
      name: 'BME280'
    }],
    title: {
      text: undefined
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        color: '#50b8b4'
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: {
        text: 'voltaje'
      }
    },
    credits: {
      enabled: false
    }
  });
  return chart;
}

// Create Pressure Chart
function createPressureChart() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-pressure',
      type: 'spline'
    },
    series: [{
      name: 'KWH'
    }],
    title: {
      text: undefined
    },
    plotOptions: {
      line: {
        animation: false,
        dataLabels: {
          enabled: true
        }
      },
      series: {
        color: '#A62639'
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: {
        text: 'Pressure (hPa)'
      }
    },
    credits: {
      enabled: false
    }
  });
  return chart;
}