

var input=document.getElementById("boxy");
var output=document.getElementById("output");
var button=document.getElementById("btn");

button.addEventListener("click", function(){
    switch(input.value){
 case '1':       
        output.innerHTML="Yuh. They call it a LINE.";
        break;
        case '2':
        output.innerHTML="U dumb or something? TWO sides?";
        break;
       case '3':
        output.innerHTML="Triangle";
        break;
        case '4':
        output.innerHTML="Square";
        break;
        case '5':
        output.innerHTML="Pentagon";
        break;
        case '6':
        output.innerHTML="Heptagon";
        break;
        case '7':
        output.innerHTML="7-gon";
        break;
        case '8':
        output.innerHTML="Octagon";
        break;
        case '9':
        output.innerHTML="Nonagon";
        break;
        case '10':
        output.innerHTML="Decagon";
        break;
    default:
    output.innerHTML="Type something in already, you dummy!";
    break;
    case 'hi':
    output.innerHTML="NUMBERS!! OH MY GOODNESS!! WHAT PART OF THAT DO YOU NOT UNDERSTAND!! *Facepalm*";
    





}});