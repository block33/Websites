$(document).ready(function() { 
    $(".middle-menu-games").css({"left" : "100%"});
    $(".middle-menu-games").delay(700).animate({left : 0}, 1000, "swing");
});






function loadGamesMenu () {
    var game_menu = "<div class='middle-menu-games'>" + 
                        "<div class='navigate-left'><img src='images/navigate_left.svg'/></div>" +  
                        "<div class='navigate-right'><img src='images/navigate_right.svg'/></div>" + 
                        "<div class='content'>" + 
                            "<img class='img-header' src='images/fps.jpg'/>" + 
                            "<p></p>" + 
                        "</div>" + 
                        "<div class='content'>" + 
                            "<img class='img-header' src='images/skyrim.jpg'/>" + 
                            "<p></p>" + 
                        "</div>" +
                        "<div class='content'>" +
                            "<img class='img-header' src='images/samsung-game.jpg'/>" +
                            "<p></p>" +
                        "</div>" +
                        "<div class='content'>" +
                            "<img class='img-header'/>" +
                            "<p></p>" +
                        "</div>" +
                    "</div>";
    $("body").append(game_menu);
}