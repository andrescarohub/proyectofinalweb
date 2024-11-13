const inputBox = document.querySelector(".search-bar");
const resultBox = document.querySelector(".results");

const countryList = ["Afghanistan", "Argentina", "Australia", "Belgica", "Brazil","colombia,","puerto rico"];

inputBox.onkeyup = function () {
    let input = inputBox.value.toLowerCase();
    let result = countryList.filter(country => country.toLowerCase().includes(input));

    if (input.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    const resultHTML = result.map(country => `<li onclick="selectInput(this)">${country}</li>`).join("");
    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};

function selectInput(country) {
    inputBox.value = country.innerText;
    resultBox.innerHTML = "";
}

let notifyButton = document.querySelector(".notify-button");
let notifyArea = document.querySelector(".notify-area");

const ShowDropdown = () => {
    notifyButton.classList.add("active");
    notifyArea.style.visibility = "visible";
};

document.addEventListener("click", (event) => {
    if (!notifyButton.contains(event.target) && !notifyArea.contains(event.target)) {
        notifyButton.classList.remove("active");
        notifyArea.style.visibility = "hidden";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-button a");
    backButton.onclick = () => window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-button a");
    backButton.onclick = () => window.location.href = "index.html";
});

