var queryString = location.search; //Capturamos la query string del navegador
var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
var idGenero = searchParams.get("idGeneros"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
var generoName = searchParams.get("generoName");

var destino = document.querySelector(".generoName");
destino.innerHTML = generoName;


var urlGeneros = "https://api.themoviedb.org/3/discover/tv?api_key=52a88daa04868d3d6e122bb241e7ff05&sort_by=popularity.desc&page=1&with_genres="+idGenero
        fetch(urlGeneros)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var destino = document.querySelector(".resultadosGeneros");
              var datosFinales = datos.results;
              console.log(datos);
              var div = "";
              for(var i=0; i<6; i++){
                div += "<div class='col-lg-4'>";
                div += "<img style='width:100%' src='https://image.tmdb.org/t/p/original/"+datosFinales[i].poster_path+"'>";
                div += "<h2>"+datosFinales[i].original_name+"</h2>";
                div += "<p><a class='btn btn-secondary' href='detail.html?idSerie="+datosFinales[i].id+"' role='button'>Ver mas &raquo;</a></p>";
                div += "</div>";
              }
              destino.innerHTML = div
          });
