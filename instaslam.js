
(function($) {
    $(document).ready( function() {

        console.log('ready');
        // alert("moo");

		slams = ['twat'];
		$('input').each(function() {
		    $(this).val(slams[Math.floor(Math.random()*slam.length)]);
		    $(this).keypress(function(event) {
			    if (event.which == 13) {
			        event.preventDefault();
			        $("form").submit();
			    }
			});
		}); 
    });
})(jQuery);