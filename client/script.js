
        const labels = [
          '9am',
          '10am',
          '11am',
          '12am',
          '1pm',
          '2pm',
          '3pm',
          '4pm',
          '5pm',
          '6pm',
          '7pm',
          '8pm',
          '9pm',
          '10pm',
          '11pm',
          '12am',
        ];
      
        const data = {
          labels: labels,
          datasets: [{
            label: 'Wages',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45,30,20,10,10,8,8],
          },
          {
            label: 'Earnings',
            backgroundColor: 'rgb(155, 99, 132)',
            borderColor: 'rgb(155, 99, 132)',
            data: [10, 12, 15, 12, 2, 3, 43],
          }]
        };
      
        const config = {
          type: 'line',
          data: data,
          options: {}
        };

        const myChart = new Chart(
          document.getElementById('myChart'),
          config
        );
profitLoss(2,12);

        function profitLoss (takings, wages) {
if (takings < wages) {
  var outline = document.getElementsByClassName('outerBorder');
  outline[0].style.borderColor = 'red';
  outline[0].style.boxShadow = '0 0 10px #ed9e9e';
  document.getElementById("PLp1").innerHTML = `Wages: $${wages}`;
  document.getElementById("PLp2").innerHTML = `Earnings: $${takings}`;
  document.getElementById("PLp3").innerHTML = `LOSS: $${takings-wages}`;
} else {
  var outline = document.getElementsByClassName('outerBorder');
  outline[0].style.borderColor = 'lime';
  outline[0].style.boxShadow = '0 0 10px #9eedaa';
  document.getElementById("PLp1").innerHTML = `Wages: $${wages}`;
  document.getElementById("PLp2").innerHTML = `Earnings: $${takings}`;
  document.getElementById("PLp3").innerHTML = `PROFIT: $${takings-wages}`;
}
        }