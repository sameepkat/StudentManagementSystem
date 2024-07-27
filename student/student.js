/*querySelectors*/
//Buttons
const addBtnClicked = document.getElementById("addBtn");
const editButtonClicked = document.getElementById("editBtn");
const delButtonClicked = document.getElementById("deleteBtn");
const submitAddButton = document.getElementById("submitAddBtn");
const logoutButtonClicked = document.querySelector(".logout");
//Styles
const containerAddBtn = document.querySelector(".container-addBtn");
/*variables*/
//state
let showingAddContainer = false;
let currentSelectedRow = null;
let addOrEdit = "add";
let currentlyDisplaying = null;
//functions
function fetchData(table) {
  currentlyDisplaying = table;
  const url = "../php/studentFinal.php?table=" + table;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.log("Error fetching data: ", error);
    });
}

function displayData(data) {
  const dataDiv = document.querySelector(".mainContent");
  dataDiv.innerHTML = "";
  if (data.length > 0) {
    console.log("Creating table");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

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

      table.appendChild(tr);
    });
    dataDiv.appendChild(table);
  } else {
    showMessage("Error Fetching", "pink");
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

  if (addOrEdit == "add") {
    console.log("adding");
    const url = `../php/studentDetails.php?method=post&table=${table}&roll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
    try {
      fetch(url)
        .then((response) => {
          if (!response.ok || rollNo === "") {
            return response.text().then((errorMessage) => {
              showMessage("Can't added record", "pink");
            });
          }
        })
        .then((data) => showMessage("Data Added successfully", "lightgreen"));
    } catch {
      showMessage("Error Adding data");
    }
    console.log(url);
  } else if (addOrEdit == "edit") {
    console.log("editing");
    console.log("New roll: ", rollNo);
    console.log("Old roll: ", currentSelectedRow.RollNo);
    const url = `../php/studentDetails.php?method=put&table=${table}&oldroll=${currentSelectedRow.RollNo}&newroll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
    console.log("URL: ", url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log("Error editing data");
        }
      })
      .then((data) => showMessage("Edited successfully", "lightgreen"));
   


  }
  containerAddBtn.style.display = "none";
  showingAddContainer = false;
  fetchData(currentlyDisplaying);

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
      fetchData(currentlyDisplaying);
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
      fetchData(currentlyDisplaying);
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
function deleteRow() {
  const table = "studentInfo";
  const url = `http://localhost/phpPractice/StudentManagementSystem/php/studentDetails.php?method=delete&table=${table}&roll=${currentSelectedRow.RollNo}&name=${currentSelectedRow.Name}`;
  console.log("URL: ", url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        showMessage("Error Deleting data", "pink");
      }
    })
    .then((data) => showMessage("Deleted Successfully", "lightgreen"));
  fetchData(currentlyDisplaying);
}

function showMessage(message, color) {
  const messageBox = document.getElementById("messageBox");
  messageBox.style.cssText = `display: flex; background-color: ${color};`;
  document.getElementById("messageText").textContent = message;
  messageBox.classList.add("show");

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 1000);
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
  console.log(currentSelectedRow);
  if (!currentSelectedRow) {
    showMessage("No Row Selected", "pink");
  } else {
    addOrEdit = "edit";
    editStudentInputBox(
      currentSelectedRow.Name,
      currentSelectedRow.RollNo,
      currentSelectedRow.ExamRollNo,
      currentSelectedRow.Email,
      currentSelectedRow.PuRegNo,
      currentSelectedRow.PhNo
    );
  }
});

//Delete Button
delButtonClicked.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!currentSelectedRow) {
    showMessage("No Row Selected", "pink");
  } else {
    deleteRow();
  fetchData(currentlyDisplaying);

  }
});

//Logout Button
logoutButtonClicked.addEventListener("click", (e) => {
  window.location.href = "../php/logout.php";
});

//AddButton Form Submission
document.addEventListener("DOMContentLoaded", () => {
  //submitAddButton
  submitAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    pushStudentDetails();
    console.log(currentlyDisplaying);
    fetchData(currentlyDisplaying);
  });
});

// Show the message on page load for demonstration purposes
// window.onload = showMessage;
fetchData("studentInfo");
// showMessage("Test", "pink");
