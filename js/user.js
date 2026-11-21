const toggle = document.getElementById("upload-toggle");
const panel = document.getElementById("upload-panel");
const close = document.getElementById("close-upload");

const fileInput = document.getElementById("json-file");
const processButton = document.getElementById("process-json");

const status = document.getElementById("upload-status");
const preview = document.getElementById("json-preview");

let uploadedJSON = null;

toggle.addEventListener("click", () => {
    panel.style.display =
        panel.style.display === "block" ? "none" : "block";
});

close.addEventListener("click", () => {
    panel.style.display = "none";
});

processButton.addEventListener("click", async () => {
    const file = fileInput.files[0];

    if (!file) {
        status.textContent = "Please select a JSON file!";
        status.style.color = "red";
        return;
    }

    if (!file.name.toLowerCase().endsWith(".json")) {
        status.textContent = "Please select a .json file!";
        status.style.color = "red";
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        status.textContent = "File is too large (max 2 MB).";
        status.style.color = "red";
        return;
    }

    try {
        const text = await file.text();
        const json = JSON.parse(text);

        uploadedJSON = json;

        // Save uploaded JSON to Local Storage
        localStorage.setItem("userData", JSON.stringify(json));

        preview.textContent = JSON.stringify(json, null, 2);

        status.textContent = "JSON loaded and saved successfully!";
        status.style.color = "green";

        console.log("Uploaded JSON:", uploadedJSON);

    } catch (error) {
        uploadedJSON = null;
        preview.textContent = "";

        status.textContent = "Invalid JSON file!";
        status.style.color = "red";

        console.error(error);
    }
});

function GetGameById(id){
    const userData = JSON.parse(localStorage.getItem("userData"));
    const game = userData.games.find(game => game.gameId === id);
    return game;
}

function GetAchievementById(gameId, achId){
    const userData = JSON.parse(localStorage.getItem("userData"));
    const game = userData.games.find(game => game.gameId === gameId);
    const ach = game.achievements.find(ach => ach.id === achId);
    return ach;
}

console.log(GetAchievementById("1A part of me", "play"));