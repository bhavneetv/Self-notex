var btn = document.getElementsByClassName("notes_view")





// code for hide black screen
var close = document.querySelector("#closex")
var closee = document.querySelector("#closexx")
var black = document.querySelector(".black_page")
var pdf_in = document.querySelector("#pdf")

var u_txt = document.querySelector("#unit_name")
var ch_txt1 = document.querySelector("#ch_name1")
var ch_txt2 = document.querySelector("#ch_name2")
var ch = document.querySelector("#ch")
close.onclick = function () {
    black.style.display = "none"
}
closee.onclick = function () {

    black.style.display = "none"
}

// code for chapter name find througn btn 
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        var unit_parent = this.parentElement.parentElement;
        var unit_name = unit_parent.querySelector("h1").innerHTML
        var ch1 = this.getAttribute("c1")
        var ch2 = this.getAttribute("c2")
        u_txt.innerHTML = unit_name
        ch_txt1.innerHTML = ch1
        ch_txt2.innerHTML = ch2

        var ch2_link = this.getAttribute("c2_link")
        var ch1_link = this.getAttribute("c1_link")

        if (ch1 == null && ch2 == null && ch2_link == null) {
            // var ch_ll = this.getAttribute(ch1_link)
            // alert(ch1_link)
            localStorage.setItem("chapter", ch1_link)
            // black.style.display="block"
            window.open("pages/pdf note/index.html", "_parent")
            // ch.style.display="none"
        }
        else if (ch1 != null && ch2 != null && ch2_link != null) {
            black.style.display = "block"

            ch.style.display = "block"
            var ch_open_btn = document.getElementsByClassName("ch_open_btn")

            for (var l = 0; l < ch_open_btn.length; l++) {
                ch_open_btn[l].onclick = function () {
                    var v = this.getAttribute("v")
                    // alert(v)
                    if (v == "1") {
                        localStorage.setItem("chapter", ch1_link)
                    }
                    else if (v == "2") {

                        localStorage.setItem("chapter", ch2_link)
                    }
                    window.open("pages/pdf note/index.html", "_parent")

                }
            }




        }




    }
}

var form_r = document.getElementById("rate_form")
var rate_sub = document.getElementById("btn-rate")
form_r.onsubmit = function () {
    // alert()
    // alert(rate_sub.innerHTML)
    rate_sub.style.backgroundColor = "#008000"
    rate_sub.innerHTML = "send " + '<i class="fa-solid fa-check"></i>'
    rate_sub.style.color = "white"

    setTimeout(() => {
        rate_sub.innerHTML = "Submit &nbsp " + '<i class="fa fa-paper-plane"aria-hidden="true"></i>'
        rate_sub.style.backgroundColor = "rgb(255, 192, 0)"
        rate_sub.style.color = "black"
    }, 3000);
}

var xc = document.getElementById("android")
var x = document.getElementById("closeex")
x.onclick=function(){
xc.style.display="none"
}

// window.onload=function(){
//     setTimeout(function(){
//         xc.style.display="block"
//     },16000)
// }

window.onload=function(){
    if(localStorage.getItem("page_visit")== null){
        
       pop()
        localStorage.setItem("page_visit",1)
    }
    else{
        var s =localStorage.getItem("page_visit")
        var i = parseInt(s)
        localStorage.setItem("page_visit", i+1 )
    }
    
    if(localStorage.getItem("page_visit") > 17){
        
       pop()
        localStorage.setItem("page_visit" , 1)
    }
}

function pop() {
     setTimeout(function(){
            xc.style.display="block"
        },10000) }
