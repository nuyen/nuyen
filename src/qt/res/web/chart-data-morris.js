// First Chart Example - Area Line Chart

Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { d: '2012-10-01', hash: 802 },
    { d: '2012-10-02', hash: 783 },
    { d: '2012-10-03', hash:  820 },
    { d: '2012-10-04', hash: 839 },
    { d: '2012-10-05', hash: 792 },
    { d: '2012-10-06', hash: 859 },
    { d: '2012-10-07', hash: 790 },
    { d: '2012-10-08', hash: 1680 },
    { d: '2012-10-09', hash: 1592 },
    { d: '2012-10-10', hash: 1420 },
    { d: '2012-10-11', hash: 882 },
    { d: '2012-10-12', hash: 889 },
    { d: '2012-10-13', hash: 819 },
    { d: '2012-10-14', hash: 849 },
    { d: '2012-10-15', hash: 870 },
    { d: '2012-10-16', hash: 1063 },
    { d: '2012-10-17', hash: 1192 },
    { d: '2012-10-18', hash: 1224 },
    { d: '2012-10-19', hash: 1329 },
    { d: '2012-10-20', hash: 1329 },
    { d: '2012-10-21', hash: 1239 },
    { d: '2012-10-22', hash: 1190 },
    { d: '2012-10-23', hash: 1312 },
    { d: '2012-10-24', hash: 1293 },
    { d: '2012-10-25', hash: 1283 },
    { d: '2012-10-26', hash: 1248 },
    { d: '2012-10-27', hash: 1323 },
    { d: '2012-10-28', hash: 1390 },
    { d: '2012-10-29', hash: 1420 },
    { d: '2012-10-30', hash: 1529 },
    { d: '2012-10-31', hash: 1892 },
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['hash'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['hash'],
  // Disables line smoothing
  smooth: false,
});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "Referral", value: 42.7},
    {label: "Direct", value: 8.3},
    {label: "Social", value: 12.8},
    {label: "Organic", value: 36.2}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { d: '2012-10-01', hash: 802 },
    { d: '2012-10-02', hash: 783 },
    { d: '2012-10-03', hash:  820 },
    { d: '2012-10-04', hash: 839 },
    { d: '2012-10-05', hash: 792 },
    { d: '2012-10-06', hash: 859 },
    { d: '2012-10-07', hash: 790 },
    { d: '2012-10-08', hash: 1680 },
    { d: '2012-10-09', hash: 1592 },
    { d: '2012-10-10', hash: 1420 },
    { d: '2012-10-11', hash: 882 },
    { d: '2012-10-12', hash: 889 },
    { d: '2012-10-13', hash: 819 },
    { d: '2012-10-14', hash: 849 },
    { d: '2012-10-15', hash: 870 },
    { d: '2012-10-16', hash: 1063 },
    { d: '2012-10-17', hash: 1192 },
    { d: '2012-10-18', hash: 1224 },
    { d: '2012-10-19', hash: 1329 },
    { d: '2012-10-20', hash: 1329 },
    { d: '2012-10-21', hash: 1239 },
    { d: '2012-10-22', hash: 1190 },
    { d: '2012-10-23', hash: 1312 },
    { d: '2012-10-24', hash: 1293 },
    { d: '2012-10-25', hash: 1283 },
    { d: '2012-10-26', hash: 1248 },
    { d: '2012-10-27', hash: 1323 },
    { d: '2012-10-28', hash: 1390 },
    { d: '2012-10-29', hash: 1420 },
    { d: '2012-10-30', hash: 1529 },
    { d: '2012-10-31', hash: 1892 },
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['hash'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['hash'],
  // Disables line smoothing
  smooth: false,
});

Morris.Bar ({
  element: 'morris-chart-bar',
  data: [
	{device: 'iPhone', geekbench: 136},
	{device: 'iPhone 3G', geekbench: 137},
	{device: 'iPhone 3GS', geekbench: 275},
	{device: 'iPhone 4', geekbench: 380},
	{device: 'iPhone 4S', geekbench: 655},
	{device: 'iPhone 5', geekbench: 1571}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Geekbench'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});
