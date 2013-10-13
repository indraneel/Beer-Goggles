$("input")
    .keyup(function() {
    var value = $(this).val();
    $(this).val(scramble(value));
})
    .keyup();

function scramble(text) {
    console.log('scambling');
    rnd = Math.floor(Math.random() *5);
    if (rnd > 3 && text.length > 1) {
        console.log('scarmble is go');
        last = text[text.length-1];
        start = text.substring(0,text.length-2);
        console.log(start + last + text[text.length-2]);
        return start + last + text[text.length-2]
    }
    return text
};