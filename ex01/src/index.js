function main(numOne, numTwo){

    var quotient;
    if(numTwo == 0){
        quotient = 'Divide by 0! Cannot divide by zero!';

    } else {

        //promijeniti komentar
        quotient = numOne / numTwo;
        //Promijeniti komentar

    }

    return quotient;
}

console.log(main(15, 3), main(25, 5), main(420, 10), main(55, 0)); //promijeniti unutar ove linije koda
module.exports = main;