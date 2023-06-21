const inputBinary = document.getElementById("input__binario");
const btnConverter = document.getElementById("btn__converter");
const resultDiv = document.getElementById("resultado");
const errorDiv = document.getElementById("error");

const ERR_EMPTY_STRING = 'Input string is empty.';
const ERR_NOT_BINARY = 'Input string is not a binary number.';

function validateBinaryString(binaryString) {
    if (binaryString === ''){
        const errorEmpty = ERR_EMPTY_STRING;
        addError(errorEmpty)
        resultDiv.innerHTML = ""
        return false;
        // throw new Error(ERR_EMPTY_STRING);
    } 
    if (!/^[01]+$/.test(binaryString)) {
        const errorNotBinary = ERR_NOT_BINARY;
        addError(errorNotBinary)
        resultDiv.innerHTML = ""
        return false;
        // throw new Error(ERR_NOT_BINARY)
    };

    return true;
}

function convertBinaryToDecimal(binaryString){
    if (!validateBinaryString(binaryString)) {
        return; 
    }else{
        let response = [...binaryString].reduce((acc, bit, index) => {
            return acc + Number(bit) * Math.pow(2, binaryString.length - index - 1)
        }, 0)
        errorDiv.innerHTML = ``
        addResponse(response);
    }
    
}

function addResponse(response){
    resultDiv.innerHTML = `<p> O numero em decimal é: ${response} </p>`

    addImg(false);
}

function addError(error) {
    errorDiv.innerHTML = `<p class="errorMessage">${error}</p>`;

    addImg(true)
  }

let currentImg = null

function addImg(isError) {

    if (currentImg) {
        currentImg.remove();
      }

    const divResponsesImg = document.createElement("div");
    divResponsesImg.classList.add(isError ? "errorImg" : "acceptImg");
    document.body.appendChild(divResponsesImg);

    if(divResponsesImg.classList.contains("acceptImg")){

        const imgAcceptElement = document.createElement("img");
        imgAcceptElement.src = "./img/gatinhoFeliz.jpg";
        divResponsesImg.appendChild(imgAcceptElement);

    }else if(divResponsesImg.classList.contains("errorImg")){

        const imgErrorElement = document.createElement("img");
        imgErrorElement.src = "./img/gatinhoTriste.jpg";
        divResponsesImg.appendChild(imgErrorElement);
    }  
    
    currentImg = divResponsesImg;
}

btnConverter.addEventListener('click', function() {
    convertBinaryToDecimal(inputBinary.value);
    inputBinary.value = ""
});