var slideIndex = 1;
window.onscroll = function(){showNav()};
showNav = function(){
  document.getElementById("more").style.display = "none";
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
    document.getElementById("navBack").style.display = "block";
    document.getElementById("nav").className = "navScroll";
  }
  else{
    document.getElementById("navBack").style.display = "none";
    document.getElementById("nav").classList.remove("navScroll");
  }
}

update = function(){
  showSlides(slideIndex);
  document.getElementById("user").innerHTML = sessionStorage.getItem("userName");
  if((!(sessionStorage.getItem("visited"))) || (sessionStorage.getItem("userEmail") != sessionStorage.getItem("prevUser"))){
    swal({
      title: "Welcome "+sessionStorage.getItem("userName"),
      text: "We are pleased to be at your service",
      icon: "success",
      button: "Explore Now!"
    });
    sessionStorage.setItem("visited", 1);
    sessionStorage.setItem("prevUser", sessionStorage.getItem("userEmail"));
  }
}

leave = function(){
  swal({
    text: "Leave this page, You will be logged out",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function(n){
    if(n){
      window.location = "welcome.html";
    }
  })
}
more = function(n){
  var more = document.getElementById("more");
  if (n == 1){
    more.style.display = "block";
    return;
  }
  more.style.display = "none";
}
profile = function(){
  if (document.getElementById("profileNav").style.display == "block"){
    document.getElementById("profileNav").style.display = "none";
    return;
  }
  document.getElementById("profileNav").style.display = "block";
}
logout = function(){
  swal({
    title: "Logout",
    icon: "warning",
    buttons: true
  }).then(function(n){
    if(n){
      window.location = "welcome.html";
    }
  })
}
delAcc = function(){
  swal({
    title: "Are you Sure?",
    text: "Delete this Account",
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then(function(n){
    if(n){
      localStorage.removeItem("email"+sessionStorage.getItem("userEmail"));
      localStorage.removeItem("name"+sessionStorage.getItem("userNmae"));
      swal(
        'Deleted',
        'Account Deleted Successfully',
        'success').then(function(){
            window.location = "welcome.html";
        })
    }
  })
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
