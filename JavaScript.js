var transicoes = 
{
    set tset(value)
    {
        var aux = value
        aux = aux.replace(/[()]/g, "")
        aux = aux.replace(/[=,]/g, " ").split(" ")
        if(transicoes[(aux[0] + " " + aux[1])] != null)
            transicoes[(aux[0] + " " + aux[1])] += (" | " + aux[2] + " " + aux[3] + " " + aux[4])
        else
            transicoes[(aux[0] + " " + aux[1])] = (aux[2] + " " + aux[3] + " " + aux[4])
    }
}, inicial, 
final =
{
    set fset(value)
    {
        value = value.split(" ")
        final = value
    }
},
palavra = 
{
    set pset(value)
    {
        palavra[0] = "*"
            for(var i = 1; i < value.length+1; i++)
            {
                palavra[i] = value[i-1]
            }
    }
};new Array()
var cnt = 0

//$("#transicoes").mask("(q0,A)=(q0,A, )");

function adicionar(){
    //Adicionar todas as transações de estados
    transicoes.tset = document.getElementById("transicoes").value
    //mostrar na tela todas as transações já adicionadas
    document.getElementById("mostrarTransacoes").innerHTML += document.getElementById("transicoes").value +'<br>'
     //contador responsavel para determinar as linhas
     cnt++
     document.getElementById('transicoes').value='';
}

function concluir(){
    document.getElementById("ResultadoPalavra").innerHTML = ""
    var ponteiro
    ponteiro = 0
    var auxinicial = inicial
    while(true)
    {
        if(transicoes[auxinicial + " " + palavra[ponteiro]] != null)
        {
            var acao = transicoes[auxinicial + " " + palavra[ponteiro]]
            acao = acao.split(" ")

            palavra[ponteiro] = acao[1]

            if(acao[2] == ">")
                ponteiro++
            else
                ponteiro--
            
                auxinicial = acao[0]
        }
        else
            break
    }
    if(auxinicial == final)
        document.getElementById("resultado").innerHTML = "Aceitado"
    else
        document.getElementById("resultado").innerHTML = "Rejeitado"
    
    var i = 0
    while(palavra[i] != null)
    {
        document.getElementById("ResultadoPalavra").innerHTML +=  palavra[i]
        i++
    } 
}

function adicionarInicial()
{
    inicial = document.getElementById("estadoInicial").value
}

function adicionarFinal()
{
    final.fset = document.getElementById("estadoFinal").value
}

function adicionarPalavra()
{
    palavra.pset = document.getElementById("palavra").value
}