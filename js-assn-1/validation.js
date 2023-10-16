
let load = (event) => {
    document.getElementById("testName").style.visibility = "hidden";
    document.getElementById("testPh").style.visibility = "hidden";
    document.getElementById("testMail").style.visibility = "hidden";

  event.preventDefault();
  let form = document.getElementById("myForm");
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let pNum = document.getElementById("pNum").value;
  let eMail = document.getElementById("eMail").value;
  let password = document.getElementById("pass").value;

  let gender = document.getElementsByName("Gender");
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      var selected = gender[i].value;
      break;
    }
  }

  let fnameTest = /[a-z]{3,10}/;
  let pnTest = /[0-9]{10}/;
  let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fName.trim() == "" || !fnameTest.test(fName)) {
    document.getElementById("fName").focus();
    document.getElementById("testName").style.visibility = "visible";
    return false;
  } 
 else if (pNum.trim() == "" || !pnTest.test(pNum)) {
    document.getElementById("pNum").focus();
    document.getElementById("testPh").style.visibility = "visible";
    return false;
  } 


 else if (eMail.trim() == "" || !emailTest.test(eMail)) {
    document.getElementById("eMail").focus();
    document.getElementById("testMail").style.visibility = "visible";
    return false;
  } 

  else{

  let myObj = {
    FirstName: fName,
    LastName: lName,
    PhoneNumber: pNum,
    eMail: eMail,
    Password: password,
    Gender: selected,
  };

  localStorage.setItem("details",JSON.stringify(myObj))
  

  form.reset();
  alert("Thank You! You can see your details in local storage");
}
};
