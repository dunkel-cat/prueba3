var numero = parseInt(prompt("Escribe un numero"));
    if (numero %2 == 0){
        if(numero >=2 && numero <= 5)
        document.write("Good");
         else if(numero >=6 && numero <= 20)
        document.write("Genial");
        else if (numero>20 && numero <=100){
            document.write("perfecto");
        }
    }
    else{
        document.write("Odd!");} 

   