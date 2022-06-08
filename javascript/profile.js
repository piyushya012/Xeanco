isValid = function (st){
  if(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(st)){
    return true;
  }
  return false;
}

login = function(){
  var form = document.getElementById("login");
  var email = "email"+form.elements["email"].value;
  var name = "name"+form.elements["email"].value;
  sessionStorage.setItem("userEmail", localStorage.getItem(email));
  sessionStorage.setItem("userName", localStorage.getItem(name));
  if (localStorage.getItem(email)){
    return;

  }
  else {
    if(isValid(form.elements["email"].value)){
      alert("It seems "+form.elements["email"].value+" is not registered at our website please signup or login with another account");
      form.action = "#";
    }
  }
}

signup = function(){
  var form = document.getElementById("signup");
  var email = "email"+form.elements["email"].value;
  var name = "name"+form.elements["email"].value;
  if (localStorage.getItem(email)){
    if(isValid(form.elements["email"].value)){
      alert("It seems "+form.elements["email"].value+" is already registered at our website please login to continue.");
      }
    }
  else{
    if(isValid(form.elements["email"].value)){
      alert("SignUp Successful. You can Login now.");
      localStorage.setItem(name, form.elements["name"].value);
      localStorage.setItem(email, form.elements["email"].value);
    }
  }
}
