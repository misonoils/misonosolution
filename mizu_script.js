// --- Shared language helpers (inner pages) ---
function getSavedLang() {
    const url = new URL(window.location.href);
    const fromQuery = url.searchParams.get('lang');
    if (fromQuery === 'en' || fromQuery === 'jp') {
        localStorage.setItem('lang', fromQuery);
        return fromQuery;
    }
    const saved = localStorage.getItem('lang');
    return (saved === 'en' || saved === 'jp') ? saved : 'jp'; // default JP
}

function switchLanguage(lang) {
    if (lang !== 'en' && lang !== 'jp') return;
    localStorage.setItem('lang', lang);
    applyPageLanguage(lang);
}

// Apply text + show/hide EN/JP spans
function applyPageLanguage(lang) {
    if (lang === 'jp') {
        document.getElementById("school-name").innerHTML = "みそのインターナショナルランゲージスクール";
        document.getElementById("subtitle").innerHTML = "水回り";
        document.getElementById("problem-header").innerHTML = "問題";
        document.getElementById("searchBox").placeholder = "問題を検索...";
        document.getElementById("back-home-btn").innerHTML = "ホームページに戻る";

        const assistanceText = document.getElementById("assistance-text");
        if (assistanceText) assistanceText.innerHTML = "お困りの問題を選択してください。適切なサポートを提供いたします。";

        document.querySelectorAll(".en").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".jp").forEach(el => el.classList.remove("hidden"));
    } else {
        document.getElementById("school-name").innerHTML = "Misono International Language School";
        document.getElementById("subtitle").innerHTML = "Water Problems";
        document.getElementById("problem-header").innerHTML = "Problem";
        document.getElementById("searchBox").placeholder = "Search problems...";
        document.getElementById("back-home-btn").innerHTML = "Back to Homepage";

        const assistanceText = document.getElementById("assistance-text");
        if (assistanceText) assistanceText.innerHTML = "Kindly select the issue you are experiencing so that we can assist you better.";

        document.querySelectorAll(".jp").forEach(el => el.classList.add("hidden"));
        document.querySelectorAll(".en").forEach(el => el.classList.remove("hidden"));
    }

    // Update solution link for each row if dual URLs are provided
    document.querySelectorAll('#problemList a[data-en][data-jp]').forEach(link => {
        const targetUrl = (lang === 'en') ? link.getAttribute('data-en') : link.getAttribute('data-jp');
        link.onclick = function (e) {
            e.preventDefault();
            openDriveFile(targetUrl);
        };
    });
}

// --- Google Drive file modal ---
function openDriveFile(url) {
    const fileID = (url && url.includes('/d/')) ? url.split('/d/')[1].split('/')[0] : null;
    const embedURL = fileID ? `https://drive.google.com/file/d/${fileID}/preview` : url;
    document.getElementById("driveFileFrame").src = embedURL;
    document.getElementById("fileModal").style.display = "block";
}

function closeDriveFile() {
    document.getElementById("fileModal").style.display = "none";
    document.getElementById("driveFileFrame").src = "";
}

// --- Navigate back to homepage (keep language in URL) ---
function navigateToHome() {
    const lang = getSavedLang();
    const sep = "index.html".includes("?") ? "&" : "?";
    window.location.href = `index.html${sep}lang=${lang}`;
}

// --- Search across both languages ---
function searchProblems() {
    const input = document.getElementById("searchBox").value.trim().toLowerCase();
    document.querySelectorAll("#problemList tr").forEach(row => {
        const en = row.querySelector(".en")?.textContent.toLowerCase() || "";
        const jp = row.querySelector(".jp")?.textContent.toLowerCase() || "";
        row.style.display = (en.includes(input) || jp.includes(input)) ? "" : "none";
    });
}

// --- Initialize page on load ---
window.addEventListener('DOMContentLoaded', () => {
    applyPageLanguage(getSavedLang());
});
