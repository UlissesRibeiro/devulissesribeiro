var visibilidade = true;



/*function showProj1(){
    document.getElementById("projeto1").style.display = "block";
}
function hideProj1(){
    document.getElementById("projeto1").style.display = "none";
}


function showProj2(){
    document.getElementById("projeto2").style.display = "block";
}
function hideProj2(){
    document.getElementById("projeto2").style.display = "none";
}*/
$(document).ready(function(){
    $("#loadProj1").click(function(){
    $("#conteudo").load("/proj1.html");
  });
  });
  $(document).ready(function(){
    $("#loadProj1").click(function(){
      $("#conteudo").show();
    });
  });

  $(document).ready(function(){
    $("#loadProj2").click(function(){
    $("#conteudo").load("/proj2.html");
  });
  });
  $(document).ready(function(){
    $("#loadProj2").click(function(){
      $("#conteudo").show();
    });
  });

  $(document).ready(function(){
    $("#loadProj3").click(function(){
    $("#conteudo").load("/proj3.html");
  });
  });
  $(document).ready(function(){
    $("#loadProj3").click(function(){
      $("#conteudo").show();
    });
  });

$(document).ready(function(){
    $("#fechar").click(function(){
      $("#conteudo").hide();
    });
  });

  /*colocar essa div se quiser usar o js
  <div id="conteudo">

  </div>*/