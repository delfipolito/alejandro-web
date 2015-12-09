$(document).ready(function(){

	$('.formSend').click(function(){
		if(validateRequiredInput($('.formName').val()) && validateRequiredInput($('.formLastName').val()) && validateRequiredInput($('.formEmail').val()) && validateRequiredInput($('.formMessage').val())){
			if(validateCorrectEmail($('.formEmail').val())){
				var json= {
					"key": "J_0lhCm8pGELwf2VdXPdmw",
			  	"message": {
			  			"subject": 'Contacto via web: ',
				      "text": $('.formMessage').val(),
				    	"from_email":$('.formEmail').val(),
				    	"from_name": $('.formName').val(),
				    "to": [
				      {
				        "email": "delfipolito@hotmail.com",    
				        "name": "Dr. Alejandro Polito"
				      }
				    ]
				  }
				}
				$.ajax({
					type: "POST",
					url: 'https://mandrillapp.com/api/1.0/messages/send.json',
					dataType: "json",
					contentType: 'application/json',
					data:JSON.stringify(json),
					success:function() {
						$('.formEmail').val('');
						$('.formName').val('');
						$('.formMessage').val('');
						alert('Gracias, su mensaje ha sido enviado');
		      }
				});
			}
		}
		 
	});

	function validateRequiredInput(value) {
  if (value=='') {
    alert('Hay campos obligatorios sin completar. Por favor completa los campos antes de enviar la consulta.');
    return false;
  }
  return true;
	};

	function validateCorrectEmail(value) {
		var regex = /([^ ]+)[@]{1}([^ ]+)[.]{1}([^ ]+)$/;
    if(!regex.test(value)){
   		alert('Por favor completa el campo de email con un formato valido antes de enviar la consulta.');
    	return false;
    }

    return true;
  
	};

});