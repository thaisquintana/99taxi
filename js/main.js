function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("mask()",1)
}
function mask(){
    v_obj.value=v_fun(v_obj.value)
}
function phonumber(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('phonefield').onkeyup = function(){
		mascara( this, phonumber );
	}
}
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
		        $('#overlaylight').show();
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
	 $('#overlaylight').hide();
	 $("#nomefield").val("");
     $("#emailfield").val("");
     $("#phonefield").val("");

});
$( ".close").on( "click", function() {
	 $('#sendbox').hide();
	 $('#overlaylight').hide();
	 $("#nomefield").val("");
     $("#emailfield").val("");
     $("#phonefield").val("");
});