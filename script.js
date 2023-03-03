// IN-CART

var a = 0;
document.getElementsByClassName("displayquantity")[0].innerHTML = a


document.getElementsByClassName("add")[0].addEventListener("click", add);

function add() {
    a++
    document.getElementsByClassName("displayquantity")[0].innerHTML = a
    emptycart.style.display = "none";
    notanemptycart.style.display = "none";
}

document.getElementsByClassName("remove")[0].addEventListener("click", subtract);

function subtract() {
    if (a == 0) {
        document.getElementsByClassName("displayquantity")[0].innerHTML = "0"
    }
    else {
        a--
        document.getElementsByClassName("displayquantity")[0].innerHTML = a
        emptycart.style.display = "none";
        notanemptycart.style.display = "none";
    }
}


// CART MENU
console.log(a)
cartitems = document.getElementsByClassName("cartitemsbutton")[0]
emptycart = document.getElementById("emptycart")
notanemptycart = document.getElementById("notanemptycart")
cartitems.addEventListener("click", carticonf)
let overlaythree=document.getElementsByClassName("overlaythree")[0]

function carticonf() {
    document.getElementsByClassName("quantityofproductinsidecart")[0].innerHTML = a
    document.getElementsByClassName("finalpriceinsidecart")[0].innerHTML = "$" + (a * 125)
    if (a === 0) {
        if (emptycart.style.display == "none") {
            emptycart.style.display = "block";
            overlaythree.style.display="block"
            sliderightarrow.style.display = "none"
            slideleftarrow.style.display = "none"
        }
        else if (emptycart.style.display = "block" || a > 0) {
            emptycart.style.display = "none";
            sliderightarrow.style.display = "block"
            slideleftarrow.style.display = "block"
        }
    }
    else {
        if (notanemptycart.style.display == "none") {
            notanemptycart.style.display = "block";
            sliderightarrow.style.display = "none"
            slideleftarrow.style.display = "none"
        }
        else if (notanemptycart.style.display = "block" || a == 0) {
            notanemptycart.style.display = "none";
            sliderightarrow.style.display = "block"
            slideleftarrow.style.display = "block"
        }
    }
}


// // IMAGE VIEW

let oneimg = document.getElementsByClassName("oneimg")[0]
let twoimg = document.getElementsByClassName("twoimg")[0]
let threeimg = document.getElementsByClassName("threeimg")[0]
let fourimg = document.getElementsByClassName("fourimg")[0]
let oneimgid = document.getElementById("busesehione")
let twoimgid = document.getElementById("busesehitwo")
let threeimgid = document.getElementById("busesehithree")
let fourimgid = document.getElementById("busesehifour")
let displayproductimageone = document.getElementsByClassName("displayproductimageone")[0]
let displayproductimagetwo = document.getElementsByClassName("displayproductimagetwo")[0]
let displayproductimagethree = document.getElementsByClassName("displayproductimagethree")[0]
let displayproductimagefour = document.getElementsByClassName("displayproductimagefour")[0]
oneimgid.setAttribute("id", "borderandopacity");

oneimg.addEventListener("click", oneimgg)
function oneimgg() {
    displayproductimageone.style.display = "block";
    displayproductimagetwo.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagefour.style.display = "none";
    oneimgid.setAttribute("id", "borderandopacity");
    twoimgid.removeAttribute("id")
    threeimgid.removeAttribute("id")
    fourimgid.removeAttribute("id")
}

twoimg.addEventListener("click", twoimgg)
function twoimgg() {
    displayproductimagetwo.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagefour.style.display = "none";
    twoimgid.setAttribute("id", "borderandopacity");
    oneimgid.removeAttribute("id")
    threeimgid.removeAttribute("id")
    fourimgid.removeAttribute("id")
}

threeimg.addEventListener("click", threeimgg)
function threeimgg() {
    displayproductimagethree.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagetwo.style.display = "none";
    displayproductimagefour.style.display = "none";
    threeimgid.setAttribute("id", "borderandopacity");
    oneimgid.removeAttribute("id")
    twoimgid.removeAttribute("id")
    fourimgid.removeAttribute("id")
}

fourimg.addEventListener("click", fourimgg)
function fourimgg() {
    displayproductimagefour.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagetwo.style.display = "none";
    fourimgid.setAttribute("id", "borderandopacity");
    oneimgid.removeAttribute("id")
    twoimgid.removeAttribute("id")
    threeimgid.removeAttribute("id")
}


// MOBILE VIEW

slideleftarrow = document.getElementsByClassName("slideleftarrow")[0]
sliderightarrow = document.getElementsByClassName("sliderightarrow")[0]
let bigimagem = document.getElementsByClassName("bigimagem")[0]
let displayproductimageonem = document.getElementsByClassName("displayproductimageonem")[0]
let displayproductimagetwom = document.getElementsByClassName("displayproductimagetwom")[0]
let displayproductimagethreem = document.getElementsByClassName("displayproductimagethreem")[0]
let displayproductimagefourm = document.getElementsByClassName("displayproductimagefourm")[0]
let mobileview = document.getElementsByClassName("mobileview")[0]
displayproductimageonem.style.display = "block";
displayproductimagetwom.style.display = "none";
displayproductimagethreem.style.display = "none";
displayproductimagefourm.style.display = "none";


slideleftarrow.addEventListener("click", slideleftarroww)
function slideleftarroww() {
    console.log("left arrow function")
    if (displayproductimageonem.style.display == "block") {
        displayproductimageonem.style.display = "none";
        displayproductimagefourm.style.display = "block";
    } else if (displayproductimagetwom.style.display == "block") {
        displayproductimagetwom.style.display = "none";
        displayproductimageonem.style.display = "block";
    } else if (displayproductimagethreem.style.display == "block") {
        displayproductimagethreem.style.display = "none";
        displayproductimagetwom.style.display = "block";
    } else if (displayproductimagefourm.style.display == "block") {
        displayproductimagefourm.style.display = "none";
        displayproductimagethreem.style.display = "block";
    } else {
        console.log("wtf")
    }
}
sliderightarrow.addEventListener("click", sliderightarroww)
function sliderightarroww() {
    console.log("right arrow function")
    if (displayproductimageonem.style.display == "block") {
        displayproductimageonem.style.display = "none";
        displayproductimagetwom.style.display = "block";
    } else if (displayproductimagetwom.style.display == "block") {
        displayproductimagetwom.style.display = "none";
        displayproductimagethreem.style.display = "block";
    } else if (displayproductimagethreem.style.display == "block") {
        displayproductimagethreem.style.display = "none";
        displayproductimagefourm.style.display = "block";
    } else if (displayproductimagefourm.style.display == "block") {
        displayproductimagefourm.style.display = "none";
        displayproductimageonem.style.display = "block";
    } else {
        console.log("wtf")
    }
}


// HAMBURGUR SCRIPT

let hamburguricon = document.getElementsByClassName("hamburguricon")[0]
let cancelicon = document.getElementsByClassName("cancelicon")[0]
let hamburgerdiv = document.getElementsByClassName("hamburgerdiv")[0]

// hamburguricon.style.display = "block"
cancelicon.style.display = "none"

hamburguricon.addEventListener("click", hamburgurf)

cancelicon.addEventListener("click", canceliconf)


function hamburgurf() {
    hamburgerdiv.style.display = "flex"
    hamburguricon.style.display = "none"
    cancelicon.style.display = "block"
    sliderightarrow.style.display = "none"
    slideleftarrow.style.display = "none"
}
function canceliconf() {
    hamburguricon.style.display = "block"
    cancelicon.style.display = "none"
    hamburgerdiv.style.display = "none"
    sliderightarrow.style.display = "block"
    slideleftarrow.style.display = "block"
}

// ADD TO CART

cartv = 0;
let addtocart = document.getElementsByClassName("addtocart")[0]
addtocart.addEventListener("click", cartf)
function cartf() {
    console.log(a)
    a++
    document.getElementsByClassName("displayquantity")[0].innerHTML = a
}


// BIG IMAGE VIEW

let bigimage = document.getElementsByClassName("bigimage")[0]
let canceliconpc = document.getElementsByClassName("canceliconpc")[0]
let imgviewonpc = document.getElementsByClassName("imgviewonpc")[0]
let overlaytwo = document.getElementsByClassName("overlaytwo")[0]
let displayproductimage = document.getElementById("displayproductimage")

bigimage.addEventListener("click", bigimagepcvieww)

function bigimagepcvieww() {
    imgviewonpc.style.display = "flex"
    canceliconpc.style.display = "block"
    overlaytwo.style.display = "block"
    overlayone.style.display = "block"
}

canceliconpc.addEventListener("click", canceliconpcf)

function canceliconpcf() {
    imgviewonpc.style.display = "none"
    canceliconpc.style.display = "none"
    overlaytwo.style.display = "none"
}


slideleftarrowpc = document.getElementsByClassName("slideleftarrowpc")[0]
sliderightarrowpc = document.getElementsByClassName("sliderightarrowpc")[0]
let bigimagepc = document.getElementsByClassName("bigimagepc")[0]
let displayproductimageonepc = document.getElementsByClassName("displayproductimageonepc")[0]
let displayproductimagetwopc = document.getElementsByClassName("displayproductimagetwopc")[0]
let displayproductimagethreepc = document.getElementsByClassName("displayproductimagethreepc")[0]
let displayproductimagefourpc = document.getElementsByClassName("displayproductimagefourpc")[0]
// let mobileview = document.getElementsByClassName("mobileview")[0]
displayproductimageonepc.style.display = "block";
displayproductimagetwopc.style.display = "none";
displayproductimagethreepc.style.display = "none";
displayproductimagefourpc.style.display = "none";


slideleftarrowpc.addEventListener("click", slideleftarrowww)
function slideleftarrowww() {
    console.log("left arrow function for pc view")
    if (displayproductimageonepc.style.display == "block") {
        displayproductimageonepc.style.display = "none";
        displayproductimagefourpc.style.display = "block";
    } else if (displayproductimagetwopc.style.display == "block") {
        displayproductimagetwopc.style.display = "none";
        displayproductimageonepc.style.display = "block";
    } else if (displayproductimagethreepc.style.display == "block") {
        displayproductimagethreepc.style.display = "none";
        displayproductimagetwopc.style.display = "block";
    } else if (displayproductimagefourpc.style.display == "block") {
        displayproductimagefourpc.style.display = "none";
        displayproductimagethreepc.style.display = "block";
    } else {
        console.log("wtf")
    }
}
sliderightarrowpc.addEventListener("click", sliderightarrowww)
function sliderightarrowww() {
    console.log("right arrow function")
    if (displayproductimageonepc.style.display == "block") {
        displayproductimageonepc.style.display = "none";
        displayproductimagetwopc.style.display = "block";
    } else if (displayproductimagetwopc.style.display == "block") {
        displayproductimagetwopc.style.display = "none";
        displayproductimagethreepc.style.display = "block";
    } else if (displayproductimagethreepc.style.display == "block") {
        displayproductimagethreepc.style.display = "none";
        displayproductimagefourpc.style.display = "block";
    } else if (displayproductimagefourpc.style.display == "block") {
        displayproductimagefourpc.style.display = "none";
        displayproductimageonepc.style.display = "block";
    } else {
        console.log("wtf")
    }
}

let oneimgpc = document.getElementsByClassName("oneimgpc")[0]
let twoimgpc = document.getElementsByClassName("twoimgpc")[0]
let threeimgpc = document.getElementsByClassName("threeimgpc")[0]
let fourimgpc = document.getElementsByClassName("fourimgpc")[0]

oneimgpc.addEventListener("click", oneimggg)
function oneimggg() {
    displayproductimageonepc.style.display = "block";
    displayproductimagetwopc.style.display = "none";
    displayproductimagethreepc.style.display = "none";
    displayproductimagefourpc.style.display = "none";
}

twoimgpc.addEventListener("click", twoimggg)
function twoimggg() {
    displayproductimagetwopc.style.display = "block";
    displayproductimageonepc.style.display = "none";
    displayproductimagethreepc.style.display = "none";
    displayproductimagefourpc.style.display = "none";
}

threeimgpc.addEventListener("click", threeimggg)
function threeimggg() {
    displayproductimagethreepc.style.display = "block";
    displayproductimageonepc.style.display = "none";
    displayproductimagetwopc.style.display = "none";
    displayproductimagefourpc.style.display = "none";
}

fourimgpc.addEventListener("click", fourimggg)
function fourimggg() {
    displayproductimagefourpc.style.display = "block";
    displayproductimageonepc.style.display = "none";
    displayproductimagethreepc.style.display = "none";
    displayproductimagetwopc.style.display = "none";
}



// CLOSE CART 

// const bodyy = document.getElementsByTagName("body");
// if (emptycart.style.display == "block") {
//     bodyy.addEventListener("click", disapperonclickanywhere)
//     }
// else if(notanemptycart.style.display=="block"){
//     bodyy.addEventListener("click", disapperonclickanywhere)
// }
// function disapperonclickanywhere() {
//     emptycart.style.display = "none";
// }

let overlayone=document.getElementsByClassName("overlay")[0]
if(overlayone.style.display = "block"){
    overlayone.addEventListener("click", disapperonclickanywhere)
    overlaytwo.addEventListener("click", disapperonclickanywhere)
}
// if(overlaythree.style.display =="block"){
//     overlaythree.addEventListener("click", disapperonclickanywhere)
// }
function disapperonclickanywhere() {
    imgviewonpc.style.display = "none"
    overlayone.style.display="none"
    overlaytwo.style.display="none"
    canceliconpc.style.display = "none"
    emptycart.style.display="none"
}
