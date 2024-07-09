function encryptText() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    
    document.getElementById('outputText').value = outputText;
    toggleOutput(true);
}

function decryptText() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    document.getElementById('outputText').value = outputText;
    toggleOutput(true);
}

function toggleOutput(show) {
    var muneco = document.getElementById('muneco');
    var outputText = document.getElementById('outputText');
    var subtitle = document.getElementById('subtitle');
    var par = document.getElementById('par');
    var copyButton = document.querySelector('.copy');

    if (show) {
        muneco.style.display = "none";
        subtitle.style.display = "none";
        par.style.display = "none";
        outputText.style.display = "block";
        copyButton.style.display = "block"; // Mostrar el botón de copiar
    } else {
        muneco.style.display = "block";
        subtitle.style.display = "block";
        par.style.display = "block";
        outputText.style.display = "none";
        copyButton.style.display = "none"; // Ocultar el botón de copiar
    }
}

function copyText() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
