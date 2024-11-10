var img_inp = document.getElementById("pdf-input")
var pdf_v = document.getElementById("pdf-v")
var next = document.getElementById("next-btn")
var pdf_upload = document.getElementById("pdf-upload")
var iframe = document.getElementById("iframe-pdf-viewer")
img_inp.onchange = function () {

    // var user_fafa = document.getElementById("user-fafa");

    // var p_img = document.getElementById("profile-img");
    var reader = new FileReader();
    reader.readAsDataURL(img_inp.files[0]);
    reader.onload = function () {
        var file_name = reader.result;
        // alert(file_name)
        iframe.src=file_name;
        pdf_v.style.display="block"
        pdf_upload.style.display="none"



    }

}
next.onclick=function(){
          pdf_v.style.display="none"
        pdf_upload.style.display="flex"
}
