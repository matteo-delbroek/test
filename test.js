  // Functie om een taak toe te voegen
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  
  // Controleer of het invoerveld niet leeg is
  if (taskText) {
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    // Taak toevoegen aan de lijst
    li.textContent = taskText;

    // Verwijderknop toevoegen
    let removeButton = document.createElement("button");
    removeButton.textContent = "Verwijder";
    removeButton.classList.add("remove");
    removeButton.onclick = function() {
      li.remove();
    };

    // Voeg de knop toe aan de taak
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Maak het invoerveld leeg na toevoegen
    input.value = "";
  } else {
    alert("Voer een taak in!");
  }
}

// Functie om taak toe te voegen door op Enter te drukken
document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
