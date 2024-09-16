const title = document.getElementById("title");
const note = document.getElementById("note");
const list = document.getElementById("notes");

const button = document.getElementById("add-note");
button.addEventListener("click", function () {
  const item = document.createElement("li");

  const noteTitle = document.createElement("h2");
  const noteText = document.createElement("p");
  const noteButton = document.createElement("button");

  noteTitle.textContent = title.value;
  noteText.textContent = note.value;
  noteButton.textContent = "x";

  title.value = "";
  note.value = "";
  noteButton.addEventListener("click", function () {
    list.removeChild(item);
  });

  item.appendChild(noteTitle);
  item.appendChild(noteText);
  item.appendChild(noteButton);

  list.appendChild(item);
});
