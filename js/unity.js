const games = [
    {
        gameId: "splice",
        displayName: "SPLICE",
        badge: "JAM",
        description: "",
        canBePlayed: true,
        steamPage: "https://store.steampowered.com/app/123456/splice",
        itchPage: "https://itch.io/splice",
    },
    {
        gameId: "capy",
        displayName: "CAPYBARA!",
        badge: "JAM",
        description: "",
        canBePlayed: false,
        itchPage: "",
        steamPage: ""
    },    
];

const gameContainer = document.getElementById("game-container");

games.forEach(game => {
    gameContainer.innerHTML += `
        <div class="col-lg-3 col-md-6 col-12 mb-4"
             onmouseover="OnHoverGame('${game.gameId}')"
             onclick="OnClickGame('${game.gameId}', event)">

            <div class="team-block-wrap">

                <div class="team-block-info d-flex flex-column">
                    <div class="d-flex mt-auto mb-2">
                        <h4 class="text-white mb-0">${game.displayName}</h4>
                        <p class="badge ms-4"><em>${game.badge}</em></p>
                    </div>

                    <div class="game-icons">
                        ${game.canBePlayed ? `
                            <i class="bi bi-play-fill game-icon" title="Playable in Browser"></i>
                        ` : ""}
                        ${game.steamPage ? `
                            <i class="bi bi-steam game-icon" title="Available on Steam"></i>
                        ` : ""}
                        ${game.itchPage ? `
                            <i class="bi bi-controller game-icon" title="Available on Itch.io"></i>
                        ` : ""}
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

function OnHoverGame(gameId) 
{

}

function OnClickGame(gameId, event)
{
    var game = games.find(g => g.gameId === gameId);

    if (!game) return;

    // Remove existing tooltip
    var existingTooltip = document.getElementById("gameTooltip");
    if (existingTooltip) {
        existingTooltip.remove();
    }

    var tooltip = document.createElement("div");
    tooltip.id = "gameTooltip";

    // Build options dynamically
    var options = "";

    var isMobile = navigator.userAgentData
    ? navigator.userAgentData.mobile
    : /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    var isPC = !isMobile;

    if (game.canBePlayed) {
        if (isPC) {
            options += `
                <div class="game-tooltip-option play-now-option">
                    <i class="bi bi-play-fill"></i>
                    Play
                </div>
            `;
        } else {
            options += `
                <div class="game-tooltip-option play-now-option disabled">
                    <i class="bi bi-pc-display"></i>
                    Can't be played on your device
                </div>
            `;
        }
    }

    if (game.steamPage) {
        options += `
            <a class="game-tooltip-option"
            href="${game.steamPage}"
            target="_blank"
            rel="noopener noreferrer">
                <i class="bi bi-steam"></i>
                Steam page
            </a>
        `;
    }

    if (game.itchPage) {
        options += `
            <a class="game-tooltip-option"
            href="${game.itchPage}"
            target="_blank"
            rel="noopener noreferrer">
                <i class="bi bi-controller"></i>
                Itch.io page
            </a>
        `;
    }
    
    // Don't show an empty tooltip
    if (!options) return;

    tooltip.innerHTML = `
        <div class="game-tooltip-title">
            <i class="bi bi-joystick"></i>
            ${game.displayName}
        </div>
        ${options}
    `;

    tooltip.style.position = "absolute";
    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
    tooltip.style.background = "#222";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "8px";
    tooltip.style.borderRadius = "6px";
    tooltip.style.zIndex = "9999";

    document.body.appendChild(tooltip);

    // Close when clicking outside
    setTimeout(() => {
        document.addEventListener("click", function closeTooltip(e) {
            if (!tooltip.contains(e.target)) {
                tooltip.remove();
                document.removeEventListener("click", closeTooltip);
            }
        });
    }, 0);
}

function OnStartGame(gameId) 
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

