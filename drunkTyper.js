(function($) {
    $(document).ready( function() {

        console.log('ready');
        alert("moo");

        function scramble(text) {
            console.log('scambling');
            rnd = Math.floor(Math.random() *5);
            if (rnd > 3 && text.length > 1) {
                console.log('scarmble is go');
                last = text[text.length-1];
                start = text.substring(0,text.length-2);
                console.log(start + last + text[text.length-2]);
                return start + last + text[text.length-2];
            }
            else if (rnd = 2) {
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for( var i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
                return text
            }
            return text;
        };

        $("input")
            .keyup(function() {
            var value = $(this).val();
            $(this).val(scramble(value));
        }).keyup();
    });
})(jQuery);