/**
 * Created by yuan on 2016/3/17.
 */
'use strict';
var Game = (function(){
    var $el = $("body"),
        canvas = document.getElementById('tetris-block'),
        $grid = $(".grid"),
        $canvas = $("#tetris-block"),
        ctx = canvas.getContext("2d"),
        width = $grid.width() / 10,
        startY = 0,
        startX = $grid.width() / 2,
        oldX,
        oldY,
        game;

    game = {
        drawFour: function(startX, startY , type, direction){
            if(oldX){
                ctx.clearRect(0, 0, $(".grid").width(), $(".grid").height());
            }else{
                oldX = startX;
                oldY = startY;
            }
            switch (type){
                case "Field":
                    for(var i = 0; i < 2; i++){
                        for(var j = 0; j < 2; j++){
                            ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
                            ctx.fillRect(startX - width/2 + width *j , startY + width * i, width, width)
                        }
                    }
                    break;
                case "Z":
                    for(var i = 0; i < 2; i ++){
                        for(var j = 0; j < 2; j++){
                            ctx.fillStyle = 'rgb(' + Math.floor(110-42.5*i) + ',' + Math.floor(51-42.5*j) + ','+ Math.floor(204-42.5*j) +')';
                            if(i < 1){
                                ctx.fillRect(startX - width + width *j , startY + width * i, width, width)
                            }else{
                                ctx.fillRect(startX + width *j , startY + width * i, width, width)
                            }
                        }
                    }
                    break;
                case "L":
                    var count = 0;
                    for(var i = 0; i < 2; i ++){
                        for(var j = 0; j <= 2; j++){
                            ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(153-42.5*j) + ', 0)';
                            if(i == 0 && j == 0){
                                ctx.fillRect(startX - width, startY, width, width)
                            }else{
                                ctx.fillRect(startX - width + width * j, startY + width, width, width)
                            }
                            count ++;
                            if(count > 3){
                                return
                            }
                        }
                    }
                    break;
                case "I":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 4; i++){
                                ctx.fillStyle = 'rgb(' + Math.floor(42.5 * i) + Math.floor(128 - 42.5 * i) + ', 0)';
                                ctx.fillRect(startX + width * i, startY, width, width)
                            }
                            break;
                        default :
                            for(var i = 0; i < 4; i++){
                                ctx.fillStyle = 'rgb(23, ' + Math.floor(182 - 40 * i) + ', 23)';
                                ctx.fillRect(startX, startY + width * i, width, width)
                            }
                    }
                    break;
                case "T":
                    var count = 0;

                    for(var i = 0; i < 2; i++){
                        for(var j = 0; j < 3; j++){
                            ctx.fillStyle = 'rgb(' + Math.floor(204 - 42.5 * i) + ',' + Math.floor(51 - 2.5 * j) + ', 51)';

                            if(i == 0 && j == 0){
                                ctx.fillRect(startX, startY, width, width)
                            }else{
                                ctx.fillRect(startX - width + width * j, startY + width, width, width)
                            }
                            count ++;
                            if(count > 3){
                                return
                            }
                        }
                    }
                    break;
            }
        },
        freeFall: function(){
            var y = startY,
                x = startX;

            game.drawFour(x, y, "T");
            var start = setInterval(function(){
                y += width;
                game.drawFour(x, y, "T");

                if(y + width * 3 > $(".game-content").height()){
                    clearInterval(start);
                }
                console.log(x, y)
            }, 300);

            $(".turn-left").unbind("click").bind("click", function(){
                x -= width;

                if(parseInt(x) < parseInt(width)){
                    x = width
                }else{
                    game.drawFour(x, y, "T");
                }
            });

            $(".turn-right").unbind("click").bind("click", function(){
                x += width;

                if(parseInt(x) > parseInt(width * 8)){
                    x = width * 8
                }else{
                    game.drawFour(x, y, "T");
                }
            });
        },
        start: function(e){
            $(e.currentTarget).removeClass("button-start").
                addClass("button-pause");

            $(e.currentTarget).html('<i class="fa fa-pause"></i>');

            game.freeFall()
        },
        render: function(){
            var $gridH,
                cavsH;

            if(screen.width <= 320){
                cavsH = width * 16;
                $gridH = width * 16 + $(".score-grade").height() + "px"
            }else{
                cavsH = width * 20;
                $gridH = width * 20 + $(".score-grade").height() + "px";
            }

            $grid.css({
                height: $gridH
            });
            $(".game-content").css({
                height: cavsH + "px",
                width: "100%"
            });

            $canvas.attr("height", cavsH + "px");
            $canvas.attr("width", $grid.width() + "px");
        }
    };

    var type = ["Field", "Z", "L", "I", "T"];
    var direct = ["H", "V"];

    game.render();
    $el.on("click", ".button-start", game.start);
    //$el.on("click", ".turn-left", game.freeFall.moveLeft);
})();