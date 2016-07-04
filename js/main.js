// Envio do formulario
$(document).ready(function() {
    $('#contactform').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $('#nomefield').val();
        //get the email field value
        var email = $('#emailfield').val();
        //get the phone
        var phone = $('#phonefield').val();
        //send to formspree
        $.ajax({
            url:'https://formspree.io/thaisquintanap@gmail.com',
            method:'POST',
            data: $('#contactform').serialize(),
            dataType:"json",
            success: function() {
		        $("#sendbox").show();
		      },
		      error: function() {
		        $("#errorbox").show();        
		      }
        });   
    });
}); 
//Modal 
$( "#agreed").on( "click", function() {
	 $('#sendbox').hide();
});
$( ".close").on( "click", function() {
	 $('#sendbox').hide();
});