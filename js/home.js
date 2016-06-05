$( document ).ready(function(){
		$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	  });
	 $(".button-collapse").sideNav();
	 var cont = 2;
	 window.setInterval(function(){
		 var background = 'url(./images/foto'+ cont + '.jpg)'
		 $('#home')
			.animate({opacity: 0}, 'slow', function() {
					$(this)
							.css({'background-image': background})
							.animate({opacity: 1});
			});
			if(cont<10){
				cont = cont + 1;
			}else{
				cont = 1;
			}

		}, 5000);


})
