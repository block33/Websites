$(document).ready(function() {
    $(".middle > nav > #games").click(function() {
        loadGamesMenu();
        $(".middle-menu-games").css("display", "none");
        $(".middle-menu-games").css("left", "-100%");
        $(".middle-menu-games").animate({left: 0, opacity:"show"}, 500);
    });
});

function loadGamesMenu () {
    var game_menu = "<div class='middle-menu-games'>" + 
                        "<div class='navigate-left'><img src='images/navigate_left.svg'/></div>" +  
                        "<div class='navigate-right'><img src='images/navigate_right.svg'/></div>" + 
                        "<div class='content'>" + 
                            "<img class='img-header'/>" + 
                            "<p></p>" + 
                        "</div>" + 
                        "<div class='content'>" + 
                            "<img class='img-header'/>" + 
                            "<p></p>" + 
                        "</div>" +
                        "<div class='content'>" +
                            "<img class='img-header'/>" +
                            "<p></p>" +
                        "</div>" +
                        "<div class='content'>" +
                            "<img class='img-header'/>" +
                            "<p></p>" +
                        "</div>" +
                    "</div>";
    document.getElementsByTagName("body").appendChild(game_menu);
}