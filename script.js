const button = document.querySelector("button").addEventListener("click",generateQr);
const textInput = document.getElementById("text");
const QrCode = document.getElementById("qrcode");

function generateQr(){
    let text = textInput.value.trim();
    if(text.length == 0){
        window.alert("Invalid Url");
    } else {
        let link  =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;
        QrCode.src= link;
    }
}