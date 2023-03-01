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

function carticonf() {
    document.getElementsByClassName("quantityofproductinsidecart")[0].innerHTML=a
    document.getElementsByClassName("finalpriceinsidecart")[0].innerHTML="$" +(a*125)
    if (a === 0) {
        if (emptycart.style.display == "none") {
            emptycart.style.display = "block";
        }
        else if(emptycart.style.display = "block" || a>0) {
            emptycart.style.display = "none";
        }
    }
    else{
        if (notanemptycart.style.display == "none") {
            notanemptycart.style.display = "block";
        }
        else if(notanemptycart.style.display = "block"||a==0) {
            notanemptycart.style.display = "none";
        }
    }
}

// container=document.getElementsByClassName("container")
// container.addEventListener("click",clickanywhereclose)
// function clickanywhereclose(){
//     if(notanemptycart.style.display = "block") {
//         notanemptycart.style.display = "none";
//     }
//     if(emptycart.style.display = "block") {
//         emptycart.style.display = "none";
//     }
// }





// ADD TO CART
// cartv = 0;
// cart = document.getElementsByClassName("addtocart")[0]
// cart.addEventListener("click", cartf)
// function cartf() {
//     if (cartv == 0) {

//     }
// }


// // IMAGE VIEW

let oneimg=document.getElementsByClassName("oneimg")[0]
let twoimg=document.getElementsByClassName("twoimg")[0]
let threeimg=document.getElementsByClassName("threeimg")[0]
let fourimg=document.getElementsByClassName("fourimg")[0]
let displayproductimageone=document.getElementsByClassName("displayproductimageone")[0]
let displayproductimagetwo=document.getElementsByClassName("displayproductimagetwo")[0]
let displayproductimagethree=document.getElementsByClassName("displayproductimagethree")[0]
let displayproductimagefour=document.getElementsByClassName("displayproductimagefour")[0]

oneimg.addEventListener("click",oneimgg)
function oneimgg(){
    displayproductimageone.style.display = "block";
    displayproductimagetwo.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagefour.style.display = "none";
}

twoimg.addEventListener("click",twoimgg)
function twoimgg(){
    displayproductimagetwo.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagefour.style.display = "none";
}

threeimg.addEventListener("click",threeimgg)
function threeimgg(){
    displayproductimagethree.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagetwo.style.display = "none";
    displayproductimagefour.style.display = "none";
}

fourimg.addEventListener("click",fourimgg)
function fourimgg(){
    displayproductimagefour.style.display = "block";
    displayproductimageone.style.display = "none";
    displayproductimagethree.style.display = "none";
    displayproductimagetwo.style.display = "none";
}


