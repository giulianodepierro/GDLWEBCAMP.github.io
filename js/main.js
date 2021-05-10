(function() {
    "use strict";

    var regalo = document.getElementById('regalo')
    document.addEventListener('DOMContentLoaded', function() {

        //Datos uusuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');


        // Campo pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');
        // botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('errorDiv');
        var botonRegistro = document.getElementById('btnRegistro');
        var resutado = document.getElementById('lista_productos');
        //EXTRAS
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiqueta');
        calcular.addEventListener('click', calcularMontos);


        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();

            } else {
                var boletosDia = pase_dia.value,
                    boletos2Dias = pase_dosdias.value,
                    boletoCompleto = pase_completo.value
                cantCamisas = camisas.value,
                    cantEtiquetas = etiquetas.value;
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + (cantCamisas * 10) + (cantEtiquetas * 0.93);
                console.log(totalPagar);
            }

        }
    }); //DOM content loaded
})();