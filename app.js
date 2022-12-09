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

var footerLine1 = ["Negative", "Positive", "Negative", "Positive"];
var footerLine2 = ["1", "2", "3", "4"];

const inspectionScoreLabel = data.datasets.map((data) =>
  data.label === "Inspection Score" ? true : false
);
const swabTestLabel = data.datasets.map((data) =>
  data.label === "Swab Test" ? true : false
);
const sampleTestLabel = data.datasets.map((data) =>
  data.label === "Sample Test" ? true : false
);

console.log(
  "inspectionScoreLabel:",
  inspectionScoreLabel,
  "swabTestLabel:",
  swabTestLabel,
  "sampleTestLabel:",
  sampleTestLabel
);

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

  tooltips: {
    enabled: true,
    mode: "single",
    // mode: "index",
    callbacks: {
      afterBody: function (tooltipItems, data) {
        var multistringText = [];
        console.log("tooltipItems", tooltipItems);
        console.log("data", data);
        if (tooltipItems[0].datasetIndex == 0) {
          multistringText.push(" ");
          multistringText.push(`1. Total Score: ${120}`);
          multistringText.push("2. Risk Type: High");
          multistringText.push("3. Grade: A+");
          multistringText.push("4. Status: Pending");
        }
        if (tooltipItems[0].datasetIndex == 1) {
          multistringText.push(" ");
          multistringText.push("Swab Test: Pending");
        }
        if (tooltipItems[0].datasetIndex == 2) {
          multistringText.push(" ");
          multistringText.push("Sample Code: 65465");
          multistringText.push("Sample Food: Burger");
        }
        return multistringText;
      },
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
