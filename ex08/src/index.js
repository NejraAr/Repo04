function main(){
//Komentar1
var myX = 12;
var myY = 19;
var myZ = 24;

myX += 3;
myY += 17;
myZ-=20;
//Komentar2 


    return {
        myX,
        myY,
        myZ
    };
}
console.log(main());
module.exports = main;