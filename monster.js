document.addEventListener("keydown", function(event) {
    //check if the pressed key is the Enter key
    if (event.key === "Enter") {
        //call the decode function when Enter key is pressed
        decode();
    }
});

const monthMap = {
    "a": "January",
    "b": "February",
    "c": "March",
    "d": "April",
    "e": "May",
    "f": "June",
    "g": "July",
    "h": "August",
    "i": "September",
    "j": "October",
    "k": "November",
    "l": "December",
};
function getJulianDate(year, dayOfYear){
    const date = new Date(year, 0);
    date.setDate(dayOfYear);
    const format = {weekday: "long", year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString(undefined, format);
}
function decode() {

    const monthCode = document.getElementById("codeLetter").value.toLowerCase();
    const dateCode = document.getElementById("codeDate").value;

    //get month code
    if (monthCode && monthMap[monthCode]) {
        document.getElementById("result1").textContent = `The month code is ${monthMap[monthCode]}`;
    } 
    else {
        document.getElementById("result1").textContent = `Invalid`;
    }
    //get Julian date code   
    if (dateCode.length >= 5 && dateCode.length <= 7) {
        const year = parseInt(dateCode.substr(0, 4))
        const dayOfYear = parseInt(dateCode.substr(4));
    
        if (!isNaN(year) && !isNaN(dayOfYear) && dayOfYear >= 1 && dayOfYear <= 366)  {
            const fullDate = getJulianDate(year, dayOfYear); 
            document.getElementById("result2").textContent = `${fullDate}`;
        } else {
            document.getElementById("result2").textContent = "Invalid year or day of year.";
        }
    } else {
        document.getElementById("result2").textContent = "Invalid date format.";
    }
    
}
