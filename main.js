function decode() {
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

    const monthCode = document.getElementById("codeLetter").value.toLowerCase();
    const dateCode = document.getElementById("codeDate").value;

    //get month code
    if (monthCode && monthMap[monthCode]) {
        document.getElementById("result1").innerText = `The month code is ${monthMap[monthCode]}`;
    } else {
        document.getElementById("result1").innerText = `Invalid`;
    }


    //get Julian date code
    
}

