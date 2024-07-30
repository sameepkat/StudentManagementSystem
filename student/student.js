/*querySelectors*/
//Buttons
const logoutButtonClicked = document.querySelector(".logout");
//Styles
const leftLogo = document.querySelector(".leftLogo");
const rightLogo = document.querySelector(".rightLogo");
const navBarLeft = document.querySelector(".navbarLeft");
const navbarRight = document.querySelector(".navbarRight");
/*variables*/
//state
let showingAddContainer = false;
let currentSelectedRow = null;
let addOrEdit = "add";
let currentlyDisplaying = null;
//functions
async function fetchData(table) {
  currentlyDisplaying = table;
  const url = "../php/studentFinal.php?table=" + table;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => {
      showMessage("Error fetching data: ", "pink");
    });
}
async function nameDisplayer() {
  const greeter = document.getElementById("greeter");
  const url = "../php/loggedInUser.php";
  console.log("Fetching: " + url);
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      signedInAs = data;
      greeter.textContent = data;
      console.log("Signed in as: ", signedInAs);
    });
}

function displayData(data) {
  signedInAs = "Sameep Kathayat";
  const dataDiv = document.querySelector(".mainContent");
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
    dataDiv.innerHTML = "<h1>No Data Found</h1>";
  }
}

async function pushStudentDetails() {
  const table = "studentInfo";
  const name = document.getElementById("name").value;
  const rollNo = document.getElementById("rollno").value; // Corrected id to 'rollNo'
  const examrollNo = document.getElementById("examrollno").value;
  const sex = document.getElementById("sex").value; // Get selected dropdown value
  const email = document.getElementById("email").value;
  const regno = document.getElementById("regno").value;
  const phone = document.getElementById("phone").value;

  if (addOrEdit == "add") {
    const url = `../php/studentDetails.php?method=post&table=${table}&roll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
    try {
      await fetch(url)
        .then((response) => {
          if (!response.ok || rollNo == "") {
            showMessage("Can't add record", "pink");
            return response.text();
          }
        })
        .then((data) => showMessage("Data Added successfully", "lightgreen"));
    } catch {
      showMessage("Error Adding data", "pink");
    }
  } else if (addOrEdit == "edit") {
    const url = `../php/studentDetails.php?method=put&table=${table}&oldroll=${currentSelectedRow.RollNo}&newroll=${rollNo}&name=${name}&roll=${rollNo}&examrollno=${examrollNo}&sex=${sex}&email=${email}&regno=${regno}&phone=${phone}`;
    console.log("URL: ", url);
    await fetch(url)
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
function showMessage(message, color) {
  const messageBox = document.getElementById("messageBox");
  messageBox.style.cssText = `display: flex; background-color: ${color};`;
  document.getElementById("messageText").textContent = "";
  document.getElementById("messageText").textContent = message;
  console.log(message);
  messageBox.classList.add("show");

  // Hide the message after 3 seconds
  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 1000);
}


//Logout Button
logoutButtonClicked.addEventListener("click", (e) => {
  window.location.href = "../php/logout.php";
});

leftLogo.addEventListener("click", (e) => {
  if (navBarLeft.style.display === "none") {
    navBarLeft.style.display = "flex";
  } else {
    navBarLeft.style.display = "none";
  }
});



window.onload = nameDisplayer;
fetchData("studentInfo");
