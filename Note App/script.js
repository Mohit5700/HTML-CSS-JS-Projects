"use strict"; // Enforces strict mode to catch common coding errors

// Selects the container for notes and the button element
const notesContainerEl = document.querySelector(".notes-container");
const btnEl = document.querySelector(".btn");

// Retrieves notes from local storage and creates note elements for each
getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  notesContainerEl.insertBefore(noteEl, btnEl);
});

// Function to get notes from local storage
function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// Function to save notes to local storage
function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

// Function to delete a note by id and remove its element from the DOM
function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNote(notes);
  notesContainerEl.removeChild(element);
}

// Function to update the content of a note by id and save the changes
function updateNote(id, content) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];
  targetNote.content = content;
  saveNote(notes);
}

// Function to create a note element with event listeners for deletion and updating
function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  // Event listener for double-click to delete the note
  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) deleteNote(id, element);
  });

  // Event listener for input to update the note content
  element.addEventListener("input", () => updateNote(id, element.value));

  return element;
}

// Function to add a new note, create its element, and save it to local storage
function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  notesContainerEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);

  saveNote(notes);
}

// Event listener for the button to add a new note
btnEl.addEventListener("click", addNote);
