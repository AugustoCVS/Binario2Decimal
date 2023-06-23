import { ERR_EMPTY_STRING, ERR_NOT_BINARY } from "../constants";

const inputBinary = document.getElementById("input__binario");
const btnConverter = document.getElementById("btn__converter");
const resultDiv = document.getElementById("resultado");
const errorDiv = document.getElementById("error");

function validateBinaryString(binaryString) {
  // mudar o nome
  const isEmpty = binaryString === "";
  const isBinary = !/^[01]+$/.test(binaryString); // variavel mágica

  if (isEmpty) {
    const errorEmpty = ERR_EMPTY_STRING;
    addError(errorEmpty);
    resultDiv.innerHTML = "";
    return false;
    // throw new Error(ERR_EMPTY_STRING);
  }

  if (isBinary) {
    const errorNotBinary = ERR_NOT_BINARY;
    addError(errorNotBinary);
    resultDiv.innerHTML = "";
    return false;
    // throw new Error(ERR_NOT_BINARY)
  }

  return true;
}

function convertBinaryToDecimal(binaryString) {
  if (!validateBinaryString(binaryString)) return;

  let response = [...binaryString].reduce((acc, bit, index) => {
    return acc + Number(bit) * Math.pow(2, binaryString.length - index - 1); // transformar a conta em função
  }, 0);
  errorDiv.innerHTML = ``; // mudar para innerText ou textContent
  addResponse(response);
}

// tem a mesma estrutura, reutilizar
function addResponse(response) {
  // mudar o nome para ser mais legível
  resultDiv.innerHTML = `<p> O numero em decimal é: ${response} </p>`;

  addImg(false);
}

function addError(error) {
  errorDiv.innerHTML = `<p class="errorMessage">${error}</p>`;

  addImg(true);
}

let currentImg = null;

function addImg(isError) {
  if (currentImg) {
    currentImg.remove();
  }

  const divResponsesImg = document.createElement("div");
  divResponsesImg.classList.add(isError ? "errorImg" : "acceptImg");
  document.body.appendChild(divResponsesImg);

  // reutilizar o codigo, fazer em um so
  if (divResponsesImg.classList.contains("acceptImg")) {
    const imgAcceptElement = document.createElement("img");
    imgAcceptElement.src = "./img/gatinhoFeliz.jpg"; // variavel mágica
    divResponsesImg.appendChild(imgAcceptElement);
  } else if (divResponsesImg.classList.contains("errorImg")) {
    const imgErrorElement = document.createElement("img");
    imgErrorElement.src = "./img/gatinhoTriste.jpg"; // variavel mágica
    divResponsesImg.appendChild(imgErrorElement);
  }

  currentImg = divResponsesImg;
}

btnConverter.addEventListener("click", () => {
  convertBinaryToDecimal(inputBinary.value);
  inputBinary.value = "";
});
