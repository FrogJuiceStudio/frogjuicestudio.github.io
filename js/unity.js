
function startGame(gameFolder) 
{
  var unityFrame = document.getElementById("unityFrame");
  const gameUrl = `./unity/${gameFolder}/index.html`;
  unityFrame.src = gameUrl;
  unityFrame.style.display = "block";
} 
         

function closeGame() 
{
  var unityFrame = document.getElementById("unityFrame");
  unityFrame.style.display = "none";
} 