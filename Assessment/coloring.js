$(".type1").click(
    function(){
    alert("hello");
    }
);


$(".type2").click(
    function(){
    var clickedPupil = $(this).css("background-color")
    $("#line").css("background-color",green);
    }
);