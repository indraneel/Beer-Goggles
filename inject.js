(function($) {
    $(document).ready( function() {
        /*chrome.extension.sendRequest({
          "greeting": "hello",
          "var1": "variable 1",  //string
          "var2": true           //boolean
        });*/
        console.log('ready');
	function blur(i) {
	    console.log(i);
	    var blurs = [5, 25, 50];
	    console.log(blurs[i]);
	    var style = document.createElement('style');
	    var song = document.createElement('audio');
	    song.setAttribute('controls','');
	    song.setAttribute('preload','');
	    song.setAttribute('loop','');
	    song.setAttribute('autoplay','');
	var source1 = document.createElement('source');
	source1.src= 'https://dl.dropboxusercontent.com/u/117295/blurredvines.mp3';
	song.appendChild(source1);
	    console.log(song);
	    style.rel = 'stylesheet';
	    style.type = 'text/css';
	    var css = "#post { -webkit-filter: blur("+blurs[i]+"px);}";
	    if (style.styleSheet){
		  style.styleSheet.cssText = css;
	    } else {
		  style.appendChild(document.createTextNode(css));
	    }

	    //style.href = chrome.extension.getURL('vine.css');
	    (document.head||document.documentElement).appendChild(style);
	    (document.body).appendChild(song);

	}

	setTimeout(function() { 
	    /*for (var i=0; i<3; i++) {
		setTimeout(blur(i),1000);
	    }*/
	    blur(2);
	    setTimeout(function() {
	    }, 3000);
	}, 3000);

	setTimeout(function() {
	    var thicke  = document.createElement('img');
	    thicke.setAttribute('src','https://i.imgur.com/XTxAYfU.png');
	    var style = document.createElement('style');
	    style.rel = 'stylesheet';
	    style.type = 'text/css';
	    var css = "img { width:800px;}";
            $('div').hide();
            $('audio').hide();  
	    if (style.styleSheet){
		  style.styleSheet.cssText = css;
	    } else {
		  style.appendChild(document.createTextNode(css));
	}
	    (document.body).appendChild(thicke);
	}, 1000);

    });

    /*chrome.extension.onRequest.addListener( function(req, sender, sendResponse) {
        console.log('onRequest');
        console.log(req);
    });*/
})(jQuery);
