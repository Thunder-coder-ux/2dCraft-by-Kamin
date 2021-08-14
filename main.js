var canvas = new fabric.Canvas('myCanvas');

player_x = 25;
player_y = 30;

block_width = 30;
block_height = 30;
var player_obj = "";
var block_obj = "" ;

function player_uptade() {
    fabric.Image.fromURL("sapnap.png", function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(160);
        player_obj.set({
            top:player_y,
            left:player_x });
            canvas.add(player_obj);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);
        block_obj.set({
            top:player_y,
            left:player_x });
            canvas.add(block_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '38'){

        console.log("Up and shift pressed together")
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }

    if(e.shiftKey == true && keyPressed == '40'){

        console.log("Down and shift key pressed together.");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(keyPressed == '87'){

        up();
        console.log("up");
    }

    if(keyPressed == '83'){

        down();
        console.log("down");
    }

    if(keyPressed == '68'){

        right();
        console.log("right");
    }

    if(keyPressed == '65'){

        left();
        console.log("left");
    }

    if(keyPressed == '66'){
        new_image('brick_block.jpg');
        console.log("b");
    }

    if( keyPressed == '72'){
        new_image('glowstone.png');
        console.log("h");
    }

    if(keyPressed == '71'){
        new_image('grass.png');
        console.log("g");
    }

    if(keyPressed == '67'){
        new_image('green_cnt_powder.png');
        console.log("c");
    }

    if(keyPressed == '76'){
        new_image('lime_ct_pwd.png');
        console.log("l");
    }

    if(keyPressed == '78'){
        new_image('netherack.jpg');
        console.log("n");
    }

    if(keyPressed == '79'){
        new_image('oak.jpg');
        console.log("o");
    }

    if(keyPressed == '80'){
        new_image('plank.png');
        console.log("p");
    }

    if(keyPressed == '84'){
        new_image('stone.jpg');
        console.log("t");
    }

    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    }

    if(keyPressed == '74'){
        new_image('glass.png');
        console.log("j");
    }
}


function up(){

    if(player_y >=0){
        player_y = player_y - block_height;
        console.log("block's height = " + block_height);
        console.log("When 'w' is pressed, x = " + player_x + " ,y = " +player_y);
        canvas.remove(player_obj);
        player_uptade();
    }
}

function down(){

    if(player_y <= 500){
        player_y =player_y + block_height;
        console.log("block's height = " + block_height);
        console.log("When 's' is pressed , x =" + player_x + ", y = " + player_y );
        canvas.remove(player_obj);
        player_uptade();
    }
}

function left(){

    if(player_x >= 0){
        player_x = player_x - block_width;
        console.log("block's width = " + block_width);
        console.log("When 'a' is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_obj);
        player_uptade();
    }
}

function right(){

    if(player_x <= 700){
        player_x = player_x + block_width;
        console.log(" block's width = " + block_width);
        console.log("When 'd' is pressed,x = " + player_x + ", y = " + player_y);
        canvas.remove(player_obj);
        player_uptade();
    }
}