function myFunction(x) {
    x.classList.toggle("change");
    if(document.getElementsByClassName("nav-bar")[0].style.display=="block")
    document.getElementsByClassName("nav-bar")[0].style.display="none";
    else
    document.getElementsByClassName("nav-bar")[0].style.display="block";
    
  }
  function hamburger(x) {
    x.classList.toggle("change");
    if(document.getElementsByClassName("search")[0].style.display=="block")
    document.getElementsByClassName("search")[0].style.display="none";
    else
    document.getElementsByClassName("search")[0].style.display="block";
    
  }
  function toggleDescription(num)
  {
  
    if(num == 1)
    {
      if(document.getElementsByClassName("description")[0].style.display=="block")
          document.getElementsByClassName("description")[0].style.display="none";
      else
          document.getElementsByClassName("description")[0].style.display="block";

          if(document.getElementsByClassName("arrow")[0].style.transform=="rotate(180deg)")
            document.getElementsByClassName("arrow")[0].style.transform="rotate(0deg)";
            else
            document.getElementsByClassName("arrow")[0].style.transform="rotate(180deg)"
    }
    else
    if(num == 2)
    {
      if(document.getElementsByClassName("description")[1].style.display=="block")
          document.getElementsByClassName("description")[1].style.display="none";
      else
          document.getElementsByClassName("description")[1].style.display="block";

          if(document.getElementsByClassName("arrow")[1].style.transform=="rotate(180deg)")
            document.getElementsByClassName("arrow")[1].style.transform="rotate(0deg)";
            else
            document.getElementsByClassName("arrow")[1].style.transform="rotate(180deg)"
    }
    else
    if(num == 3)
    {
      if(document.getElementsByClassName("description")[2].style.display=="block")
          document.getElementsByClassName("description")[2].style.display="none";
      else
          document.getElementsByClassName("description")[2].style.display="block";

          if(document.getElementsByClassName("arrow")[2].style.transform=="rotate(180deg)")
            document.getElementsByClassName("arrow")[2].style.transform="rotate(0deg)";
            else
            document.getElementsByClassName("arrow")[2].style.transform="rotate(180deg)"
    }
    else
    if(num == 4)
    {
      if(document.getElementsByClassName("description")[3].style.display=="block")
          document.getElementsByClassName("description")[3].style.display="none";
      else
          document.getElementsByClassName("description")[3].style.display="block";

          if(document.getElementsByClassName("arrow")[3].style.transform=="rotate(180deg)")
            document.getElementsByClassName("arrow")[3].style.transform="rotate(0deg)";
            else
            document.getElementsByClassName("arrow")[3].style.transform="rotate(180deg)"
    }
    else
    if(num == 5)
    {
      if(document.getElementsByClassName("description")[4].style.display=="block")
          document.getElementsByClassName("description")[4].style.display="none";
      else
          document.getElementsByClassName("description")[4].style.display="block";

          if(document.getElementsByClassName("arrow")[4].style.transform=="rotate(180deg)")
            document.getElementsByClassName("arrow")[4].style.transform="rotate(0deg)";
            else
            document.getElementsByClassName("arrow")[4].style.transform="rotate(180deg)"
    }
    

    // if(document.getElementsByClassName("description")[0].style.display=="block")
  }