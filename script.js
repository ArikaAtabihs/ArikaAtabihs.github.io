function logName() {
  //get value from input field and save as a
  var a = document.getElementById("name").value;
  //create local storage key with value of a
  localStorage.setItem("uName",a);
  //automatically take user to page two.html
  location.href = "two.html";
  
  //window.alert("Hello " + a);
  
  return
}


function alertName() {
  return
}
