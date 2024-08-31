
function playCat() 
{ 
  var cat = document.getElementById("cat");
  
  if (cat.style.display === "none")
  {
    cat.style.display = "block";
    cat.play();
    document.body.scrollIntoView(false);
  } 
  else cat.style.display = "none";               
} 
         
