/*querySelectors*/
//Buttons
const addBtnClicked = document.getElementById('addBtn');

//Styles
const containerAddBtn = document.querySelector('.container-addBtn');
/*variables*/
//styles
const blackBorder = "border: 1px solid black;";
//state
let showingAddContainer = false;

//functions
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
  console.log(data);
  const dataDiv = document.getElementById("mainContent");
  dataDiv.innerHTML = "";
  if (data.length > 0) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.style.cssText = blackBorder;
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.style.cssText = `${blackBorder}`;
      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.style.cssText = blackBorder;
        td.textContent = value;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    dataDiv.appendChild(table);
    table.style.cssText = `${blackBorder} border-collapse: collapse;
    `;
    const evenRows = document.querySelectorAll('tr:nth-child(even)');
    evenRows.forEach(row=>row.style.cssText+='background-color: rgba(164,164,164,0.25);;');

  } else {
    console.log("No data found");
    dataDiv.innerHTML = "<h1>No Data Found</h1>";
  }
}


//Event Listeners
addBtnClicked.addEventListener('click',(e)=>{
  e.stopPropagation();
  if(!showingAddContainer){
    containerAddBtn.style.display = 'block';
    showingAddContainer = true;
  }
  else{
    containerAddBtn.style.display = 'none';
    showingAddContainer = false;
  }
  document.addEventListener('click',(e)=>{
    if(!containerAddBtn.contains(e.target)){
      containerAddBtn.style.display = 'none';
    }
  })
});