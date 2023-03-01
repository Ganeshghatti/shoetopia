a = 0
document.getElementsByClassName("displayquantity")[0].innerHTML = "0"


document.getElementsByClassName("add")[0].addEventListener("click", add);

function add() {
    document.getElementsByClassName("displayquantity")[0].innerHTML = ++a
}

document.getElementsByClassName("remove")[0].addEventListener("click", subtract);

function subtract() {
    if (a == 0) {
        document.getElementsByClassName("displayquantity")[0].innerHTML = 0
    }
    else {
        document.getElementsByClassName("displayquantity")[0].innerHTML = --a
    }
}

