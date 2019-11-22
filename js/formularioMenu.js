var form = document.querySelector(".formMenu");
var texto = document.querySelector('input[name="inputMenuSearch"]');

form.onsubmit =  function(x){
  x.preventDefault();
  if (texto.value == ""){
    alert("El campo de busqueda no puede ser vacio");
  }else if(texto.value.length < 3){
    alert("El campo de busqueda no puede ser menor de 3 caracteres");
  }else {
    location.href = "resultado-busqueda.html?q="+texto.value;
  }
}
