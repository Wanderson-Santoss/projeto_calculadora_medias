const form = document.getElementById('formAtividade');
const imgAprovado = `<img src="./Front-End M8 - Imagens/images/aprovado.png" alt="Imagem festejando" /> `
const imgReprovado = `<img src="./Front-End M8 - Imagens/images/reprovado.png" alt="Imagem decepcionado" /> `
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado"> Aprovado </span> `; 
const spanReprovado = `<span class="resultado reprovado"> Reprovado </span> `; 
const notaMinima = parseFloat(prompt("Digite a nota mímima"));


let linhas = ``

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();  
    atualizaTabela();
    atualizaMediaFinal();
});

//Função responsável pela criação de mais uma linha, ou seja
//mais um nome e mais uma nota para dizer se esta Aprovada ou Reprovada
function adicionaLinha(){
    const inputNomeAtividade  = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');
    
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida. `);
    }else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = `<tr>`;
    //Contatenação de ( linha = linha + (outro conteudo)  abreviando para apenas (+=))
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;     // ? para dizer que foi aprovado, dando consição de (if), já para utilizar o (else), colocamos os 2 pontos (:), tendo como valor reprovado
    linha += `</tr>`;

    linhas += linha;
    }


    inputNomeAtividade.value ='';
    inputNotaAtividade.value='';
}


//Função responsável por atualizar os dados no final da tabela
//Pega todos os conteudos digitados, salva e replica ao na tela
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal ();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado ;

}

function calculaMediaFinal (){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];  //mesma concatenação, somaDasNotas recebe ele mesmo e soma com o que esta em notas [i]
    } 
    //Let i começa como 0. Enquanto o i for Menor (notas.length) Que seria a quantidade de notas que o Usuário ineseriu 
    //o i++ serve para incrementar (somar mais 1) cada vez que o i entrar no laço for

    return somaDasNotas / notas.length;  //Criei uma constante média que recebe o valor somado ja das notas e após isso eu divido pela quantidade de notas digitadas ou seja notas.length

}



//alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value} `);