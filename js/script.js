//Show dialog on hover. Position of dialog moves with respect to nav objectives
    $(".objct").hover(function(){
        var rect = this.getBoundingClientRect();
        $(".arrow-box").css("left", rect.left - 150);
        if ($( window ).width() < 769) {
          $(".arrow-box").css("left", $(window).width() / 2 - 150);
        }
        $(".arrow-box").css("top", rect.bottom + 20);
        $(".arrow-box").css("display", "inline-block");
    }, function() {});

    $(".arrow-box").mouseleave(function(){
      $(".arrow-box").fadeOut();
    });

    $(".main-header").mouseleave(function(){
      if(!$('.arrow-box').is(":hover")){
          $(".arrow-box").fadeOut();
      }
      
//Change onclick objective, selected class, check mark, header

	$( ".obj-drop" ).click(function() {
		var clickedObjct = this;

		$( ".obj-drop" ).removeClass( "selected" );

  		if(clickedObjct) {
  			$( clickedObjct ).addClass( "selected" );
  			$(".objct").text($(clickedObjct).text());
  		
  		}
	});
});