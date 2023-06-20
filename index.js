const input = '0110';
const result = fn(input);

function fn(input){

    let listaConvertida = []
    let numeroConvertido = 0;

    for(let j = 0; j < input.length; j++){
        let numero = input[j]
        if(numero === "0"){
            listaConvertida.push(0)
        }else if (numero === "1"){
            listaConvertida.push(1)
        }
    }

    for(let i = 0; i < listaConvertida.length; i++){

        n = listaConvertida.length;
        num = listaConvertida[i];
        numeroConvertido += num *(2**(n-i-1));
    }
    return numeroConvertido;
}

console.log(result); // 6