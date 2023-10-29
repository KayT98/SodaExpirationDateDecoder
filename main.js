function decode() {
    const monthMap = {
        "A": "January",
        "B": "February",
        "C": "March",
        "D": "April",
        "E": "May",
        "F": "June",
        "G": "July",
        "H": "August",
        "I": "September",
        "J": "October",
        "K": "November",
        "L": "December",

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

    const monthCode = document.getElementById("codeLetter").value;
    const dateCode = document.getElementById("codeDate").value;

    // Get month code
    if (monthCode && monthMap[monthCode]) {
        document.getElementById("result1").innerText = `The month code is ${monthMap[monthCode]}`;
    } else {
        document.getElementById("result1").innerText = `Invalid`;
    }

}

