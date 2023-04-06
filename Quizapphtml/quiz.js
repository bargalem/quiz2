const QuizOB=[
    {
       Question:"1.HTML stands for -",
         a:"HighText Machine Language",
         b:"HyperText and links Markup Language",
         c:"HyperText Markup Language",
         d:"None of these",
         ans:"ans3"

},
{
    Question: "2.The correct sequence of HTML tags for starting a webpage is -",
    a:"Head, Title, HTML, body",
    b:"HTML, Head, Title, Body",
    c:"HTML, Body, Title, Head",
    d:"HTML, Head, Title, Body",
    ans:"ans2"  


},
{
    Question: "3.Which of the following element is responsible for making the text bold in HTML?",
    a: "pr tag",
    b: "a tag",
    c: "b tag",
    d: "br tag",
    ans: "ans3",  

},{

    Question: "4.The hr tag in HTML is used for -",
    a: "new line",
    b: "vertical ruler",
    c: "new paragraph",
    d: "horizontal ruler",
    ans: "ans4", 

},{
Question:"5.Which of the following element is responsible for making the text italic in HTML?",
a: "it tag",
b: "italic tag",
c: "b tag",
d: "i tag",
ans:"ans3", 

},{

    Question:"6. Which character is used to represent the closing of a tag in HTML?",
    
    a: "/",
    b: ".",
    c: "!",
    d: "//",
    ans:"ans1", 

},{

    Question:"7. Which of the following tag is used for inserting the largest heading in HTML?",
    
    a: "h1",
    b: "h6",
    c: "heading",
    d: "head",
    ans:"ans1", 

},
{

    Question:"8.How do we write comments in HTML?",
    
    a: "/…….",
    b: "!…….",
    c: "/……./",
    d: "/…….!",
    ans:"ans2", 
},
{

    Question:"9.HTML is a subset of ___________",
    
    a: "SGMT",
    b: " SGML",
    c: "SGME",
    d: "XHTML",
    ans:"ans2", 

    
},{
    Question:"10.Among the following, which is the HTML paragraph tag?",
    
    a: "hr",
    b: "pre",
    c: "p",
    d: "a",
    ans:"ans3", 
}

];
let result1={};
result1.totalques=QuizOB.length;

let question=document.querySelector("#quesid");
let option1=document.querySelector("#opt1");
 let option2=document.querySelector("#opt2");
 let option3=document.querySelector("#opt3");
 let option4=document.querySelector("#opt4");

let nextQuesBtn=document.querySelector("#nextQuesBtn");

let ansAll=document.querySelectorAll(".selectAns");
console.log(ansAll);

let markdiv=document.querySelector("#scoreDiv");

let fildsetDiv=document.querySelector("#fieldsetDiv");

let timeDiv=document.querySelector("#timeDiv");
let timeup=document.getElementById("TimeUp");



//load question
let QuesCount=0;
let score=0;
let time=0;


let loadQues=()=>{
    let List=QuizOB[QuesCount];
   
    question.innerHTML=List.Question;

    option1.innerHTML=List.a;
     option2.innerHTML=List.b
    option3.innerHTML=List.c;
     option4.innerHTML=List.d;

    
}

//loadQues();

let getCheckAns=()=>{ 
    let answer;
    ansAll.forEach((currentAns)=>{
     if(currentAns.checked){
        answer=currentAns.id;
     }
    })
    return answer;
    };
   
    let disableBtn=()=>{
        ansAll.forEach((currentAns)=>currentAns.checked=false); 
    }

function funnm(){
//next button click event....................
{
    let checkAns=getCheckAns();
    console.log(checkAns);

if(checkAns==QuizOB[QuesCount].ans){
score++;
};

QuesCount++;

disableBtn();
if(QuesCount<QuizOB.length){
    loadQues();
    
}else{
    markdiv.innerHTML=`score:${score}/${QuizOB.length}
    <button class="btn"onclick="location.reload()";>refresh</button>`
   
}

if(QuesCount<=QuizOB.length){
    fildsetDiv.innerHTML=`${QuesCount}/${QuizOB.length}`
    
}


setInterval(function(){
    time++;
if(time<100 && QuesCount<QuizOB.length){
    
     timeDiv.innerHTML=time;
   
 }else{
    timeup.innerText="Opps!...TIME UP"; 
  clearInterval(time);
  disableBtn();
  markdiv.innerHTML=`score:${score}/${QuizOB.length}
    <button class="btn"onclick="location.reload()">refresh</button>`




}
 
},1000)

}
}

////Result..................


let ques=document.querySelector("ques");

function showResult(){
    
ques.innerText=result1.totalques;
}



