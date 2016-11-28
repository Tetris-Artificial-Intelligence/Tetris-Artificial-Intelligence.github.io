function chartDisplay(id, heading){
  this.dps = [];

  this.chart = new CanvasJS.Chart(id,{
    title :{
      text: heading
    },
    data: [{
      type: "line",
      dataPoints: this.dps
    }]
  });

  this.xVal = 0;
  this.yVal = 5;
  this.updateInterval = 100;
  this.dataLength = 50; // number of dataPoints visible at any point


  // generates first set of dataPoints
  this.updateChart(this.dataLength);
  var self = this;

  // update chart after specified time.
  //setInterval(function(){self.updateChart()}, this.updateInterval);
};

chartDisplay.prototype.updateChart = function (count) {
  count = count || 1;
  for (var j = 0; j < count; j++) {
    this.yVal = this.yVal +  Math.round(5 + Math.random() *(-5-5));
    this.dps.push({
      x: this.xVal,
      y: this.yVal
    });
    this.xVal++;
  };
  if (this.dps.length > this.dataLength) this.dps.shift();
  this.chart.render();
};

chartDisplay.prototype.insertValue = function (value) {
  this.yVal = this.yVal +  Math.round(5 + Math.random() *(-5-5));
  this.dps.push({
    x: this.xVal,
    y: value
  });
  this.xVal++;

  if (this.dps.length > this.dataLength) this.dps.shift();
  this.chart.render();
}
var a;
var b;
var c;
var d;
window.onload = function () {
  a = new chartDisplay("chartContainer","Aggregate Height");
  b = new chartDisplay("chartContainer1","Completed Lines");
  c = new chartDisplay("chartContainer2","Holes");
  d = new chartDisplay("chartContainer3","Bumpiness");
  //var c = new chartDisplay();
}
