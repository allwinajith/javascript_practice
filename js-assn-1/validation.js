let load = (event) =>{
    event.preventDefault()
let form = document.getElementById('myForm')
let fName = document.getElementById('fName').value;
let lName = document.getElementById('lName').value;
let pNum = document.getElementById('pNum').value;
let eMail = document.getElementById('eMail').value;
let password = document.getElementById('pass').value;

let  gender = document.getElementsByName('Gender')
for(var i=0;i<gender.length;i++){

    if(gender[i].checked){
        var selected = gender[i].value
        break;
    }
}


let myObj = {
    fName : fName,
    lName : lName,
    pNum : pNum,
    eMail : eMail,
    password:password,
    gender:selected
}

console.log(myObj)

form.reset();
}
