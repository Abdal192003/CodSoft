let string="";
let btn=document.querySelectorAll(".button");
let len=btn.length;
for (var i=0 ; i<len ; i++){
  btn[i].addEventListener("click",function(e){
    if(e.target.innerText === "="){
      string=eval(string);
      document.querySelector("input").value=string;
    }
    else if(e.target.innerText==="C"){
      string="";
      document.querySelector("input").value=string;
    }
    else{
    console.log(e.target);
    string+=e.target.innerText;
    document.querySelector("input").value=string;
    }
  })
};