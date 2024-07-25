/*querySelectors*/
//Buttons
const addBtnClicked = document.getElementById("addBtn");
const submitAddButton = document.getElementById("submitAddBtn");
//Styles
const containerAddBtn = document.querySelector(".container-addBtn");
/*variables*/
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
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // data.forEach((row) => {
    //   const tr = document.createElement("tr");
    //   Object.values(row).forEach((value) => {
    //     const td = document.createElement("td");
    //     td.textContent = value;
    //     tr.appendChild(td);
    //   });
//Added clickable
data.forEach((row, index)=>{
  const tr = document.createElement("tr");
  tr.style.cursor = "pointer";
  tr.dataset.index = index;

Object.values(row).forEach((value)=>{
  const td = document.createElement("td");
  td.textContent = value;
  tr.appendChild(td);
});
tr.addEventListener('click', ()=>{
  console.log('clicked row data: ', data[tr.dataset.index]);
})

//End of added clickable
      table.appendChild(tr);
    });
    dataDiv.appendChild(table);
    // const evenRows = document.querySelectorAll('tr:nth-child(even)');
    // evenRows.forEach(row=>row.style.cssText+='background-color: rgba(164,164,164,0.25);;');
  } else {
    console.log("No data found");
    dataDiv.innerHTML = "<h1>No Data Found</h1>";
  }
}
function pushStudentDetails() {
  const table = "studentInfo";
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value; // Corrected id to 'Address'
  const rollNo = document.getElementById("rollno").value;
  const sex = document.getElementById("sex").value; // Get selected dropdown value
  const email = document.getElementById("email").value;
  const regno = document.getElementById("regno").value;
  const phone = document.getElementById("phone").value;

  const url = `../php/studentDetails.php?table=${table}&roll=${rollNo}&name=${name}&address=${address}&rollno=${rollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
  const result = fetch(url)
  .then(response => {
    if(!response.ok)
    {
      throw new Error('Record for that roll exists');
  }
  })
  .then((data)=>
    console.log("Works")
);
}

//Event Listeners
addBtnClicked.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!showingAddContainer) {
    containerAddBtn.style.display = "block";
    showingAddContainer = true;
  } else {
    containerAddBtn.style.display = "none";
    showingAddContainer = false;
  }
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      containerAddBtn.style.display = "none";
      showingAddContainer = false;
    }
    if (e.key == "Enter") {
      e.preventDefault();
      pushStudentDetails();
    }
  });
  document.addEventListener("click", (e) => {
    if (!containerAddBtn.contains(e.target)) {
      containerAddBtn.style.display = "none";
      showingAddContainer = false;
    }
  });
});
//AddButton Form Submission
document.addEventListener("DOMContentLoaded", () => {
  submitAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    pushStudentDetails();
  });
});
