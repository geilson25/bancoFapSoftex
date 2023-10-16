// Definindo o objeto 'banco' que contém informações da conta e funções para operações bancárias
const banco = {
    agencia: "0001",
    conta: "1956172-1",
    tipoConta: "Corrente",
    saldo: 19525318.23,
    movimentacoes: [],

    // Função para buscar o saldo da conta
    buscarSaldo: function () {
        return this.saldo;
    },

    // Função para realizar um depósito
    deposito: function (valor) {
        this.saldo += valor;
        this.registrarMovimentacao(`Depósito de R$ ${valor}`);
    },

    // Função para realizar um saque
    saque: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            this.registrarMovimentacao(`Saque de R$ ${valor}`);
        } else {
            this.registrarMovimentacao("Tentativa de saque sem fundos suficientes");
            alert("Saldo insuficiente");
        }
    },

    // Função para retornar o número da conta
    numeroDaConta: function () {
        return this.conta;
    },

    // Função para registrar movimentações na conta
    registrarMovimentacao: function (descricao) {
        const data = new Date().toLocaleString();
        this.movimentacoes.push({ data, descricao });
    }
};

// Função para exibir o saldo da conta
function exibirSaldo() {
    const extrato = document.getElementById("extrato");
    extrato.style.display = "block";
    document.getElementById("movimentacoes").innerHTML = "";

    const saldoLi = document.createElement("li");
    saldoLi.textContent = `Saldo Atual: R$ ${banco.buscarSaldo().toFixed(2)}`;
    document.getElementById("movimentacoes").appendChild(saldoLi);
    exibirExtrato();
}

// Função para exibir o extrato de movimentações
function exibirExtrato() {
    const extrato = document.getElementById("extrato");
    extrato.style.display = "block";
    document.getElementById("movimentacoes").innerHTML = "";

    banco.movimentacoes.forEach((movimentacao) => {
        const li = document.createElement("li");
        li.textContent = `${movimentacao.data} - ${movimentacao.descricao}`;
        document.getElementById("movimentacoes").appendChild(li);
    });
}

// Função para atualizar o saldo exibido na página
function atualizarSaldo() {
    const saldo = document.getElementById("saldo");
    saldo.textContent = `R$ ${banco.buscarSaldo().toFixed(2)}`;
}

// Adiciona um evento de clique ao botão 'Número da Conta' para redirecionar para 'numero_da_conta.html'
const numeroContaBtn = document.querySelector(".btn");
numeroContaBtn.addEventListener("click", function () {
    window.location.href = "numero_da_conta.html";
});
