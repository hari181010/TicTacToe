let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#res");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
       
        


    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}



const checkWinner=()=>{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!=""&& pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("Winner",pos1);

                showwinner(pos1);
            }
        }

    }
    
};
newgamebtn.addEventListener("click",resetgame);
res.addEventListener("click",resetgame);

