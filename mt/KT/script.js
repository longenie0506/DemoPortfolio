function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("products").style.display = "none";
}

function showProducts() {
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "block";
}
showHome();