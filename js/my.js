
  function showCat() { 
    var cat = document.getElementById("cat");
    if (cat.style.display === "none") {
      cat.style.display = "block";
      document.body.scrollIntoView(false);
    } else {
      cat.style.display = "none";
    }                        
  } 



