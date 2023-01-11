const inputData = document.getElementById("input-data"); //To pick the value from text field
const saveBtn = document.getElementById("save-btn"); //To save the value of save button
const resetBtn = document.getElementById("reset-btn"); //To save the value of reset button
const deleteBtn = document.getElementById("delete-btn"); //To save the value of Delete button
const ulItem = document.getElementById("ul-item"); //To pick the value of unorder list item

let inputDataArray = []; //Declare an empty array to store the input value

//store the local storage value in variable when page is refresh
let localSI = JSON.parse(localStorage.getItem("inputDataArray"));

// Work on Save button to save the items
saveBtn.addEventListener("click", function () {
  let listItems = "";
  if (inputData.value) {
    inputDataArray.push(inputData.value);

    // Save the items in local storage
    localStorage.setItem("inputDataArray", JSON.stringify(inputDataArray));

    for (let i = 0; i < inputDataArray.length; i++) {
      listItems += "<li>" + inputDataArray[i] + "</li>";
    }
    ulItem.innerHTML = listItems;
    clearAllItem();
  }
});

// Work on Delete button to delete all the items from local storage
deleteBtn.addEventListener("click", function () {
  ulItem.innerHTML = "";
  inputDataArray = [];
  localStorage.clear();
});

// Work on reset button to clear the items
resetBtn.addEventListener("click", function () {
  clearAllItem();
});

// Make the function to clear the input field
function clearAllItem() {
  inputData.value = "";
}
