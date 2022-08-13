const textarea=document.getElementById("msg-input");
const textoutput=document.getElementById("msg-output");
const button=document.getElementById("but");
const button2=document.getElementById("but2");
const buttonCopy=document.getElementById("butcopy");
const root=document.querySelector(":root");

function transferAnimOn(){
    root.style.setProperty("--rotate","rotate ease 1.5s infinite");
}
function transferAnimOff(){
    root.style.setProperty("--rotate","none");
}
function padlockAnimOff(){
    root.style.setProperty("--padlock","0");
}
function padlockAnimOn(){
    root.style.setProperty("--padlock","1");
}

function inputAnimation(msg) {
    let input=textarea.value;
    transferAnimOn();
    if(msg!=="")padlockAnimOn();
    let inputInterval=setInterval(() => {
        if (input.length==0){
            outputAnimation(msg);
            clearInterval(inputInterval);
            return};
        input=input.slice(1,input.length -1);
        textarea.value=input;
    }, 60);
    
}

function outputAnimation(msg) {
    let cont=1;
    let output="";
    let outputInterval=setInterval(() => {
        if (cont>msg.length){
            transferAnimOff();
            padlockAnimOff();
            clearInterval(outputInterval);
            return
        };
        output=msg.slice(msg.length-cont,msg.length);
        textoutput.value=output;
        cont++;
    }, 40);
    
}

function encrypt(){
    textoutput.value="";
    const input=textarea.value;
    let output="";
    for (char of input){
        switch (char) {
            case "e":
                output+="enter";
                break;
            case "i":
                output+="imes";
                break;
            case "a":
                output+="ai";
                break;
            case "o":
                output+="ober";
                break;
            case "u":
                output+="ufat";
                break;
        
            default:
                output+=char;
                break;
        }
    }

    inputAnimation(output);
    

    // return output;
}

function decrypt() {
    textoutput.value="";
    const input=textarea.value;
    let output="";

    output= input.replace(/enter/gi,"e");
    output= output.replace(/imes/gi,"i");
    output= output.replace(/ai/gi,"a");
    output= output.replace(/ober/gi,"o");
    output= output.replace(/ufat/gi,"u");

    inputAnimation(output);
}


button.addEventListener("click", ()=>{
    root.style.setProperty("--anim-color","255, 36, 0");
    root.style.setProperty("--padlock-bg","linear-gradient(0deg, rgb(75, 18, 2) 0%, rgb(108, 61, 3) 35%, rgb(195, 62, 5) 100%)");
    encrypt();
    // textoutput.value=encrypt();
    // textoutput.value=inputAnimation();
});
button2.addEventListener("click", ()=>{
    root.style.setProperty("--anim-color","36, 255, 0");
    root.style.setProperty("--padlock-bg","linear-gradient(0deg, rgba(4,75,2,1) 0%, rgba(3,108,17,1) 35%, rgba(89,195,5,1) 100%)");
    decrypt();
    // textoutput.value=decrypt();
});
buttonCopy.addEventListener("click", ()=>{
    
    navigator.clipboard.writeText(textoutput.value);
    alert("se copio: "+ textoutput.value);
});