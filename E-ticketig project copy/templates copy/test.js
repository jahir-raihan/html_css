function hello(){
    var data = [
    {
      x: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
      y: [3400090, 4450003, 4343433, 4544545, 5657565, 3434343, 5656475, 4354466, 4545343, 3434434, 2424242],
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('myDiv', data);
}

hello()

  