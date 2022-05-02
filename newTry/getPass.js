function erstellen() {

    var favW = document.getElementById("favW").value;
    var favS = document.getElementById("favS").value;
    var url = document.getElementById("url").value;


    var password;
    var w = favW.length;

    function generateRandom(maxLimit = w){
      let rand = Math.random() * maxLimit;    
      rand = Math.round(rand);
      return rand;
    }

    var firstNumber = generateRandom(w);
    var secondNumber = generateRandom(w);

    while(firstNumber == 0){
      firstNumber = generateRandom(w);
    }
    while (secondNumber == 0){
      secondNumber = generateRandom(w);
    }
    
    while(firstNumber == secondNumber){
      secondNumber = generateRandom(w);
    }
    
    
    // var firstLetter = favW.charAt(firstNumber - 1 );
    // var secondLetter = favW.charAt(secondNumber - 1);

    const newfavW = favW.slice (0, firstNumber - 1) + favW.charAt(firstNumber - 1).toUpperCase() + favW.slice(firstNumber);
    //alert(newfavW);

    const finalfavW = newfavW.slice(0, secondNumber -1) + newfavW.charAt(secondNumber -1).toUpperCase() + newfavW.slice(secondNumber);

    password = finalfavW + favS + firstNumber + '' + secondNumber;
    alert(password);
}


document.getElementById("submitBtn").addEventListener("click", erstellen);