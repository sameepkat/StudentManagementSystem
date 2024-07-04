function fetchData(table) {
  fetch("../php/studentFinal.php?table=" + table)
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      alert("Error fetching data: ", error);
    });
}
function displayData(data) {
  const dataDiv = document.getElementById("mainContent");
  dataDiv.innerHTML = "";
  if (data.length > 0) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.style.cssText = "border: 1px solid black";
      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.style.cssText = "border: 1px solid black";
        td.textContent = value;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    dataDiv.appendChild(table);
    table.style.cssText = "border: 1px solid black; border-collapse: collapse;";
  } else {
    alert("No data found");
  }
}
