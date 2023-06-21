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

    addImgAccept();
}

function addError(error) {
    errorDiv.innerHTML = `<p class="errorMessage">${error}</p>`;

    addImgError()
  }

  function addImgError() {
    const divResponsesImg = document.createElement("div");
    divResponsesImg.classList.add("errorImg");
    document.body.appendChild(divResponsesImg);

    const imgElement = document.createElement("img");
    imgElement.src = "./img/gatinhoTriste.jpg";
    divResponsesImg.appendChild(imgElement);

    const previousImg = document.querySelector(".acceptImg");
    if (previousImg) {
        previousImg.remove();
    }
}

function addImgAccept() {
    const divResponsesImg = document.createElement("div");
    divResponsesImg.classList.add("acceptImg");
    document.body.appendChild(divResponsesImg);

    const imgElement = document.createElement("img");
    imgElement.src = "./img/gatinhoFeliz.jpg";
    divResponsesImg.appendChild(imgElement);

    const previousImg = document.querySelector(".errorImg");
    if (previousImg) {
        previousImg.remove();
    }
}


btnConverter.addEventListener('click', function() {
    convertBinaryToDecimal(inputBinary.value);
    inputBinary.value = ""
});