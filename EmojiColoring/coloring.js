$(".pupilImage").click(
    function(){
    var clickedPupil = $(this).css("background-image")
    $(".pupil").css("background-image",clickedPupil);
    }
);

$(".mouthImage").click(
    function(){
        var clickedMouth = $(this).css("background-image");
        $("#mouth").css("background-image",clickedMouth);
    }
);

$(".color").click(
    function(){
        var color = $(this).css("background-color");
        $("#face").css("background-color",color);

    }


);
