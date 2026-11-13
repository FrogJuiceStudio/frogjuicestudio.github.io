
let isUnityActive = true;

Start();
function Start(){
    var versionMsg = ":-O";
    console.log("%c versionMsg >>> " + versionMsg, "color: lightcoral;");
    AddUnityEventListener();
    AddUnityGameListener();
}

//#endregion START
function AddUnityEventListener(){
    console.log("%c Add Unity Event Listener", "color: lightyellow;");
    var unityFrame = document.getElementById("unityFrame");
    var unityCloseButton = document.getElementById("closeUnity");

    unityFrame.addEventListener("load", () => {
        console.log("%c unityFrame.src = " + unityFrame.src, "color: red;");

        if(unityFrame.src == "https://frogjuicestudio.github.io/index.html"){
            console.log("%c isUnityActive active: " + isUnityActive, "color: red;");
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

function AddUnityGameListener(){
    console.log("%c Add Unity Game Listener", "color: lightyellow;");

    window.addEventListener("unityGameEvent", function(e) {
        console.log("EVENT RECEIVED:", e.detail.event);
    });
}
//#endregion

function OnStartGame(gameId) 
{
    var unityFrame = document.getElementById("unityFrame");
    var unityContainer = document.getElementById("unityContainer");
    var unityBackdrop = document.getElementById("unityBackdrop");
    unityFrame.src = `./myGames/${gameId}/Build/index.html`;
    isUnityActive = true;

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
    isUnityActive = false;

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
//#endregion
