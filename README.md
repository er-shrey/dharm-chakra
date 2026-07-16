# Dharm Chakra (धर्मचक्र)

A browser-based educational spin-the-wheel game for kids, built with plain HTML/CSS/JS and
Chart.js (used as a spinning doughnut/pie chart). Spinning the wheel picks a random segment across
four rounds themed around basic Hindi learning: अंक ज्ञान (number knowledge), अक्षर ज्ञान (alphabet
knowledge), गिनती ज्ञान (counting knowledge), and चित्र ज्ञान (picture knowledge).

## Tech Stack

- HTML / CSS / vanilla JavaScript
- [Chart.js](https://www.chartjs.org/) + `chartjs-plugin-datalabels` (loaded via CDN, no local
  install needed)
- Font Awesome (via CDN, for the pointer icon)

## Prerequisites

- Just a modern web browser — no build tools, Node.js, or package manager required.

## Running It

Open `index.html` directly in a browser, or serve the folder locally:

```bash
git clone https://github.com/er-shrey/dharm-chakra.git
cd dharm-chakra
python3 -m http.server 8000
# then open http://localhost:8000
```

## Usage

- Use the round buttons (Round 1–4) to switch between the four themed wheels.
- Click **धर्मचक्र** (the spin button) to spin the wheel; the result is shown below the wheel.
