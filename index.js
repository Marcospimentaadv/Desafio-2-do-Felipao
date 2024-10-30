  
function calcularSaldoPartidas(vitorias, derrotas)  {  
  
    const saldo = vitorias - derrotas;  
    return saldo;  
}  

  
const vitorias = 100;  
const derrotas = 20;    

  
const saldoRanqueadas = calcularSaldoPartidas(vitorias, derrotas)
console.log 
console.log(`Saldo de Rankeadas:${"O Herói tem de saldo de " + saldoRanqueadas}`);
console.log("Nivel Ouro")
