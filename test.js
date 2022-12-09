var ctx = document.getElementById("chart1").getContext("2d");
var data = {
  labels: ["1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter"],
  datasets: [
    {
      label: "Inspection Score",
      data: [18, 25, 30, 45],
      backgroundColor: "rgba(75,192,192)",
      borderWidth: 1,
    },
    {
      label: "Swab Test",
      data: [25, 35, 45, 55],
      backgroundColor: "rgba(255, 99, 132)",
      borderWidth: 1,
    },
    {
      label: "Sample Test",
      data: [65, 60, 75, 70],
      backgroundColor: "rgba(255, 220, 199)",
      borderWidth: 1,
    },
  ],
};
var options = {
  responsive: true,
  title: {
    display: true,
    position: "top",
    text: "Inspection Comparison",
    fontSize: 18,
    fontColor: "black",
  },
  legend: {
    display: true,
    position: "top",
    labels: {
      fontColor: "#333",
      fontSize: 16,
    },
  },

  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
        },
      },
    ],
  },
};
var myLineChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});
