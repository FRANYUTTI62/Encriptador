var button1 = document.getElementById("encriptar");
var button2 = document.getElementById("desencriptar");
var button3 = document.getElementById("copiar");
var image = document.getElementById("muñeco");
var text = document.getElementById("titulo");
var text2 = document.getElementById("mensaje");
var input = document.getElementById("input");

button1.disabled = true;
button2.disabled = true;
button3.style.display = "none";

input.addEventListener("input", function() {
    if (input.value.trim() === "") {
        button1.disabled = true;
        button2.disabled = true;

    } else {
        button1.disabled = false;
        button2.disabled = false;
    }
});

function encryptButton() {
    var textToEncrypt = input.value;
    image.style.display = "none";
    text.style.display = "none";
    text2.style.display = "none";
    textToEncrypt = encrypt(textToEncrypt);
    console.log(textToEncrypt);
    var paragraph = document.getElementById('resultadoMensaje');
    paragraph.innerText = textToEncrypt;
    button3.style.display = "block";
}

function desencryptButton() {
    var textToEncrypt = input.value;
    image.style.display = "none";
    text.style.display = "none";
    text2.style.display = "none";
    textToEncrypt = desencrypt(textToEncrypt);
    console.log(textToEncrypt);
    var paragraph = document.getElementById('resultadoMensaje');
    paragraph.innerText = textToEncrypt;
    button3.style.display = "block";
}

function encrypt(textToEncrypt){
    if (textToEncrypt.includes('e')){
        var textToEncrypt = textToEncrypt.replace(/e/g, 'enter');
    }
    if (textToEncrypt.includes('i')){
        var textToEncrypt = textToEncrypt.replace(/i/g, 'imes');
    }
    if (textToEncrypt.includes('a')){
        var textToEncrypt = textToEncrypt.replace(/a/g, 'ai');
    }
    if (textToEncrypt.includes('o')){
        var textToEncrypt = textToEncrypt.replace(/o/g, 'ober');
    }
    if (textToEncrypt.includes('u')){
        var textToEncrypt = textToEncrypt.replace(/u/g, 'ufat');
    }
    return textToEncrypt;
}

function desencrypt(textToEncrypt){
    if (textToEncrypt.includes('enter')){
        var textToEncrypt = textToEncrypt.replace(/enter/g, 'e');
    }
    if (textToEncrypt.includes('imes')){
        var textToEncrypt = textToEncrypt.replace(/imes/g, 'i');
    }
    if (textToEncrypt.includes('ai')){
        var textToEncrypt = textToEncrypt.replace(/ai/g, 'a');
    }
    if (textToEncrypt.includes('ober')){
        var textToEncrypt = textToEncrypt.replace(/ober/g, 'o');
    }
    if (textToEncrypt.includes('u')){
        var textToEncrypt = textToEncrypt.replace(/ufat/g, 'u');
    }
    return textToEncrypt;
}

button1.addEventListener("click", function(event) {
    event.preventDefault();
});

button2.addEventListener("click", function(event) {
    event.preventDefault();
});

function copyButton() {
    textToCopy = document.getElementById('resultadoMensaje').innerText;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
}   