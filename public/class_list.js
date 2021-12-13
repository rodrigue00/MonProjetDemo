const classList = document.getElementById("classList");

function populateTable(classes) {
  const classRows = classes.map((c) => {
    const row = document.createElement("tr");

    const nameCol = document.createElement("td");
    const nameTxt = document.createTextNode(c.shortName);
    nameCol.appendChild(nameTxt);
    row.appendChild(nameCol);

    const euCol = document.createElement("td");
    const euTxt = document.createTextNode(c.educationUnit.name);
    euCol.appendChild(euTxt);
    row.appendChild(euCol);

    const teacherCol = document.createElement("td");
    const teacherTxt = document.createTextNode(
      [c.teacher.firstName, c.teacher.lastName].join(" ")
    );
    teacherCol.appendChild(teacherTxt);
    row.appendChild(teacherCol);

    return row;
  });
  const tableBody = classList.querySelector("tbody");
  tableBody.replaceChildren(...classRows);
}

fetch("/classes/")
  .then((response) => response.json())
  .then((classes) => populateTable(classes));