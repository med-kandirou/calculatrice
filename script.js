var input=document.getElementById("input");
var op=""; // operation
function print(id){
    if(id=="equal"){
        input.innerText=eval(op);
         op="";
    }
    else if(id=="ac"){
        input.innerText='';
        op="";
    }
    else{
        input.innerText+=id;
        op+=id;

    }



}

