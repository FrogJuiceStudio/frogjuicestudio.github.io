const games = [
    // {
    //     gameId: "Example Id",
    //     displayName: "Example Name",
    //     badge: "Example Badge",
    //     description: "Example Description",
    //     canBePlayed: true,
    //     steamPage: "https://store.steampowered.com/curator/45232061",
    //     itchPage: "https://frogjuice-studio.itch.io/",
    // },
    {
        gameId: "A part of me",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "EVERLAST",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "EXTINCT",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fish vs Sharkie",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fox in a Box",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Frog looking for girlfriend",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Frogo-Stick",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fungi Funeral",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "GHOULS!",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "MECATNIC",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Skribbleknight",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "SPLICE",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "TTK",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: false,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Tung Tung Forest",
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: false,
        itchPage: "",
        steamPage: ""
    },
];



const gameContainer = document.getElementById("game-container");
var gameContainerHTML = "";

games.forEach(game => {

    console.log("%cbuild gameContainer.innerHTML", "color: green;");
    
    gameContainerHTML += `
        <div class="col-lg-3 col-md-6 col-12 mb-4">
            <div class="team-block-wrap"
                onclick="OnClickGame('${game.gameId}', event)"
                onmouseenter="OnHoverGame('${game.gameId}', event)"
                onmouseout="OnUnhoverGame('${game.gameId}', event)">

                <div class="team-block-info d-flex flex-column" style="pointer-events: none;">
                    <div class="d-flex mt-auto mb-2" style="z-index: 1">
                        <h4 class="text-white mb-0">${game.gameId}</h4>
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
                    <video class="team-block-image img-fluid"
                        id = "${game.gameId}"
                        src="myGames/${game.gameId}/${game.gameId}.webm"
                        style="filter: contrast(1.1)"
                    ></video>
                </div>
                
            </div>

        </div>
    `;
});

gameContainer.innerHTML += gameContainerHTML;

games.forEach(game => {
    InitCover(game.gameId);
});

function InitCover(gameId)
{
    console.log("%cInitCover ["+gameId+"]", "color: green;");
    var gameElement = document.getElementById(gameId);
    gameElement.currentTime = .8;
}


function OnHoverGame(gameId, event)
{
    console.log("%cHover ["+gameId+"]", "color: cyan;");
    var gameElement = document.getElementById(gameId);
    gameElement.play();
}

function OnUnhoverGame(gameId, event)
{
    console.log("%cUnhover ["+gameId+"]", "color: orange;");
    var gameElement = document.getElementById(gameId);    
    gameElement.pause();
    gameElement.currentTime = .8;
}

function OnClickGame(gameId, event)
{
    console.log("%cCick ["+gameId+"]", "color: cyan;");

    var game = games.find(g => g.gameId === gameId);

    if (!game){
        console.log("%cGame not found! [" + gameId +"]", "color: red;");
        return;
    }

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
                <div class="game-tooltip-option play-now-option"
                    onclick="OnStartGame('${game.gameId}')">
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
    // if (!options) return;

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
    unityFrame.src = `./myGames/${gameId}/Build/index.html`;
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

