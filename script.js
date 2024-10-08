/*
1-
let numero;
let mult=0;
numero= Number(prompt("insira o numero para ter a tabuada"));

while(mult<=10){
    let result=numero*mult;
    mult++
    alert(result)
}

2-
let n=1, result
let j=1

while (n<= 9){
    console.log('tabuada do ' +n)
    j=1
    while(j<=10){
        
        result=n*j
        
        console.log(n + 'x'+ j +'=' + result)
    j++
    }

    n++
}

3-
let n, n2=0

do{
    n=Number(prompt("insira um numero positivo para ser somado ,insira 0 para fechar"))
    n2=n2+n
    console.log(n2)
}while(n!=0)


4-
let n = Number(prompt("Fale o numero: "))
let t=1, i=1

while(i<n){
    t=t*(n-i)
    i++
    console.log(t)
}

5-
let idade;
let altura;
let peso;
let somaIdades = 0;
let quantidade = 0;
let alturaMaisJovem = 0; 
let pesoMaisVelho = 0;   
let idadeMaisJovem = 0;  
let idadeMaisVelho = 0;   
let continuar = "sim"; 

while (continuar === "sim") {
    idade = Number(prompt("Digite a idade da pessoa:"));
    altura = Number(prompt("Digite a altura da pessoa (em metros):"));
    peso = Number(prompt("Digite o peso da pessoa (em kg):"));

    if (idade < idadeMaisJovem || idadeMaisJovem === 0) {
        alturaMaisJovem = altura;
        idadeMaisJovem = idade; 
    }
    
    if (idade > idadeMaisVelho) {
        pesoMaisVelho = peso;
        idadeMaisVelho = idade;
    }

    somaIdades += idade;
    quantidade++;

    continuar = prompt("Deseja inserir dados de outra pessoa? (sim/não)");
}

let mediaIdades = somaIdades / quantidade;

console.log(`Altura da pessoa mais jovem: ${alturaMaisJovem} m`);
console.log(`Peso da pessoa mais velha: ${pesoMaisVelho} kg`);
console.log(`Média das idades: ${mediaIdades}`);
*/
