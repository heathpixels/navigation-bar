
//Show dialog on hover
$(document).ready(function(){
    $(".objct").hover(function(){
        $(".arrow-box").css("visibility", "visible");
    }, function() {});
//Hide dialog on mouse leave
	$(".arrow-box").mouseleave(function(){
	    $(".arrow-box").css("visibility", "hidden");
	});
//Change objective onclick
//	$( ".obj-drop" ).click(function() {
//	  $(this).html("visibility", "hidden");
//	});
//change header 
//move check mark
//change selected class
});