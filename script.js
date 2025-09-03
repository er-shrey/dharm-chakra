/* --------------- Spin Wheel  --------------------- */
const spinWheel = document.getElementById("spinWheel");
const spinBtn = document.getElementById("spin_btn");
const text = document.getElementById("text");
/* --------------- Minimum And Maximum Angle For A value  --------------------- */
var spinValues = [
  { minDegree: 61, maxDegree: 90, value: 100 },
  { minDegree: 31, maxDegree: 60, value: 200 },
  { minDegree: 0, maxDegree: 30, value: 300 },
  { minDegree: 331, maxDegree: 360, value: 400 },
  { minDegree: 301, maxDegree: 330, value: 500 },
  { minDegree: 271, maxDegree: 300, value: 600 },
  { minDegree: 241, maxDegree: 270, value: 700 },
  { minDegree: 211, maxDegree: 240, value: 800 },
  { minDegree: 181, maxDegree: 210, value: 900 },
  { minDegree: 151, maxDegree: 180, value: 1000 },
  { minDegree: 121, maxDegree: 150, value: 1100 },
  { minDegree: 91, maxDegree: 120, value: 1200 },
];
var lables = ["shey", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
/* --------------- Size Of Each Piece  --------------------- */
const size = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
/* --------------- Background Colors  --------------------- */
var spinColors = [
  "#E74C3C",
  "#7D3C98",
  "#2E86C1",
  "#138D75",
  "#F1C40F",
  "#D35400",
  "#138D75",
  "#F1C40F",
  "#b163da",
  "#E74C3C",
  "#7D3C98",
  "#138D75",
];
/* --------------- Chart --------------------- */
/* --------------- Guide : https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html --------------------- */
let spinChart = new Chart(spinWheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: lables,
    datasets: [
      {
        backgroundColor: spinColors,
        data: size,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        rotation: 90,
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
/* --------------- Display Value Based On The Angle --------------------- */
const generateValue = () => {
  // Chart.js rotation is in degrees, 0 is at the right, increases clockwise.
  // The top center is at 270 degrees.
  let rotation = spinChart.options.rotation % 360;
  let topAngle = (90 - rotation + 360) % 360;

  for (let i of spinValues) {
    if (topAngle >= i.minDegree && topAngle <= i.maxDegree) {
      text.innerHTML = `<p>${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};
/* --------------- Spinning Code --------------------- */
let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  text.innerHTML = ``;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let rotationInterval = window.setInterval(() => {
    spinChart.options.rotation = spinChart.options.rotation + resultValue;
    spinChart.update();
    if (spinChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      spinChart.options.rotation = 0;
    } else if (count > 15 && spinChart.options.rotation == randomDegree) {
      generateValue();
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
/* --------------- End Spin Wheel  --------------------- */

// ...existing code...

// Get round buttons
const roundButtons = document.querySelectorAll(".round-buttons button");

const roundData = [
  // Round 1: 6 values
  {
    spinValues: [
      { minDegree: 0, maxDegree: 59, value: "जय जिनेन्द्र" },
      { minDegree: 60, maxDegree: 119, value: "तीर्थ/तीर्थंकर ज्ञान" },
      { minDegree: 120, maxDegree: 179, value: "णमोकार ज्ञान" },
      { minDegree: 180, maxDegree: 239, value: "पूजा एवं पर्व ज्ञान" },
      { minDegree: 240, maxDegree: 299, value: "स्तोत्र ज्ञान" },
      { minDegree: 300, maxDegree: 359, value: "सामान्य धर्म ज्ञान" },
    ],
    lables: [
      "जय जिनेन्द्र",
      "तीर्थ/तीर्थंकर ज्ञान",
      "णमोकार ज्ञान",
      "पूजा एवं पर्व ज्ञान",
      "स्तोत्र ज्ञान",
      "सामान्य धर्म ज्ञान",
    ],
    spinColors: [
      "#E74C3C",
      "#7D3C98",
      "#2E86C1",
      "#138D75",
      "#F1C40F",
      "#D35400",
    ],
  },
  // Round 2: 5 values
  {
    spinValues: [
      { minDegree: 0, maxDegree: 71, value: "ई" },
      { minDegree: 72, maxDegree: 143, value: "स" },
      { minDegree: 144, maxDegree: 215, value: "द" },
      { minDegree: 216, maxDegree: 287, value: "त" },
      { minDegree: 288, maxDegree: 359, value: "प" },
    ],
    lables: ["ई", "स", "द", "त", "प"],
    spinColors: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"],
  },
  // Round 3: 6 values
  {
    spinValues: [
      { minDegree: 0, maxDegree: 59, value: "4 - 4" },
      { minDegree: 60, maxDegree: 119, value: "8 - 5" },
      { minDegree: 120, maxDegree: 179, value: "12 - 2" },
      { minDegree: 180, maxDegree: 239, value: "7 - 3" },
      { minDegree: 240, maxDegree: 299, value: "16 - 2" },
      { minDegree: 300, maxDegree: 359, value: "5 - 4" },
    ],
    lables: ["4 - 4", "8 - 5", "12 - 2", "7 - 3", "5 - 6"],
    spinColors: [
      "#2ECC71",
      "#E74C3C",
      "#3498DB",
      "#F39C12",
      "#1ABC9C",
      "#9B59B6",
    ],
  },
  // Round 4: 10 values
  {
    spinValues: [
      { minDegree: 0, maxDegree: 35, value: "1" },
      { minDegree: 36, maxDegree: 71, value: "2" },
      { minDegree: 72, maxDegree: 107, value: "3" },
      { minDegree: 108, maxDegree: 143, value: "4" },
      { minDegree: 144, maxDegree: 179, value: "5" },
      { minDegree: 180, maxDegree: 215, value: "6" },
      { minDegree: 216, maxDegree: 251, value: "7" },
      { minDegree: 252, maxDegree: 287, value: "8" },
      { minDegree: 288, maxDegree: 323, value: "9" },
      { minDegree: 324, maxDegree: 359, value: "10" },
    ],
    lables: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    spinColors: [
      "#8E44AD",
      "#3498DB",
      "#F39C12",
      "#E67E22",
      "#16A085",
      "#C0392B",
      "#2980B9",
      "#27AE60",
      "#F1C40F",
      "#7F8C8D",
    ],
  },
];

// ...existing code...

// Helper to update chart and variables
// ...existing code...

function updateRound(roundIndex) {
  spinValues = roundData[roundIndex].spinValues;
  lables = roundData[roundIndex].lables;
  spinColors = roundData[roundIndex].spinColors;

  // Update chart data
  spinChart.data.labels = lables;
  spinChart.data.datasets[0].backgroundColor = spinColors;
  spinChart.data.datasets[0].data = Array(lables.length).fill(10);
  spinChart.update();

  const roundNames = ["अंक ज्ञान", "अक्षर ज्ञान", "गिनती ज्ञान", "चित्र ज्ञान"];

  // Update round display
  document.getElementById("current-round").textContent = roundNames[roundIndex];

  // Reset text
  text.innerHTML = "";
}

// ...existing code...

// Add event listeners to each button
roundButtons.forEach((btn, idx) => {
  btn.addEventListener("click", () => updateRound(idx));
});

updateRound(0);

// ...existing code...
