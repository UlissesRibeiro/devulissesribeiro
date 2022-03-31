var visibilidade = true;

function proj1(){
    if(visibilidade){
        document.getElementById("projeto1").style.display = "none";
        visibilidade = false;
    }else{
        document.getElementById("projeto1").style.display = "block";
        visibilidade = true;
    }
}
