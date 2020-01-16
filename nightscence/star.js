for(var c=0; c<600; c++){
    var x = Math.floor((Math.random() * 550) + 1);
    var y = Math.floor((Math.random() * 1300) + 1);
    $('body').prepend("<div class='star' style= 'top: "+x+"px; left: "+y+"px; '></div>");
}
        