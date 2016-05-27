$(document).ready(function() {
    var bool = true;
    $(".middle > nav > #projects").click(function() {
        $(".panel").css("left", "-100%");
        if($(".panel").css("display") == "none") {
            $(".panel").css("display") == "show";
            $(".panel").animate({left: 0, opacity:"show"}, 500);
        }
    });
    
    $(".close-panel").click(function() {
        $(".panel").animate({left: '-2000px', opacity:"hide"}, 500);
        resetPanelProperties();
    });
    
    $(".close-panel").mouseenter(function() {
        $(this).find("path, polygon, circle", this).attr("fill", "#E98A8A"); 
    });
    
    function resetPanelProperties() {
        $(".panel").css("display") == "none";
        $(".panel").css("left", "0");
    }
});
