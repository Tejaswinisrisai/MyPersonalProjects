function primeOrNot() {
    var g = document.getElementById("num").value;
    var flag = false;
    for (var i = 2; i < g / 2 + 1; i++) {
        if (g % i == 0)
            flag = true;
    }
    if (flag)
        document.getElementById("showResult").innerHTML = g + " is Not a Prime"
    else
        document.getElementById("showResult").innerHTML = g + " is a Prime"
} 