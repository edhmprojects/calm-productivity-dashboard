// list of quotes for random quote generator
const quotes = [
  "You can do this.",
  "Do it for yourself.",
  "If you keep showing up, you'll keep moving forward.",
  "Consistency doesn't always look consistent.",
  "The doors of opportunity stay open unless you stop knocking.",
  "Take care of your health, the rest will follow.",
  "A step backwards is still progress.",
];
// function to generate a random quote from the array
function getRandomQuote() {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];
}
// function to display quote on the page
function displayQuote() {
  const quotePanel = document.querySelector("#quote p");
  quotePanel.textContent = getRandomQuote();
}

displayQuote();
