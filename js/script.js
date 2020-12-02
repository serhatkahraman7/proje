function myFunction() {
    var x = document.getElementById("mymobmen");
    if (x.className === "mobmen") {
        x.className += " responsive";
    } else {
        x.className = "mobmen";
    }
}

