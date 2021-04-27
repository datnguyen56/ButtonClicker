function myFunction1(){
    alert("I Got You!");
}

function myFunction2(){
    alert("I told you NOT to CLICK!");
}

function myFunction3(){
    alert("Don't be MAD when you got BAIT");
    if (confirm("Are You MAD?")) {
        txt = "Haha, You're MAD";
        } else {
        txt = "Don't Cry Just Smile :)";
        }
        document.getElementById("text").innerHTML = txt;
}
