function autoUpdateYear() {
    const currentYear = new Date().getFullYear();
    const element = document.getElementById("year");

    //apply CSS to the element
    element.style.color = "red"; //change text color to red
    element.style.fontSize = "20px"; //set font size to 20px
    element.textContent = currentYear;

    const currentCycle = Math.floor(currentYear / 10) * 10;
    const startYear = currentCycle;
    const result = document.getElementById("list");

    if (startYear >= 2020 && startYear <= 9999) {
        for (let number = 0; number <= 9; number++) {
            const year = startYear + number;
            result.innerHTML += `${number} corresponds to year ${year}<br>`;
        }
    }
}
autoUpdateYear();

//update the list every 10 years
setInterval(autoUpdateYear, 10 * 365 * 24 * 60 * 60 * 1000);

