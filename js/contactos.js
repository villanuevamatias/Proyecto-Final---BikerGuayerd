
let a=setInterval(mostrarGlobo(),10000);
let b=setInterval(ocultarGlobo(),2500);
function mostarGlobo() {
    document.getElementById("globo").style.display="flex";
    
}
function ocultarGlobo() {
    document.getElementById("globo").style.display="none";
    
}