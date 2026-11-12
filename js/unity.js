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
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "EVERLAST",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "EXTINCT",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fish vs Sharkie",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fox in a Box",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Frog looking for girlfriend",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Frogo-Stick",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Fungi Funeral",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "GHOULS!",
        priority: 99,
        displayName: "",
        badge: "jam winner!",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "MECATNIC",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Skribbleknight",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "SPLICE",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: true,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "TTK",
        priority: 99,
        displayName: "TTK: Talk to Kill",
        badge: "my first game",
        description: "",
        canBePlayed: false,
        itchPage: "",
        steamPage: ""
    },
    {
        gameId: "Tung Tung Forest",
        priority: 99,
        displayName: "",
        badge: "",
        description: "",
        canBePlayed: false,
        itchPage: "",
        steamPage: ""
    },
];

let tooltipGameId = "";

Start();

function Start(){
    console.log("%c 1", "color: lightcoral;");
    SortGames();
    BuildGameContainer();
    InitCovers();
    AddPageClickListener();
    AddUnityEventListener();
}

//#region BUILD
function SortGames(){
    console.log("%c Sort Games", "color: lightyellow;");
    games.sort((a, b) => a.priority - b.priority);
}

function BuildGameContainer(){
    console.log("%c Build Game Container", "color: lightyellow;");
    const gameContainer = document.getElementById("game-container");
    var gameContainerHTML = "";
    games.forEach(game => {
        // console.log("%cbuild gameContainer.innerHTML", "color: green;");
        gameContainerHTML += `
            <div class="col-lg-3 col-md-6 col-12 mb-4">
                <div class="team-block-wrap"
                    onclick="OnClickGame('${game.gameId}')"
                    onmouseenter="OnHoverGame('${game.gameId}')"
                    onmouseout="OnUnhoverGame('${game.gameId}')">
                
                    <div class="team-block-info d-flex flex-column" style="pointer-events: none;">

                        <!-- NAME + BADGE -->
                        <div class="d-flex mt-auto mb-2" style="z-index: 1">
                            <h4 class="text-white mb-0">${game.gameId}</h4>
                            <!-- <p class="badge ms-4"><em>${game.badge}</em></p> -->
                        </div>

                        <!-- ICONS -->
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
                        
                    </div>
                    
                    <!-- COVER -->
                    <div class="team-block-image-wrap glow">
                        <video loop class="team-block-image img-fluid"
                            id = "${game.gameId}"
                            src="myGames/${game.gameId}/${game.gameId}.webm"
                            style="filter: contrast(1.1); position: relative"
                        ></video>
                    </div>
                    
                </div>

            </div>`;
        });

        gameContainer.innerHTML += gameContainerHTML;
}

function InitCovers(){
    console.log("%c Init Covers", "color: lightyellow;");
    games.forEach(game => {
        // console.log("%c  - Cover ["+game.gameId+"]", "color: lightyellow;");
        var gameElement = document.getElementById(game.gameId);
        gameElement.currentTime = .75;
    });
}

function AddPageClickListener() {
    console.log("%c Add Click Listener", "color: lightyellow;");
    document.addEventListener("click", (e) => {
        if(!IsTooltipActive()) return;
        if(e.target.closest(`#${CSS.escape(tooltipGameId)}`)) return;
        OnPageWasClickedOutsideGames();
    });
}

function AddUnityEventListener(){
    console.log("%c Add Unity Event Listener", "color: lightyellow;");
    var unityFrame = document.getElementById("unityFrame");
    var unityCloseButton = document.getElementById("closeUnity");

    unityFrame.addEventListener("load", () => {
        console.log("%c unityFrame.src = " + unityFrame.src, "color: red;");

        if(unityFrame.src == "https://frogjuicestudio.github.io/index.html"){
            console.log("%c unityFrame load is empty, return", "color: red;");
            return;
        }
        console.log("%c unityFrame load", "color: red;");
        unityFrame.contentWindow.addEventListener("focus", OnUnityFocusEnter);
        unityFrame.contentWindow.addEventListener("blur", OnUnityFocusExit);
        unityFrame.focus();
        unityCloseButton.style.display = "block";
    });
    
    unityCloseButton.addEventListener("click", OnCloseUnity);
}
//#endregion

//#region UTIL
function GetGameById(gameId){
    var game = games.find(g => g.gameId === gameId);
    return game;
}

function EqualsTooltipId(gameId){
    return gameId == tooltipGameId;
}

function IsTooltipActive(){
    return tooltipGameId != "";
}
//#endregion

function PlayAnim(gameId){
    var gameElement = document.getElementById(gameId);
    if(!gameElement) return;
    gameElement.play();
    gameElement.style.zIndex = 1;
    gameElement.style.transform = "scale(1.2)";
    gameElement.parentElement.style.zIndex = 1;
}

function StopAnim(gameId){
    var gameElement = document.getElementById(gameId);
    if(!gameElement) return;
    gameElement.pause();
    gameElement.currentTime = .75;
    gameElement.style.zIndex = 0;
    gameElement.style.transform = "scale(1)";
    gameElement.parentElement.style.zIndex = 0;
}

function OnHoverGame(gameId){
    if(EqualsTooltipId(gameId)) return;
    if(IsTooltipActive()){
        console.log("Tooltip still open ["+tooltipGameId+"]");
        StopAnim(tooltipGameId);
        RemoveExistingTooltip();
    }

    console.log("%c > ENTER ["+gameId+"]", "color: lightblue;");
    PlayAnim(gameId);
}

function OnUnhoverGame(gameId){
    if(EqualsTooltipId(gameId)) return;
    
    console.log("%c > LEAVE ["+gameId+"]", "color: orange;");
    StopAnim(gameId);
}

function OnClickGame(gameId){
    console.log("%c > CLICK ["+gameId+"]", "color: lightgreen;");
    var game = GetGameById(gameId);
    RemoveExistingTooltip();
    var optionsHTML = BuildTooltipOptionsHTML(game);
    var tooltip = BuildTooltipElement(game, optionsHTML);    
    ActivateTooltip(tooltip, game);
}

function RemoveExistingTooltip(){
    var existingTooltip = document.getElementById("gameTooltip");
    if (existingTooltip) {
        existingTooltip.remove();
        tooltipGameId = "";
    }
}

function BuildTooltipOptionsHTML(game){
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

    return options;
}

function BuildTooltipElement(game, options){
    var tooltip = document.createElement("div");
    tooltip.id = "gameTooltip";   
    tooltip.innerHTML = `
        <div class="game-tooltip-title">
            <i class="bi bi-joystick"></i>
            ${game.gameId}
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

    return tooltip;
}

function ActivateTooltip(tooltip, game){
    document.body.appendChild(tooltip);
    tooltipGameId = game.gameId;
}

function OnPageWasClickedOutsideGames(){
    StopAnim(tooltipGameId);
    RemoveExistingTooltip();
}

function OnStartGame(gameId) 
{
    var unityFrame = document.getElementById("unityFrame");
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");
    unityFrame.src = `./myGames/${gameId}/Build/index.html`;
    BlurUnityFrame();
    unityContainer.style.display = "block";
    unityBackdrop.style.display = "block";
}

function OnUnityFocusEnter(){
    console.log("%c >> FOCUS ENTER", "color: steelblue;");
    var unityFrame = document.getElementById("unityFrame");
    unityFrame.style.filter = "blur(0px)";
    var focusPrompt = document.getElementById("unityFocusPrompt");
    focusPrompt.style.display = "none";
}
function OnUnityFocusExit(){
    console.log("%c >> FOCUS EXIT", "color: lightpink;");
    var unityFrame = document.getElementById("unityFrame");
    unityFrame.style.filter = "blur(8px)";
    var focusPrompt = document.getElementById("unityFocusPrompt");
    focusPrompt.style.display = "block";
}

function OnCloseUnity(){
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");
    var unityFrame = document.getElementById("unityFrame");
    unityContainer.style.display = "none";
    unityBackdrop.style.display = "none";
    unityFrame.src = "";

    HideCloseButton();
    HideFocusPrompt();
    BlurUnityFrame();
}

function ShowCloseButton(){
    var unityCloseButton = document.getElementById("closeUnity");
    unityCloseButton.style.display = "block";
}
function HideCloseButton(){
    var unityCloseButton = document.getElementById("closeUnity");
    unityCloseButton.style.display = "none";
}

function ShowFocusPrompt(){
    var focusPrompt = document.getElementById("unityFocusPrompt");
    focusPrompt.style.display = "block";
}
function HideFocusPrompt(){
    var focusPrompt = document.getElementById("unityFocusPrompt");
    focusPrompt.style.display = "none";
}

function BlurUnityFrame(){
    var unityFrame = document.getElementById("unityFrame");    
    unityFrame.style.filter = "blur(8px)";
}
function SharpenUnityFrame(){
    var unityFrame = document.getElementById("unityFrame");
    unityFrame.style.filter = "blur(0px)";
}


