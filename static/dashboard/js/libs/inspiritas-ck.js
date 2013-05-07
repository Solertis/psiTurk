/*
 * A highcharts spline graph, customized for a nicer look.
 *
 * All the options can be separated into a reusable object,
 * in order to create multiple charts with the same looks:
 * http://www.highcharts.com/documentation/how-to-use
 *
 * TODO: Design the tooltips when hovering items.
 */loadCharts = function() {
  new Highcharts.Chart({
    chart: {
      renderTo: "mainChart",
      defaultSeriesType: "spline",
      height: 250,
      plotBorderColor: "#e3e6e8",
      plotBorderWidth: 1,
      plotBorderRadius: 0,
      backgroundColor: "",
      spacingLeft: 0,
      plotBackgroundColor: "#FFFFFF",
      marginTop: 5,
      marginBottom: 35,
      zoomType: "x,y"
    },
    credits: {
      style: {
        color: "#9fa2a5"
      }
    },
    title: {
      text: ""
    },
    legend: {
      align: "left",
      floating: !0,
      verticalAlign: "top",
      borderWidth: 0,
      y: 3,
      x: 10,
      itemStyle: {
        fontSize: "11px",
        color: "#1E1E1E"
      }
    },
    yAxis: {
      title: {
        text: ""
      },
      gridLineColor: "#FAFAFA",
      opposite: !0,
      labels: {
        style: {
          color: "#9fa2a5"
        }
      }
    },
    xAxis: {
      type: "datetime",
      lineWidth: 0,
      maxZoom: 432e6,
      tickInterval: 864e5,
      labels: {
        formatter: function() {
          return Highcharts.dateFormat("%e", this.value);
        },
        x: 0,
        style: {
          color: "#9fa2a5"
        }
      }
    },
    plotOptions: {
      series: {
        marker: {
          lineWidth: 1,
          radius: 4
        },
        lineWidth: 3,
        shadow: !1
      }
    },
    colors: [ "#E35733", "#4c97d7", "#52d74c", "#e268de" ],
    series: [ {
      pointStart: Date.UTC(2012, 11, 3),
      pointInterval: 864e5,
      name: "Condition 1",
      marker: {
        symbol: "circle"
      },
      data: [ 4, 5, 8, 9, 10, 11, 10, 8, 7, 6, 9, 10, 13, 15, 16, 18, 15, 12, 10, 9, 8, 5, 8, 9, 10, 13, 15, 14 ]
    }, {
      pointStart: Date.UTC(2012, 11, 3),
      pointInterval: 864e5,
      name: "Condition 2",
      marker: {
        symbol: "circle"
      },
      data: [ 0, 2, 3, 4, 5, 3, 2, 2, 3, 4, 6, 7, 8, 9, 10, 8, 11, 7, 5, 3, 4, 4, 1, 3, 4, 5, 8, 10 ]
    } ]
  });
};