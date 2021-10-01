// 1º)
function contar(string){
    var reptStrg = string.match(/(.)(?=.*\1)/gi);
    var total = reptStrg.length;
    return 'Quantidade de letras duplicada é: ' + total;
  }
  
  // 2º)
  
  function numeros(){
    var nuArray = [1,2,3,4,5]
    var tras = nuArray.reverse();
    return tras;
  }
  
  // 3º)

  function positivo(n1,n2,n3,n4,n5){
  if (n1 > 0 && n2 > 0 && n3 > 0 && n4 > 0 && n5 > 0 && n1 %1 == 0 && n2 %1 == 0 && n3 %1 == 0 && n4 %1 == 0 && n5 %1 == 0){
    var soma = n1 + n2 + n3 + n4 + n5;
    return 'A soma dos numeros é: ' + soma;
  }
  else{
    return 'ERRO, função só recebe números inteiros positivos';
  }
}