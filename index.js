function pick(val){
    document.getElementById("a").value +=val;
}

function clr(val){
    document.getElementById("a").value =" ";
}




function slove(val){
   const x = document.getElementById("a").value;
   const y = eval(x);
   document.getElementById ("a").value = y;
}