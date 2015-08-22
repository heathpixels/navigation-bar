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
//change selected class
//move check mark
//

	$( ".obj-drop" ).click(function() {
		var clickedObjct = this;

		$( ".obj-drop" ).removeClass( "selected" );

  		if(clickedObjct) {
  			$( clickedObjct ).addClass( "selected" );
  			$(".objct").text($(clickedObjct).text());
  		
  		}
	});

//change header 


});