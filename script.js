// Function to switch between Japanese and English
function switchLanguage(lang) {
    if (lang === 'jp') {
        document.getElementById("school-name").innerHTML = "みそのインターナショナルランゲージスクール";
        document.getElementById("set1").querySelector("span").innerHTML = "機械故障と使い方";
        document.getElementById("set2").querySelector("span").innerHTML = "体調不良。怪我";
        document.getElementById("set3").querySelector("span").innerHTML = "水回り";
        document.getElementById("set4").querySelector("span").innerHTML = "事件．事故";
        document.getElementById("set5").querySelector("span").innerHTML = "郵便．宅配便";
        document.getElementById("set6").querySelector("span").innerHTML = "掃除";
        document.getElementById("set7").querySelector("span").innerHTML = "害虫退治";
        document.getElementById("set8").querySelector("span").innerHTML = "料金支払い";
        document.getElementById("set9").querySelector("span").innerHTML = "人間関係";

        // Change assistance text to Japanese
        document.getElementById("assistance-text").innerHTML = "お困りの問題を選択してください。適切なサポートを提供いたします。";
    } else {
        document.getElementById("school-name").innerHTML = "Misono International Language School";
        document.getElementById("set1").querySelector("span").innerHTML = "Machine Failures and Instructions";
        document.getElementById("set2").querySelector("span").innerHTML = "Illness or Injury";
        document.getElementById("set3").querySelector("span").innerHTML = "Water Problems";
        document.getElementById("set4").querySelector("span").innerHTML = "Trouble or Accident";
        document.getElementById("set5").querySelector("span").innerHTML = "Postal and Courier";
        document.getElementById("set6").querySelector("span").innerHTML = "Cleaning";
        document.getElementById("set7").querySelector("span").innerHTML = "Insect and Pest";
        document.getElementById("set8").querySelector("span").innerHTML = "Payment";
        document.getElementById("set9").querySelector("span").innerHTML = "Human Relationships";

        // Change assistance text back to English
        document.getElementById("assistance-text").innerHTML = "Kindly select the issue you are experiencing so that we can assist you better.";
    }
}

// Function to refresh the homepage when the logo is clicked
function refreshHome() {
    window.location.href = "index.html"; // Refreshes the page
}

// Function to navigate to specific problem pages (without opening a new tab)
function navigateTo(page) {
    window.location.href = page;
}

// Function to search for problems dynamically
function searchProblems() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let rows = document.querySelectorAll("#problemList tr");

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// Set Japanese as the default language when the page loads
window.onload = function() {
    switchLanguage('jp');  // Load Japanese by default
};
