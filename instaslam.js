
(function($) {
    $(document).ready( function() {

        console.log('ready');
        // alert("moo");

		slams = ['twat', 'douchcanoe', 'shithead', 'dumass', 'dick', 'asshat', 'ass toupee', 'Goober', 'DINKLEBERG!'];
		$('input').each(function() {
		    $(this).val(slams[Math.floor(Math.random()*slams.length)]);
		    $(this).keypress(function(event) {
			    if (event.which == 13) {
			        event.preventDefault();
			        $("form").submit();
			    }
			});
		}); 
    });
})(jQuery);