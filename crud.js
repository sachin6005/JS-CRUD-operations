var selectedRow = null

function onFormSubmit(){
var formData = readFormData();
    if(selectedRow == null)
    insertNewForm(formData);
    else
    updateRecord(formData);
    resetForm();
    if (readFormData == " "){
        alert ('please enter something')
    }
}


function readFormData(){
var formData = {};
formData["fullName"] = document.getElementById("fullname").value;
formData["mobileNumber"] = document.getElementById("m-number").value;
formData["city"] = document.getElementById("city").value;
return formData;
}

function insertNewForm(Data){
var table = document.getElementById("p-list").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = Data.fullName;
cell2 = newRow.insertCell(1);
cell2.innerHTML = Data.mobileNumber;
cell3 = newRow.insertCell(2);
cell3.innerHTML = Data.city;
cell4 = newRow.insertCell(3);
cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
 <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
document.getElementById("fullname").value = "";
document.getElementById("m-number").value = "";
document.getElementById("city").value = "";
selectedRow = null;
}
function onEdit(td){
selectedRow = td.parentElement.parentElement;
document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
document.getElementById("m-number").value = selectedRow.cells[1].innerHTML;
document.getElementById("city").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
selectedRow.cells[0].innerHTML = formData.fullName;
selectedRow.cells[1].innerHTML = formData.mobileNumber;
selectedRow.cells[2].innerHTML = formData.city;
}
function onDelete(td){
if (confirm('Are you sure to delete this record ?')){
row = td.parentElement.parentElement;
document.getElementById("p-list").deleteRow(row.rowIndex)
resetForm();

}
}