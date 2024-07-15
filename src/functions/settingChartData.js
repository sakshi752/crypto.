import convertDate from "./convertDate";

const settingChartData=(setChartData,prices)=>{
    setChartData({
        labels: prices.map(price => convertDate(price[0])),
        datasets: [
          {
            label: 'Price',
            data: prices.map(price => price[1]),
            borderColor: '#6d3791',
            backgroundColor: '#6d3791',
            fill: true,
            tension: 0.3,
            borderWidth: 2,
            pointRadius: 3
          }]
      });
}

export default settingChartData