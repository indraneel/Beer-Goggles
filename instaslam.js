slam = [twat];
$('input').each(function() {
    $(this).val(slam[Math.floor(Math.random()*slam.length)]);

    //TODO 'enter'
});
