// class ContaBanco {
//     constructor(saldo) {
//         this.saldo = saldo;
//         this.deposito = function () {
//             return `meu saldo é de ${saldo}`;
//         };
//         this.saque = function (tira) {
//            return `saque com sucesso, sobrou: ${saldo - tira}`;
//         };
//     }

// }

// let mona = new ContaBanco(20);

// console.log(mona.deposito());
// console.log(mona.saque(5));



let caixa = document.querySelector('.caixa');
let confirmar = document.querySelector('.confirm');
let saque = document.querySelector('.saque');
let deposito = document.querySelector('.deposito');
let fatura = document.querySelector('.fatura');
let input = document.querySelector('.normal');
let form = document.querySelector('.formulario');
let elemento1 = document.querySelector('.element1');
let span = document.querySelector('.span');

let valor;
let soma = 0;
let num;
let sub = 0;
let depositado = [];
let saqueado = [];
let total = 0;



confirmar.addEventListener('click', () =>{
if (form.value == '1234') {
    elemento1.textContent = 'Preenche o formulario para depositar ou tirar o seu dinheiro'
   saque.classList.remove('d-none');
   deposito.classList.remove('d-none');
   confirmar.classList.add('d-none');
   fatura.classList.remove('d-none');
   form.classList.add('d-none');
   input.classList.remove('d-none');
} else{
   
    form.setAttribute('placeholder', 'PIN INCORRETO');
    form.value = '';
}
});

deposito.addEventListener('click', () =>{
valor = input.value;
valor = Number(valor);
// console.log(typeof valor);
if (isNaN(valor)) {
    input.setAttribute('placeholder', 'Numero invalido');
        input.value = ''; 
    setTimeout(() => {
        location.reload();
    }, 1000);
    
} else{
    soma += valor;
    
    input.setAttribute('placeholder', `tens ${soma}$ depositado em sua conta`);
    input.value = ''; 
}
depositado.push(soma);

//  total = depositado.reduce(function (acumulador, valor, indice, array) {
//     acumulador+= valor;
//  return acumulador;
 
//  }, 0);
total = soma;
//  console.log(total);
span.textContent = total;
});

saque.addEventListener('click', () =>{
  let atributo = input.getAttribute('placeholder');
   valor = atributo.match(/\d+/)[0];
  num = input.value;
  console.log(num);
  num = Number(num);
  if (isNaN(num)) {
    input.setAttribute('placeholder', 'Numero invalido');
        input.value = ''; 
    setTimeout(() => {
        location.reload();
    }, 1000);
    
} else{
    sub = valor - num;
    if (sub != Math.abs(sub)) {
        input.setAttribute('placeholder', 'SALDO INSUFICIENTE');
        input.value = '';   
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else{

        input.setAttribute('placeholder', `${num}$ retirado com sucesso, sobrou: ${sub}`);
        input.value = ''; 
    }
}

total = sub;
span.textContent = total;
});

// var atributo = element.getAttribute(nomeDoAtributo);
// thenum = "foo56bar6".match(/\d+/)[0];
