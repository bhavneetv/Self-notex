var back = document.getElementById("back")


var note_name = document.getElementById("note-name-h1")
var textarea = document.getElementById("textarea")

var btn = document.getElementsByClassName("note-b")
// var save = document.getElementById("save")
// var edit = document.getElementById("pen")
var save = document.getElementById("save")
var del = document.getElementById("del")
var note_m = document.getElementById("note-main")
var textarea_m = document.getElementById("textarea-main")
back.onclick = function () {
    textarea_m.style.display = "none"
    note_m.style.display = "flex"
}


window.onload = function () {
    if (localStorage.getItem("note1") == null && localStorage.getItem("note2") == null && localStorage.getItem("note3") == null) {
        localStorage.setItem("note1", "")
        localStorage.setItem("note2", "")
        localStorage.setItem("note3", "")

    }

}
for (var h = 0; h < btn.length; h++) {
    btn[h].onclick = function () {
        var n = this.getElementsByTagName("H3")
        //   alert(n[0].innerHTML)
        note_name.innerHTML = n[0].innerHTML

        note_m.style.display = "none"
        textarea_m.style.display = "block"

        var note = this.getAttribute("note")
        // alert(note)



        if (localStorage.getItem(note) == null) {
            localStorage.setItem(note, textarea.value)
        }
        else {
            textarea.value = localStorage.getItem(note)
        }

        save.onclick = function () {
            // alert(note)
            localStorage.setItem(note, textarea.value)
            alert("Saved !")

        }
        del.onclick = function () {
            if (localStorage.getItem(note) == null) {
                alert("Deleted !")
                textarea.value = ""
            }
            else {

                localStorage.removeItem(note)
                textarea.value = ""
                alert("Deleted !")
            }
        }






    }
}



// bk.onclick=function(){
//     var note = document.createElement("DIV")
// var dad = document.getElementById("cha")
// note.setAttribute("class","my-note-box note-b")
// note.setAttribute("note","link")
// var i = document.createElement("I")
// i.setAttribute("class","fa-regular fa-note-sticky")
// var h= document.createElement("H3")
// h.innerHTML="NOTE "

// note.appendChild(i)
// note.appendChild(h)

// dad.appendChild(note)
// }