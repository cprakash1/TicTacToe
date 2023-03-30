const a1=document.getElementById('a1');
const a2=document.getElementById('a2');
const a3=document.getElementById('a3');
const a4=document.getElementById('a4');
const a5=document.getElementById('a5');
const a6=document.getElementById('a6');
const a7=document.getElementById('a7');
const a8=document.getElementById('a8');
const a9=document.getElementById('a9');
const box=document.getElementById('box')
const reset=document.getElementById('reset');

let player1=[];
let player2=[];

let winner=-1;

const exit=(c)=>{
    a1.disabled=true;
    a2.disabled=true;
    a3.disabled=true;
    a4.disabled=true;
    a5.disabled=true;
    a6.disabled=true;
    a7.disabled=true;
    a8.disabled=true;
    a9.disabled=true;
    if(c){
        box.innerText="Player 1 Won"
    }else{
        box.innerText="Player 2 Won"
    }
    player1=[]
    player2=[]
}

let a=0//player turn
a1.addEventListener('click',()=>{
    if(a==0){
        a1.innerText="X";
        a=1;
        player1.push(1);
        if(checker(player1)){
            exit(1)
        }
    }else{
        a1.innerText="0";
        a=0;
        player2.push(1)
        if(checker(player2)){
            exit(0)
        }
    }
    a1.disabled=true;
});
a2.addEventListener('click',()=>{
    if(a==0){
        a2.innerText="X";
        a=1;
        player1.push(2)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a2.innerText="0";
        a=0;
        player2.push(2)
        if(checker(player2)){
            exit(0)
        }
    }
    a2.disabled=true;
});
a3.addEventListener('click',()=>{
    if(a==0){
        a3.innerText="X";
        a=1;
        player1.push(3)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a3.innerText="0";
        a=0;
        player2.push(3)
        if(checker(player2)){
            exit(0)
        }
    }
    a3.disabled=true;
});
a4.addEventListener('click',()=>{
    if(a==0){
        a4.innerText="X";
        a=1;
        player1.push(4)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a4.innerText="0";
        a=0;
        player2.push(4)
        if(checker(player2)){
            exit(0)
        }
    }
    a4.disabled=true;
});
a5.addEventListener('click',()=>{
    if(a==0){
        a5.innerText="X";
        a=1;
        player1.push(5)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a5.innerText="0";
        a=0;
        player2.push(5)
        if(checker(player2)){
            exit(0)
        }
    }
    a5.disabled=true;
});
a6.addEventListener('click',()=>{
    if(a==0){
        a6.innerText="X";
        a=1;
        player1.push(6)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a6.innerText="0";
        a=0;
        player2.push(6)
        if(checker(player2)){
            exit(0)
        }
    }
    a6.disabled=true;
});
a7.addEventListener('click',()=>{
    if(a==0){
        a7.innerText="X";
        a=1;
        player1.push(7)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a7.innerText="0";
        a=0;
        player2.push(7)
        if(checker(player2)){
            exit(0)
        }
    }
    a7.disabled=true;
});
a8.addEventListener('click',()=>{
    if(a==0){
        a8.innerText="X";
        a=1;
        player1.push(8)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a8.innerText="0";
        a=0;
        player2.push(8)
        if(checker(player2)){
            exit(0)
        }
    }
    a8.disabled=true;
});
a9.addEventListener('click',()=>{
    if(a==0){
        a9.innerText="X";
        a=1;
        player1.push(9)
        if(checker(player1)){
            exit(1)
        }
    }else{
        a9.innerText="0";
        a=0;
        player2.push(9)
        if(checker(player2)){
            exit(0)
        }
    }
    a9.disabled=true;
});
reset.addEventListener('click',()=>{
    a=0;
    a1.innerText="";
    a2.innerText="";
    a3.innerText="";
    a4.innerText="";
    a5.innerText="";
    a6.innerText="";
    a7.innerText="";
    a8.innerText="";
    a9.innerText="";
    a1.disabled=false;
    a2.disabled=false;
    a3.disabled=false;
    a4.disabled=false;
    a5.disabled=false;
    a6.disabled=false;
    a7.disabled=false;
    a8.disabled=false;
    a9.disabled=false;
    box.innerText="";
});
let success=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
const eachCheck=(val,playerval)=>{
    for(let i of playerval){
        if(i==val)return 1;
    }
    return 0;
}
const checker=(playerval)=>{
    console.log(playerval)
    for(let i of success){
        if(eachCheck(i[0],playerval)&&eachCheck(i[1],playerval)&&eachCheck(i[2],playerval)){
            return 1;
        }
    }
    return 0;
}
console.log(checker(player1))