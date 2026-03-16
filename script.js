// QUOTE GENERATOR
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
// update quote every 3 minutes
setInterval(displayQuote, 180000);

// TO-DO LIST
const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  todoList.appendChild(li);
  todoInput.value = "";
}
addTodoButton.addEventListener("click", addTodo);
