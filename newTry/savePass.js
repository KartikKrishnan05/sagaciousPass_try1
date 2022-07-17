//localStorage.removeItem('name');
function speichern(){
    var url = document.getElementById(url);
    var pw = document.getElementById(pw);
    localStorage.setItem(url, pw);
    console.log(localStorage.getItem(url)); 
}



document.getElementById("saveButton").addEventListener("click", speichern);