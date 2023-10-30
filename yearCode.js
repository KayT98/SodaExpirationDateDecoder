function autoUpdateYear() {
    const currentYear = new Date().getFullYear();
    const currentCycle = Math.floor(currentYear / 10) * 10;
    const startYear = currentCycle;
    let result = ""

    if (startYear >= 2020 && startYear <= 9999) {
        for (let number = 0; number <= 9; number++) {
            const year = startYear + number;
            result += `${number} corresponds to year ${year}\n`;
        }
    }
    document.getElementById("list").innerText = result
}
autoUpdateYear();

//update the list every 5 years
setInterval(autoUpdateYear, 5 * 365 * 24 * 60 * 60 * 1000);

