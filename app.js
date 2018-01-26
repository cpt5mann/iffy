console.log("hello world");


var box=document.getElementById("boxy");
var input=boxy.value;
var output=document.getElementById("output");
var button=document.getElementById("btn");

function check(){
if(input==="1"){
output.innerHTML="Yuh. They call it a LINE."
}else if(input==="2"){
output.innerHTML="Really? Are you dumb or something? 2 Sides??"
}else if(input==="3"){
output.innerHTML="Triangle"
}else if(input==="4"){
 output.innerhTML="Square"   
}else if(input==="5"){
    output.innerHTML="Pentagon"
    }else if(input==="6"){
        output.innerHTML="Hexagon"
    }else if(input==="7"){
        output.innerHTML="Heptagont"
    }else if(input==="8"){
        output.innerHTML="Octagon"
    }else if(input==="9"){
output.innerHTML="Nonagon"
    }else if(input==="10"){
        output.innerHTML="Decagon"
    }else{
        output.innerHTML="What you talking about, child? There ain't no shape with THAT many sides! "
    }

};

button.addEventListener("click",check);






