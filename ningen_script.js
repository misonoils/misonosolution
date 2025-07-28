// Function to switch between Japanese and English
function switchLanguage(lang) {
    if (lang === 'jp') {
        document.getElementById("school-name").innerHTML = "みそのインターナショナルランゲージスクール";
        document.getElementById("subtitle").innerHTML = "人間関係";
        document.getElementById("problem-header").innerHTML = "問題";
        document.getElementById("searchBox").placeholder = "問題を検索...";
        document.getElementById("back-home-btn").innerHTML = "ホームページに戻る";

        let assistanceText = document.getElementById("assistance-text");
        if (assistanceText) {
            assistanceText.innerHTML = "お困りの問題を選択してください。適切なサポートを提供いたします。";
        }

        document.querySelectorAll(".en").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".jp").forEach(el => el.classList.remove("hidden"));
    } else {
        document.getElementById("school-name").innerHTML = "Misono International Language School";
        document.getElementById("subtitle").innerHTML = "Human Relationship";
        document.getElementById("problem-header").innerHTML = "Problem";
        document.getElementById("searchBox").placeholder = "Search problems...";
        document.getElementById("back-home-btn").innerHTML = "Back to Homepage";

        let assistanceText = document.getElementById("assistance-text");
        if (assistanceText) {
            assistanceText.innerHTML = "Kindly select the issue you are experiencing so that we can assist you better.";
        }

        document.querySelectorAll(".jp").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".en").forEach(el => el.classList.remove("hidden"));
    }
}

// Open Google Drive File in Modal
function openDriveFile(url) {
    let fileID = url.split('/d/')[1].split('/view')[0];
    let embedURL = `https://drive.google.com/file/d/${fileID}/preview`;

    document.getElementById("driveFileFrame").src = embedURL;
    document.getElementById("fileModal").style.display = "block";
    document.getElementById("openDriveLink").href = url;
}

// Close Modal
function closeDriveFile() {
    document.getElementById("fileModal").style.display = "none";
    document.getElementById("driveFileFrame").src = "";
}

// Navigate Back to Homepage
function navigateToHome() {
    window.location.href = "index.html";
}

// Ensure Japanese is Always Default
window.onload = function() {
    switchLanguage('jp');
};

// Search Function
function searchProblems() {
    let input = document.getElementById("searchBox").value.trim().toLowerCase();
    let rows = document.querySelectorAll("#problemList tr");

    rows.forEach(row => {
        let englishText = row.querySelector(".en").textContent.toLowerCase();
        let japaneseText = row.querySelector(".jp").textContent.toLowerCase();

        if (englishText.includes(input) || japaneseText.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
