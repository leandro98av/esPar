function parImpar (numero){
    if(numero!=0 && numero !=null){
        return numero%2===0 ? 'El número es par' : 'El número es impar';
    }else{
        return 'Error';
    }
}
console.log(parImpar());

