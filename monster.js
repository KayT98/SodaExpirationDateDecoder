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
}
