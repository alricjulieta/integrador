document.addEventListener("DOMContentLoaded", function(event) {
    botonresumen .addEventListener('click', totalpagar);
});

//Valor de ticket
const valorticket= 200;

//Descuentos
const descuentoestudiante= 0.8;
const descuentotrainee= 0.5;
const descuentounior= 0.15;

//Toma de valores

const cantidad= document.getElementById('cantidad');
const categoria= document.getElementById('categoriaselect');
const botonresumen= document.getElementById('resumen');
const botonborrar = document.getElementById('borrar');
const valorapagar = document.getElementById('valorapagar');

//funcion total pagar

function totalpagar(){

    let parrafo = document.querySelector("#totalapagar");
    let totalValor= (cantidad.value) * valorticket;
    let valorMail = document.querySelector('#email');

    if (categoria.value == 1 ){
        totalValor= totalValor-(totalValor*descuentoestudiante);
    }else if (categoria.value == 2){
        totalValor= totalValor-(totalValor*descuentotrainee);
    }else if (categoria.value== 3) {
        totalValor= totalValor-(totalValor*descuentojunior);
    }

    parrafo.innerHTML= `Total a pagar : ${totalValor}`;
}

//boton resumen
const email = document.getElementById('email');
const nombre = document.getElementById('nameid');
const apellido = document.getElementById('apellido');
const formulario = document.querySelector('#formulario');
const input = document.getElementById ('cantidad');
const botonBorrar= document.getElementById('reset')
const parrafo= document.getElementById('totalapagar')

console.log (formulario)

formulario.addEventListener ('submit', function(e) {
    e.preventDefault();

    

//gvseffsefsefesf
     
    
        valor= input.value;

        function pruebaEmail (valor){
            re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            if(!re.exec(valor)){
                alert('email no valido');
            }
            else alert('email valido');
            }

            pruebaEmail(email.value);

            
        function pruebanombre (valor){
            nom=/^[a-zA-ZÀ-ÿ\s]{1,40}$/
            if(!nom.exec(valor)){
                alert('nombre no valido');
            }
            else alert('nombre valido');
            }

            pruebanombre(nombre.value);


            function pruebaapellido (valor){
                ape=/^[a-zA-ZÀ-ÿ\s]{1,40}$/
                if(!ape.exec(valor)){
                    alert('Apellido no valido');
                }
                else alert('Apellido valido');
                }
    
                pruebaapellido(apellido.value);
       
})


formulario.addEventListener ('reset', function (e) {
    e.preventDefault()

    parrafo.innerHTML= 'Total a pagar:  ';
})


