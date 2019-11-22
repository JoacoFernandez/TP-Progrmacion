var queryString = location.search; //Capturamos la query string del navegador
var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
var palabra = searchParams.get("q"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").


var destino = document.querySelector(".palabraName");
var mensaje = document.querySelector("#mensaje");

var inputCentral = document.querySelector('input[name="inputCentral"]');
var inputHeader = document.querySelector('input[name="inputMenuSearch"]');
inputCentral.value= palabra;
inputHeader.value = palabra;
destino.innerHTML = palabra;

var urlBuscar = "https://api.themoviedb.org/3/search/movie?api_key=52a88daa04868d3d6e122bb241e7ff05&query="+palabra+"&page=1&include_adult=true"
        fetch(urlBuscar)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
            console.log(datos);
              if(datos.total_results == 0){
                mensaje.removeAttribute("hidden");
              }else{
                var destino = document.querySelector(".resultadosBusqueda");
                var datosFinales = datos.results;
                console.log(datosFinales);
                var div = "";
                for(var i=0; i<datosFinales.length; i++){
                  div += "<div class='col-lg-4'>";
                  div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                  div += "<h2>"+datosFinales[i].original_title+"</h2>";
                  div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                  div += "</div>";
                }
                destino.innerHTML = div
              }
          });

var form = document.querySelector(".formCentral");


form.onsubmit = function(e){
  e.preventDefault();
  if (inputCentral.value == ""){
    alert("El campo de busqueda no puede ser vacio");
  }else if(inputCentral.value.length < 3){
    alert("El campo de busqueda no puede ser menor de 3 caracteres");
  }else {
    location.href = "resultado-busqueda.html?q="+inputCentral.value;
  }
}
