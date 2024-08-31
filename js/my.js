
function showCat() { 
  var cat = document.getElementById("cat");
  if (cat.style.display === "none") {
    cat.style.display = "block";
    document.body.scrollIntoView(false);      
  } else {
    cat.style.display = "none";
  }                        
} 



function playCat() {
  var cat = document.getElementById("catVideo");  
  cat.play();
  cat.volume=1;
}                        
