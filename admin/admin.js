/*querySelectors*/
//Buttons
const addBtnClicked = document.getElementById("addBtn");
const editButtonClicked = document.getElementById("editBtn");
const delButtonClicked = document.getElementById("delBtn");
const submitAddButton = document.getElementById("submitAddBtn");
//Styles
const containerAddBtn = document.querySelector(".container-addBtn");
/*variables*/
//state
let showingAddContainer = false;
let currentSelectedRow = null;
let addOrEdit = "add";

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
    data.forEach((row, index) => {
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.dataset.index = index;

      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });
      tr.addEventListener("click", () => {
        table
          .querySelectorAll("tr")
          .forEach((row) => row.classList.remove("selected-row"));
        tr.classList.add("selected-row");
        console.log("clicked row data: ", data[tr.dataset.index]);
        currentSelectedRow = data[tr.dataset.index];
      });

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
  const rollNo = document.getElementById("rollno").value; // Corrected id to 'rollNo'
  const examrollNo = document.getElementById("examrollno").value;
  const sex = document.getElementById("sex").value; // Get selected dropdown value
  const email = document.getElementById("email").value;
  const regno = document.getElementById("regno").value;
  const phone = document.getElementById("phone").value;

  if(addOrEdit == "add"){
  console.log("adding");
  const url = `http://localhost/phpPractice/StudentManagementSystem/php/studentDetails.php?method=post&table=${table}&roll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log("Record for that roll exists");
      }
    })
    .then((data) => console.log("Added: "+data));
    console.log(url);
}else if(addOrEdit == "edit"){
  console.log("editing");
  console.log("New roll: ",rollNo);
  console.log("Old roll: ",currentSelectedRow.RollNo);
  const url = `../php/studentDetails.php?method=put&table=${table}&oldroll=${currentSelectedRow.RollNo}&newroll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
  console.log("URL: ", url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log("Error editing data");
      }
    })
    .then((data) => console.log("Edited: "));
}
}
function addStudentInputBox() {
  if (!showingAddContainer) {
    containerAddBtn.style.display = "block";
    showingAddContainer = true;
  } else {
    containerAddBtn.style.display = "none";
    showingAddContainer = false;
  }
  document.getElementById("name").value = "";
  document.getElementById("rollno").value = "";
  document.getElementById("examrollno").value = "";
  document.getElementById("email").value = "";
  document.getElementById("regno").value = "";
  document.getElementById("phone").value = "";
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
}
function editStudentInputBox(
  name = "",
  rollNo = "",
  examRollNo = "",
  email = "",
  regNo = "",
  phone = ""
) {
  // e.stopPropagation();
  if (!showingAddContainer) {
    containerAddBtn.style.display = "block";
  addOrEdit = "edit";
  showingAddContainer = true;
  } else {
    containerAddBtn.style.display = "none";
  addOrEdit = "add";
  showingAddContainer = false;
  }
  //fill details
  document.getElementById("name").value = name;
  document.getElementById("rollno").value = rollNo;
  document.getElementById("examrollno").value = examRollNo;
  document.getElementById("email").value = email;
  document.getElementById("regno").value = regNo;
  document.getElementById("phone").value = phone;
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      containerAddBtn.style.display = "none";
      showingAddContainer = false;
  addOrEdit = "add";
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
  addOrEdit = "add";
}
  });
}
/*Event Listeners*/
//addButton
addBtnClicked.addEventListener("click", (e) => {
  addOrEdit = "add";
  e.stopPropagation();
  addStudentInputBox();

});

//editButton
editButtonClicked.addEventListener("click", (e) => {
  e.stopPropagation();
  addOrEdit = "edit";
  editStudentInputBox(
    currentSelectedRow.Name,
    currentSelectedRow.RollNo,
    currentSelectedRow.ExamRollNo,
    currentSelectedRow.Email,
    currentSelectedRow.PuRegNo,
    currentSelectedRow.PhNo
  );
});

//AddButton Form Submission
document.addEventListener("DOMContentLoaded", () => {
  //submitAddButton
  submitAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    pushStudentDetails();
  });
});

fetchData("studentInfo");