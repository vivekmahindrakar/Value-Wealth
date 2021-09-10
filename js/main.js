function myFunction(x) {
    x.classList.toggle("change");
    if(document.getElementsByClassName("nav-bar")[0].style.display=="block")
    document.getElementsByClassName("nav-bar")[0].style.display="none";
    else
    document.getElementsByClassName("nav-bar")[0].style.display="block";
    
  }