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
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');

        //EXTRAS
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiqueta');

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDia);
        pase_dosdias.addEventListener('blur', mostrarDia);
        pase_completo.addEventListener('blur', mostrarDia);


        /**------------------------------funciones-------------------- */
        //validaciones nombre

        nombre.addEventListener('blur', validarCampos);
        //validaciones apellido        
        apellido.addEventListener('blur', validarCampos);

        //validar mail
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        function validarCampos() {
            if (this.value == "") {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
                this.style.border = '1px solid red';

            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #8a6666';
            }
        };


        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #8a6666';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener un  @s";
                this.style.border = '1px solid red';

            }
        };




        /**-----------------------------calcular montos-------------------- */
        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();

            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93);
                console.log(totalPagar);

                var listadoProductos = [];
                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por dia');
                }

                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por dos dias');
                }

                if (boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' Pase completo');
                }


                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }


                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                console.log(listadoProductos);

                lista_productos.innerHTML = '';

                var i = 0;

                for (i; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }

                //crea objeto lista_productos
                lista_productos.style.display = "block";
                suma.innerHTML = '$ ' + totalPagar.toFixed(2);
            }

        }

        function mostrarDia() {

            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if (boletosDia > 0) {
                diasElegidos.push('viernes');
            }

            if (boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            }

            if (boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i > diasElegidos.length; i++) {
                document.getElementById(diasElegidos).style.display = 'block';
            }
        }
        var map = L.map('mapa').setView([-34.566196, -60.935948], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-34.566196, -60.935948]).addTo(map)
            .bindPopup('GLDWebCamp 2018<br> Boletos Disponibles.')
            .openPopup()
            .bindTooltip('Un Tooltop')
            .openTooltip();



        //contador 

        $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
        $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 9 }, 1200);
        $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
        $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 15 }, 1200);



        //Cuenta regresiva 
        $('.cuenta-regresiva').countdown('2021/10/28 09:00:00', function(event) {
            $('#dias').html(event.strftime('%D'));
            $('#horas').html(event.strftime('%H'));
            $('#minutos').html(event.strftime('%M'));
            $('#segundos').html(event.strftime('%S'));
        });




    }); //DOM content loaded




    //Contador     

})();