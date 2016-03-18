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
        smallX = startX,
        bigX = startX,
        oldX,
        oldY,
        game;

    game = {
        drawFour: function(startX, startY , type, direction){
            if(oldX){
                ctx.clearRect(0, 0, $grid.width(), $grid.height());
            }else{
                oldX = startX;
                oldY = startY;
            }
            smallX = startX;
            bigX = startX;

            switch (type){
                case "Field":
                    for(var i = 0; i < 2; i++){
                        for(var j = 0; j < 2; j++){
                            ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
                            ctx.fillRect(startX - width + width *j , startY + width * i, width, width);
                            if((startX - width + width *j) <= smallX){
                                smallX = startX - width + width *j
                            }
                            if((startX - width + width *j) >= bigX){
                                bigX = startX - width + width *j
                            }
                        }
                    }
                    break;
                case "Z":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 2; i ++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(' + Math.floor(110-42.5*i) + ',' + Math.floor(51-42.5*j) + ','+ Math.floor(204-42.5*j) +')';
                                    if(i < 1){
                                        ctx.fillRect(startX - width + width *j , startY + width * i, width, width)
                                    }else{
                                        ctx.fillRect(startX + width *j , startY + width * i, width, width)
                                    }
                                    if((startX - width + width *j) <= smallX){
                                        smallX = startX - width + width *j
                                    }
                                    if((startX + width *j) >= bigX){
                                        bigX = startX + width *j
                                    }
                                }
                            }
                            break;
                        case "V":
                            for(var i = 0; i < 2; i ++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(' + Math.floor(110-42.5*i) + ',' + Math.floor(51-42.5*j) + ','+ Math.floor(204-42.5*j) +')';
                                    if( i == 0){
                                        ctx.fillRect(startX, startY + width * j, width, width)
                                    }else{
                                        ctx.fillRect(startX - width, startY + width * (j + 1), width, width)
                                    }

                                    if((startX - width) <= smallX){
                                        smallX = startX - width
                                    }
                                    if(startX >= bigX){
                                        bigX = startX
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case "S":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 2; i++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(77, ' + Math.floor(151-22.5*j) + ','+ Math.floor(176-42.5*j) +')';
                                    if(i == 0){
                                        ctx.fillRect(startX + width * j, startY, width, width)
                                    }else{
                                        ctx.fillRect(startX + width * (j - 1), startY + width, width, width)
                                    }

                                    if((startX + width * (j - 1)) <= smallX){
                                        smallX = startX + width * (j - 1)
                                    }
                                    if((startX + width * j) >= bigX){
                                        bigX = startX + width * j
                                    }
                                }
                            }
                            break;
                        case "V":
                            for(var i = 0; i < 2; i++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(77, ' + Math.floor(151-22.5*j) + ','+ Math.floor(176-42.5*j) +')';
                                    if(i == 0){
                                        ctx.fillRect(startX - width, startY + width * j, width, width)
                                    }else{
                                        ctx.fillRect(startX, startY + width * (j + 1), width, width)
                                    }
                                    if((startX - width) <= smallX){
                                        smallX = startX - width
                                    }
                                    if(startX >= bigX){
                                        bigX = startX
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case "L":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 2; i ++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(153-42.5*j) + ', 0)';
                                    if(i == 0){
                                        ctx.fillRect(startX - width, startY + width * j, width, width)
                                    }else{
                                        ctx.fillRect(startX + width * j, startY + width, width, width)
                                    }

                                    if((startX - width) <= smallX){
                                        smallX = startX - width
                                    }
                                    if((startX + width * j) >= bigX){
                                        bigX = startX + width * j
                                    }
                                }
                            }
                            break;
                        case "V":
                            for(var i = 0; i < 2; i++){
                                for(var j = 0; j < 2; j++){
                                    ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(153-42.5*j) + ', 0)';
                                    if(i == 0){
                                        ctx.fillRect(startX, startY + width * j, width, width)
                                    }else{
                                        ctx.fillRect(startX -width + width * j, startY + width * 2, width, width)
                                    }

                                    if((startX -width + width * j) <= smallX){
                                        smallX = startX -width + width * j
                                    }
                                    if((startX -width + width * j) >= bigX){
                                        bigX = startX -width + width * j
                                    }
                                }
                            }
                            break;
                        case "N":
                            for(var j = 0; j < 3; j++){
                                ctx.fillStyle = 'rgb(77, ' + Math.floor(151-22.5*j) + ','+ Math.floor(176-42.5*j) +')';
                                ctx.fillRect(startX - width, startY + width * j, width, width)
                            }
                            ctx.fillStyle = "#74BBD3";
                            ctx.fillRect(startX, startY, width, width);

                            if((startX - width) <= smallX){
                                smallX = startX - width
                            }
                            if(startX >= bigX){
                                bigX = startX
                            }
                            break;
                        case "J":
                            for(var j = 0; j < 3; j++){
                                ctx.fillStyle = 'rgb(77, ' + Math.floor(151-22.5*j) + ','+ Math.floor(176-42.5*j) +')';
                                ctx.fillRect(startX - width + width * j, startY, width, width);
                                if((startX - width + width * j) <= smallX){
                                    smallX = startX - width + width * j
                                }
                                if((startX - width + width * j) >= bigX){
                                    bigX = startX - width + width * j
                                }
                            }
                            ctx.fillStyle = "#74BBD3";
                            ctx.fillRect(startX + width, startY + width, width, width);
                            break;
                    }
                    break;
                case "F":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 3; i++){
                                ctx.fillStyle = 'rgb(204, 0, '+ Math.floor(176 - 22.5 * i) +')';
                                ctx.fillRect(startX - width + width * i, startY + width, width, width);

                                if((startX - width + width * i) <= smallX){
                                    smallX = startX - width + width * i
                                }
                                if((startX - width + width * i) >= bigX){
                                    bigX = startX - width + width * i
                                }
                            }
                            ctx.fillStyle = "#CC007A";
                            ctx.fillRect(startX + width, startY, width, width);
                            break;
                        case "V":
                            for(var i = 0; i < 3; i++){
                                ctx.fillStyle = 'rgb(204, 0, '+ Math.floor(176 - 22.5 * i) +')';
                                ctx.fillRect(startX - width, startY + width * i, width, width);
                            }
                            ctx.fillStyle = "#CC007A";
                            ctx.fillRect(startX, startY + width * 2, width, width);
                            if((startX - width) <= smallX){
                                smallX = startX - width
                            }
                            if(startX >= bigX){
                                bigX = startX
                            }
                            break;
                        case "N":
                            for(var i = 0; i < 3; i++){
                                ctx.fillStyle = 'rgb(204, 0, '+ Math.floor(176 - 22.5 * i) +')';
                                ctx.fillRect(startX - width + width * i, startY, width, width);

                                if((startX - width + width * i) <= smallX){
                                    smallX = startX - width + width * i
                                }
                                if(startX - width + width * i >= bigX){
                                    bigX = startX - width + width * i
                                }
                            }
                            ctx.fillStyle = "#CC007A";
                            ctx.fillRect(startX - width, startY + width, width, width);
                            break;
                        case "J":
                            for(var i = 0; i < 3; i++){
                                ctx.fillStyle = 'rgb(204, 0, '+ Math.floor(176 - 22.5 * i) +')';
                                ctx.fillRect(startX, startY + width * i, width, width)
                            }
                            ctx.fillStyle = "#CC007A";
                            ctx.fillRect(startX - width, startY, width, width);

                            if((startX - width) <= smallX){
                                smallX = (startX - width)
                            }
                            if(startX >= bigX){
                                bigX = startX
                            }
                            break;
                    }
                    break;
                case "I":
                    switch (direction){
                        case "H":
                            for(var i = 0; i < 4; i++){
                                ctx.fillStyle = 'rgb(23, ' + Math.floor(182 - 40 * i) + ', 23)';
                                ctx.fillRect(startX - width * 2 + width * i, startY, width, width);

                                if((startX - width * 2 + width * i) <= smallX){
                                    smallX = startX - width * 2 + width * i
                                }
                                if((startX - width * 2 + width * i) >= bigX){
                                    bigX = startX - width * 2 + width * i
                                }
                            }
                            break;
                        case "V":
                            for(var i = 0; i < 4; i++){
                                ctx.fillStyle = 'rgb(23, ' + Math.floor(182 - 40 * i) + ', 23)';
                                ctx.fillRect(startX , startY + width * i, width, width)
                            }

                            if(startX <= smallX){
                                smallX = startX
                            }
                            if(startX >= bigX){
                                bigX = startX
                            }
                            break;
                    }
                    break;
                case "T":
                    switch (direction){
                        case "H":
                            for(var j = 0; j < 3; j++){
                                ctx.fillStyle = 'rgb(' + Math.floor(204 + 42.5 * j) + ',' + Math.floor(51 + 42.5 * j) + ', 51)';
                                ctx.fillRect(startX - width + width * j, startY + width, width, width);

                                if(startX <= smallX){
                                    smallX = startX
                                }
                                if((startX - width + width * j) >= bigX){
                                    bigX = startX - width + width * j
                                }
                            }
                            ctx.fillStyle = 'rgb(225, 96, 96)';
                            ctx.fillRect(startX, startY, width, width);
                            break;
                        case "V":
                            for(var j = 0; j < 3; j++){
                                ctx.fillStyle = 'rgb(' + Math.floor(204 + 42.5 * j) + ',' + Math.floor(51 + 42.5 * j) + ', 51)';
                                ctx.fillRect(startX, startY + width * j, width, width)
                            }
                            ctx.fillStyle = 'rgb(225, 96, 96)';
                            ctx.fillRect(startX + width, startY + width, width, width);
                            if(startX <= smallX){
                                smallX = startX
                            }
                            if((startX + width) >= bigX){
                                bigX = startX + width
                            }

                            break;
                        case "N":
                            for(var j = 0; j < 3; j++){
                                ctx.fillStyle = 'rgb(' + Math.floor(204 + 42.5 * j) + ',' + Math.floor(51 + 42.5 * j) + ', 51)';
                                ctx.fillRect(startX - width + width * j, startY, width, width);
                                if(startX <= smallX){
                                    smallX = startX
                                }
                                if((startX - width + width * j) >= bigX){
                                    bigX = startX - width + width * j
                                }
                            }
                            ctx.fillStyle = 'rgb(225, 96, 96)';
                            ctx.fillRect(startX, startY + width, width, width);
                            break;
                        case "J":
                            for(var i = 0; i < 3; i ++){
                                ctx.fillStyle = 'rgb(' + Math.floor(204 + 42.5 * i) + ',' + Math.floor(51 + 42.5 * i) + ', 51)';
                                ctx.fillRect(startX, startY + width * i, width, width)
                            }
                            ctx.fillStyle = 'rgb(225, 96, 96)';
                            ctx.fillRect(startX - width, startY + width, width, width);
                            if(startX - width <= smallX){
                                smallX = startX - width
                            }
                            if(startX >= bigX){
                                bigX = startX
                            }
                            break;

                    }
                    break;
            }
        },
        freeFall: function(){
            var y = startY,
                x = startX,
                types = ["Field", "Z", "S", "L", "F", "I", "T"],
                directs = ["H", "V"],
                specialT = ["N", "J"],
                tree = ["L", "F", "T", "Z", "S"],
                four = ["I"],
                longDirec = ["V", "J"],
                blockN = 2,
                type,
                direct;

            type = types[Math.floor(types.length * Math.random())];

            if(type == "T" || type == "F"){
                directs = directs.concat(specialT);
            }
            direct = directs[Math.floor(directs.length * Math.random())];

            if(type == "I" &&
                direct == "H"){
                blockN = 1;
            }

            if($.inArray(type, tree) >= 0 &&
                $.inArray(direct, longDirec) >= 0){
                blockN = 3
            }

            if($.inArray(type, four) >= 0 &&
                $.inArray(direct, longDirec) >= 0){
                blockN = 4
            }

            game.drawFour(x, y, type, direct);

            var start = setInterval(function(){
                y += 1;

                game.drawFour(x, y, type, direct);

                if(y + width * blockN > $(".game-content").height()){
                    clearInterval(start);
                }
                console.log(x, y);
                console.log(smallX, bigX);
            }, 30);

            $(".turn-left").unbind("click").bind("click", function(){
                x -= width;
                var num = Math.floor((bigX - smallX) / width);

                if(Math.floor(x - width * num) <= 0){
                    x = 0
                }else{
                    game.drawFour(x, y, type, direct);
                }
            });

            $(".turn-right").unbind("click").bind("click", function(){
                x += width;
                var num = Math.floor((bigX - smallX) / width);

                if(Math.floor(x + width * num) >= $grid.width()){
                    x = width * (10 - num);
                    return;
                }else{
                    game.drawFour(x, y, type, direct);
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
            var $gridH = $grid.height(),
                $scoreH = $(".score-grade").height();


            $(".game-content").css({
                height: $gridH - $scoreH + "px",
                width: "100%"
            });

            $canvas.attr("height", $(".game-content").height() + "px");
            $canvas.attr("width", $gridH + "px");
        }
    };

    game.render();
    $el.on("click", ".button-start", game.start);
})();