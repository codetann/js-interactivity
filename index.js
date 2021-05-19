// DOM Selectors
const inputField = document.querySelector("input");
const form = document.querySelector("form");
const message = document.querySelector("#message");

// Functions
function addMovie(e) {
  e.preventDefault();

  const movie = document.createElement("li");
  const title = document.createElement("span");
  const deleteBtn = document.createElement("button");

  title.textContent = inputField.value;
  deleteBtn.textContent = "X";

  title.addEventListener("click", crossOfMovie);
  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(title);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);

  inputField.value = "";
}

function deleteMovie(e) {
  const title = e.target.parentNode.querySelector("span").textContent;
  message.textContent = `${title} Deleted!`;
  e.target.parentNode.remove();

  revealMessage();
}

function crossOfMovie(e) {
  e.target.classList.toggle("checked");

  if (e.target.classList.contains("checked")) {
    message.textContent = `${e.target.textContent} Watched!`;
  } else {
    message.textContent = `${e.target.textContent} Added Back`;
  }

  revealMessage();
}

function revealMessage() {
  message.classList.remove("hide");

  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
}

// Event Listeners
form.addEventListener("submit", addMovie);
