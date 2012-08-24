;(function( $ ){
		  $.fn.LinksLocales = function( options ) {  

		    // Create some defaults, extending them with any options that were provided
		    var settings = $.extend( {
		      'separacionArriba'    : '110',
		      'velocidad'			: "500"
		    }, options);

		    return this.each(function() {
		        var $this = $(this);
				//$this.css({color : settings.color});
					$this.click(function(event){
					 event.preventDefault();
					 var offset = $($(this).attr('href')).offset().top;
					 $('html, body').animate({scrollTop:offset-settings.separacionArriba}, settings.velocidad);
					
					});
		    });

		  };
})( jQuery );