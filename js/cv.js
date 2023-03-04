$(function() {
  $(".sobreMi").hide();
    $.scrollify({
      section : "section",
      scrollSpeed: 100,
    });});
$("#fotoPerfilPequeña").click(function(){
  $(".sobreMi").toggle();
});

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    reemplazarDatos(data);
  }
});
function reemplazarDatos(data){
  $(".nombre").text(data.results[0].name.first);
  $(".apellido").text(data.results[0].name.last);
  $(".genero").text(data.results[0].gender);
  $(".edad").text(data.results[0].dob.age);
  $(".fotoPerfil").attr("src", data.results[0].picture.large)
  $("#fotoPerfilPequeña").children().attr("src", data.results[0].picture.thumbnail)

  $(".numeroTelefono").text(data.results[0].cell);
  $(".correo").text(data.results[0].email);
  $(".direccion").text(data.results[0].location.street.name + " "+ data.results[0].location.street.number);
}