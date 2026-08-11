function OnHoverGame(gameId) 
{

}

function OnClickGame(gameId) 
{
    var unityFrame = document.getElementById("unityFrame");
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");
    unityFrame.src = `./unity/${gameId}/index.html`;
    unityContainer.style.display = "block";
    unityBackdrop.style.display = "block";
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

const games = [
    {
        gameId: "splice",
        displayName: "SPLICE",
        badge: "demo",
        description: "A short description of SPLICE.",
    },
    {
        gameId: "capy",
        displayName: "CAPYBARA!",
        badge: "demo",
        description: "A short description of SPLICE.",
    },
];

const gameContainer = document.getElementById("game-container");

games.forEach(game => {
    gameContainer.innerHTML += `
        <div class="col-lg-3 col-md-6 col-12 mb-4"
             onmouseover="OnHoverGame('${game.gameId}')"
             onclick="OnClickGame('${game.gameId}')">

            <div class="team-block-wrap">
                <div class="team-block-info d-flex flex-column">
                    <div class="d-flex mt-auto mb-3">
                        <h4 class="text-white mb-0">${game.displayName}</h4>
                        <p class="badge ms-4"><em>${game.badge}</em></p>
                    </div>

                    <p class="text-white mb-0">${game.description}</p>
                </div>

                <div class="team-block-image-wrap">
                    <img class="team-block-image img-fluid"
                         src="videos/${game.gameId}_case.gif"
                         alt="Couldn't load GIF">
                </div>
            </div>

        </div>
    `;
});