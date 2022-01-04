var b1 = document.getElementById('botao')
var b2 = document.getElementById('botao2')
var resp = document.getElementById('res')

function calcular(){
    var n1 = prompt('Digite seu número')
    var adivinha = Math.floor(100* Math.random()+1)
    if(n1<adivinha){
        resp.innerText += `Você pensou em ${n1}. Meu número é MAIOR!\n` 
    }else{
        resp.innerText += `Você pensou em ${n1}. Meu número é MENOR!\n`
    }
}

function limpar (){
    resp.innerText = ''
}