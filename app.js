// Calculo da diferença de peso entre 2 lutadores, eles só poderam lutar caso a diferença de peso seja de 5kg //
let lutadorA = 0
let lutadorB = 0


function exibirTextoNaTela(tag, texto) {
    let campo_texto = document.querySelector(tag);// campo_texto = tag
    campo_texto.innerHTML = texto;//campo texto que é o parametro(tag) pega o innerHTML parametro(texto) -> atribui a tag o texto que está nela
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Calculadora MMA');// tag h1 = texto 'Calculadora MMA'
    exibirTextoNaTela('p', 'Resultado: ?');// tag p = texto 'Resultado: ?'
    exibirTextoNaTela('h3', '0');// tag h3 = texto '0'
    document.getElementById('calculo').removeAttribute('disabled');// libera o botão de calculo
}

exibirMensagemInicial();



function calcularPeso() {
    let lutadorA = document.getElementById('peso-1').value;// pega o valor do input
    let lutadorB = document.getElementById('peso-2').value;// pega o valor do input

    document.getElementById('limpar').innerHTML = "Novo Calculo";

    let resto = lutadorA - lutadorB  // lutadorA 1kg - 7kg lutadorB = - 6kg

    //caso a subtração seja negativa exemplo: 65-71 = -6 que é menor que (-5) não podem lutar
    if (resto >= -5 && resto < 6) { //caso a subtração seja positiva e resto menor que 6 e maio que -6
        exibirTextoNaTela("p", "RESULTADO: PODEM LUTAR");//resto só pode dar 5kg de diferença no máximo pra poderem lutar,se der mais que isso não pode lutar
    } else {                                                  // 15 - 11 = 4 podem lutar 4kg de diferença
        exibirTextoNaTela("p", "RESULTADO: NAO PODEM LUTAR");
    }

    exibirTextoNaTela('h3', diferenca())
    document.getElementById('calculo').setAttribute('disabled', true)// trava o botão de calculo
}


function diferenca(lutadorA, lutadorB) {// função para mostrar um número inteiro positivo na diferenção de peso
    lutadorA = document.getElementById('peso-1').value;
    lutadorB = document.getElementById('peso-2').value;

    if (lutadorA - lutadorB < 0) {
        return lutadorB - lutadorA;
    } else {
        return lutadorA - lutadorB;
    }
}

function novoCalculo() {// função que reseta tudo através do botão novo calculo
    limparNumeros()// limpa os números do input
    exibirMensagemInicial();// exibe as mensagens iniciais
    document.getElementById('limpar').innerHTML = "limpar";// muda o texto do botão novo calculo que agora volta a se chamar limpar
    document.getElementById('calculo').removeAttribute('disabled');// libera o botão de calculo
}


function limparNumeros() {// funçao que limpa os números do input
    lutadorA = document.getElementById('peso-1');
    lutadorA.value = ""

    lutadorB = document.getElementById('peso-2');
    lutadorB.value = ""
}