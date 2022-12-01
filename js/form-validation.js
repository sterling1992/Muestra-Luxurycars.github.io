

const botton2 = document.getElementById('botton-registrar');
botton2.addEventListener('click', ()=>{
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');
  const modal = document.getElementById("modal-alert-registro");
  const modal_registro = document.getElementById("modal-usuario-registro");
 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {          
          event.preventDefault();          
          event.stopPropagation(); 
        }
        else{          
          modal.classList.add('show');
          modal_registro.classList.add('registro');
          event.preventDefault();
        }
        form.classList.add('was-validated');
      }, false );
    })
})()

});

const botton = document.getElementById('botton-iniciar-sesion');
botton.addEventListener('click', ()=>{
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation') 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {          
          event.preventDefault();          
          event.stopPropagation(); 
        }
        form.classList.add('was-validated');
      }, false );
    })
})()

});





