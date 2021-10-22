

     let a =setInterval(() => {
       mostrarGlobo();
        
    }, 21000);
    let b =setInterval(() => {
        ocultarGlobo();
         
     }, 6990);
function mostrarGlobo() {
    
    document.getElementById("globo").style.display="flex";
    
}
function ocultarGlobo() {
   
    document.getElementById("globo").style.display="none";
    
}