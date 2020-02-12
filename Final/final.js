$(".sky").click(
    function(){
    var Sky = $(this).css("background-image");
    $("#main").css("background-image",Sky);
    }
);

function startRace(){
    TweenMax.to("#yellow",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#yellow",1.5,{x:500, y:-320,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#yellow",2,{x:-50, y:-300,delay:3, ease:Sine.easeOut});
      
}

