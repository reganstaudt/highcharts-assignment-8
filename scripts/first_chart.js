// code for a basic bar chart
// see https://www.highcharts.com/demo/bar-basic 

Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Cheeries', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Regan and Ryan\'s house'
      }
    },
    series: [{
      name: 'Ryan',
      data: [1, 0, 4, 2]
    }, {
      name: 'Regan',
      data: [5, 7, 3, 0]
    }]
  });
  
