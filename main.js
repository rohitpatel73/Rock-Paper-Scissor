let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

let compscorepara = document.querySelector("#comp-score");
let userscorepara = document.querySelector("#user-score");

const msg = document.querySelector("#msg");


const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw, Try Again ! ";
    msg.style.backgroundColor = "rgb(7, 13, 49)";
}
// const userwin = () => {
//     console.log("user is winner.");
// }
// const compwin = () => {
//     console.log("computer is winner.");
// }



const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        // msg.innerText = "You Loss ! ";
        msg.innerText = `You Loss! ${compchoice} beats ${userchoice}` ;
        msg.style.backgroundColor = "red";
    }
}




const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = ", compchoice);


    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true; 
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true; 
        }
        else{
            userwin = compchoice === "rock" ? false : true; 
        }


        showwinner(userwin, userchoice, compchoice);
        
    }
    // else if(userchoice === "stone" && compchoice == "paper" || userchoice === "paper" && compchoice == "scissor" || userchoice === "scissor" && compchoice == "stone"){
    //     compwin();
    // }
    // else {
    //     userwin();
    // }

}








choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("this", userchoice);
        playgame(userchoice);
    });
});
















