class Cliente {
    nome;
    cpf;
    
}

class ContaCorrente {
    agencia;
    cliente;


    _saldo=0;


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    
    depositar(valor){
        if(valor <= 0 ){
            return;
        }
            this._saldo += valor;
        }
    transferir(valor , conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }   
}

const cliente1 = new Cliente(); 
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1
const conta2 = new ContaCorrente();
conta2.cliente = cliente2
conta2.agencia = 102;
ContaCorrenteRicardo.depositar(500);


console.log (conta2);
console.log(ContaCorrenteRicardo);

ContaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);

