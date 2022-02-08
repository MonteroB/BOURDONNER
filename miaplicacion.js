$(".card-btn").append('<a href="" target="_blanck" class="btn btn-success">COTIZAR</a>');
$('.card-btn').click( function(e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#myForm").offset().top  
    }, 2000);
} );

$("#myForm").prepend(`  <form id="formulario" class="contacto__formulario" action="" method="POST">
<label for="nombre">Nombre</label>
<input id="nombre" type="text" name="nombre">
<label for="email">Email</label>
<input id="email" type="text" name="email">
<label for="hectareas">  Cantidad de m² de cultivo</label>
<input id="hectareas" type="number" name="hectareas">
<label for="CULTIVO">Tipo de cultivo</label>
<select name="CULTIVO">
  	<option value="L">LIBRE</option>
  	<option value="A">AISLADO</option>
</select>
<div>¿Deseo recibir el Newsletter?</div>
<input type="Checkbox" name="Acepto" value="1"><br>
<input type="submit" id="btn1" class="btn-warning btn-lg" value="OBTENER COTIZACIÓN">
<input type="reset" class="btn btn-outline-secondary btn-sm" value="LIMPIAR FORMULARIO">
</form>`);

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target 
    //Alerta de envío exitoso
    $("#myForm").prepend(`<div class="envioExitoso">¡Gracias ${formulario.children[1].value}! Su cotización BOURDONNER fue enviada con éxito.</div>`);
}

$('.btn-outline-secondary').click( function(e) { 
    e.preventDefault();
    $('.envioExitoso').hide();
} );








