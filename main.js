function checkValidation() {
  if(checkBirthDate()&&checkFirstLatter()&&checkPrivateName&&checkLastName&&checkPasswords&&checkPhone){
    return true
  }
  return false
}




// 1
function checkPrivateName() {

  var reg = /^(?=.*[A-Za-z])/;

  if(reg.test(firstName.value)){
    return true
  }
  return false
}


function checkFirstLatter() {
  if(firstName.value==firstName.value.toUpperCase()){
    return true
  }
  return false
}


// 2
function checkLastName() {

  var reg =/^(?=.*[A-Za-z])/;

  if(reg.test(lastName.value)){
    alert("true")
    console.log(lastName);
    return true
  }

  console.log(lastName);
  alert("no")
  return false

}



function checkPasswords() {

  var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})/;

  if(pass1.value==pass2.value){
    if(strongRegex.test(pass2.value)){
      alert("true")
      return true
    }

    alert("password too weak, try again and add symbols.")
    return false
  }

  alert("password do not match.")
  return false
}



function checkPhone() {

  var phoneRegex = /^\d{10}/;

  if(phoneRegex.test(phone.value)){
    return true
  }

  return false
}


function checkBirthDate() {
var nowDate = new Date().getFullYear();
var userAge=parseInt(age.value.substr(0,4));
if(nowDate - userAge > 18){
  return true
}
return false
}