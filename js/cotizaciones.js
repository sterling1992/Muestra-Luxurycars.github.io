const botton3 = document.getElementById('btn-cotizar');
botton3.addEventListener('click', ()=>{
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation') 
  var modal_alert_cotizacion = document.getElementById('modal-alert-cotizacion') 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {          
          event.preventDefault();          
          event.stopPropagation(); 
        }
        else{   
         
          modal_alert_cotizacion.classList.remove('modal-alert-cotizacion');       
          modal_alert_cotizacion.classList.add('modal-alert-cotizacion1');
          event.preventDefault();
        }
        form.classList.add('was-validated');
      }, false );
    })
})()

});