// ---------------- Language helpers ----------------
function getSavedLang() {
  const url = new URL(window.location.href);
  const q = url.searchParams.get('lang');
  if (q === 'jp' || q === 'en') {
    localStorage.setItem('lang', q);
    return q;
  }
  const saved = localStorage.getItem('lang');
  return (saved === 'jp' || saved === 'en') ? saved : 'jp'; // default JP
}

function applyLanguage(lang) {
  if (lang === 'jp') {
    document.getElementById("school-name").innerHTML = "みそのインターナショナルランゲージスクール";
    document.getElementById("set1")?.querySelector("span") && (document.getElementById("set1").querySelector("span").innerHTML = "機械故障と使い方");
    document.getElementById("set2")?.querySelector("span") && (document.getElementById("set2").querySelector("span").innerHTML = "体調不良。怪我");
    document.getElementById("set3")?.querySelector("span") && (document.getElementById("set3").querySelector("span").innerHTML = "水回り");
    document.getElementById("set4")?.querySelector("span") && (document.getElementById("set4").querySelector("span").innerHTML = "事件．事故");
    document.getElementById("set5")?.querySelector("span") && (document.getElementById("set5").querySelector("span").innerHTML = "郵便．宅配便");
    document.getElementById("set6")?.querySelector("span") && (document.getElementById("set6").querySelector("span").innerHTML = "掃除");
    document.getElementById("set7")?.querySelector("span") && (document.getElementById("set7").querySelector("span").innerHTML = "害虫退治");
    document.getElementById("set8")?.querySelector("span") && (document.getElementById("set8").querySelector("span").innerHTML = "料金支払い");
    document.getElementById("set9")?.querySelector("span") && (document.getElementById("set9").querySelector("span").innerHTML = "人間関係");
    document.getElementById("assistance-text") && (document.getElementById("assistance-text").innerHTML = "お困りの問題を選択してください。適切なサポートを提供いたします。");
  } else {
    document.getElementById("school-name").innerHTML = "Misono International Language School";
    document.getElementById("set1")?.querySelector("span") && (document.getElementById("set1").querySelector("span").innerHTML = "Machine Failures and Instructions");
    document.getElementById("set2")?.querySelector("span") && (document.getElementById("set2").querySelector("span").innerHTML = "Illness or Injury");
    document.getElementById("set3")?.querySelector("span") && (document.getElementById("set3").querySelector("span").innerHTML = "Water Problems");
    document.getElementById("set4")?.querySelector("span") && (document.getElementById("set4").querySelector("span").innerHTML = "Trouble or Accident");
    document.getElementById("set5")?.querySelector("span") && (document.getElementById("set5").querySelector("span").innerHTML = "Postal and Courier");
    document.getElementById("set6")?.querySelector("span") && (document.getElementById("set6").querySelector("span").innerHTML = "Cleaning");
    document.getElementById("set7")?.querySelector("span") && (document.getElementById("set7").querySelector("span").innerHTML = "Insect and Pest");
    document.getElementById("set8")?.querySelector("span") && (document.getElementById("set8").querySelector("span").innerHTML = "Payment");
    document.getElementById("set9")?.querySelector("span") && (document.getElementById("set9").querySelector("span").innerHTML = "Human Relationships");
    document.getElementById("assistance-text") && (document.getElementById("assistance-text").innerHTML = "Kindly select the issue you are experiencing so that we can assist you better.");
  }
}

function switchLanguage(lang) {
  if (lang !== 'jp' && lang !== 'en') return;
  localStorage.setItem('lang', lang);
  // keep ?lang=... in the current URL (no reload)
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, "", url.toString());
  applyLanguage(lang);
}

// ---------------- Navigation helpers ----------------
// (No new URL() here; works for file:/// and http(s)://)
function refreshHome() {
  const lang = getSavedLang();
  const sep = "index.html".includes("?") ? "&" : "?";
  window.location.href = `index.html${sep}lang=${lang}`;
}

function navigateTo(page) {
  const lang = getSavedLang();
  const sep = page.includes("?") ? "&" : "?";
  window.location.href = `${page}${sep}lang=${lang}`;
}

// ---------------- Search (unchanged) ----------------
function searchProblems() {
  const input = (document.getElementById("searchBox")?.value || "").toLowerCase();
  document.querySelectorAll("#problemList tr").forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}

// ---------------- Initialize on load ----------------
window.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getSavedLang());
});
