alert("Welcome to 20! This is a competition to see which player gets closer to th enumber 20. you are going to play agenst the computer. You will draw nimbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number press'y'.");

alert("Now... it's the computer's turn.")

var comp = [];

do{
    var ran = Math.floor(Math.random() * 10) + 1
    for(var i = 1; i <= ran; i++){
        comp.push(ran);
    }
    
    var totalComp = comp.length
    alert(`The new number is ${ran}.    The computer total is ${totalComp}.`)
}while(totalComp <= 16);