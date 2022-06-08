form = function(n){
  var form = "";
  if (!n){
    form = document.getElementById("loginCont");
  }
  else{
    form = document.getElementById("signupCont");
  }
  if(form.style.display != "block"){
    form.style.display = "block";
  }
  else{
    form.style.display = "none";
  }
}
