
(function($) {
    $(document).ready( function() {

        console.log('ready');
        // alert("moo");

		slam = ['twat'];
		$('input').each(function() {
		    $(this).val(slam[Math.floor(Math.random()*slam.length)]);
		    event.preventDefault();
		    $("form").submit();
		    //TODO 'enter'
		}); 
    });
})(jQuery);