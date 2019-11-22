   var urlGeneros = "https://api.themoviedb.org/3/genre/tv/list?api_key=52a88daa04868d3d6e122bb241e7ff05"

        fetch(urlGeneros)
         .then(function(respuesta){
            return respuesta.json();
          })
          .then(function(datos){
              var destino = document.querySelector(".listadoGeneros");
              var datosFinales = datos.genres;
              console.log(datosFinales);

              var li = "";
              for(var i=0; i<datosFinales.length; i++){
                console.log(datosFinales[i]);
                li += "<li class='list-group-item'><a href='listado-genero.html?idGeneros="+datosFinales[i].id+"&generoName="+datosFinales[i].name+"'>"+datosFinales[i].name+"</a></li>";
              }
              destino.innerHTML = li
          });
