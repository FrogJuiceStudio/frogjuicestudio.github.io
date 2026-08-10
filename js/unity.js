function startGame(gameFolder) 
{
    var unityFrame = document.getElementById("unityFrame");
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");

    unityFrame.src = `./unity/${gameFolder}/index.html`;

    unityBackdrop.style.display = "block";
    unityContainer.style.display = "block";
}


function closeGame() 
{
    var unityFrame = document.getElementById("unityFrame");
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");

    // Hide everything
    unityContainer.style.display = "none";
    unityBackdrop.style.display = "none";

    // Stop/unload the Unity game
    unityFrame.src = "";
}


// Close button
document.getElementById("closeUnity").addEventListener("click", closeGame);
