


var canvas = document.getElementById( "myCanvas" );

var ctx = canvas.getContext( "2d" );
var cells = new Array(4);
var width = 115;
var score = 0;
var scoreLabel = document.getElementById('score');
var point_X, point_Y;

start();

function format(){
    for(var i=0; i<4; i++){
        cells[i]=new Array(4);
        for(var k=0; k<4; k++){
            cells[i][k]=0;
        }
    }
}
function cellDraw(){
    
    for(var i=0; i<4; i++){
        for(var k=0; k<4; k++){
            var tmp_w=i*width+8*(i+1);
            var tmp_y=k*width+8*(k+1);
            if(cells[i][k]==1){
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(tmp_w, tmp_y, width, width);    
            }
            else{
                ctx.fillStyle = "#D2691E";
                ctx.fillRect(tmp_w, tmp_y, width, width);
            }
        }
    }
}

function start(){
    point_X=Math.floor(Math.random() * 4);
    point_Y=Math.floor(Math.random() * 4);
    format();
    cells[point_X][point_Y]=1;
    cellDraw();
}

document.onkeydown = function (event) {
    if (event.keyCode === 97 || event.which === 49) {
      moveDown(); 
    } else if (event.keyCode === 98 || event.which === 50) {
      moveUp();
    } else if (event.keyCode === 99 || event.which === 51) {
      moveRight(); 
    } else if (event.keyCode === 100 || event.which === 52) {
      moveLeft(); 
    }else if (event.keyCode === 96 || event.which === 48) {
        //start();
        self.close ();
    }
}

function moveDown(){
    point_X++;
    if(point_X==4){
        alert("Game Over");
        start();
        score=0;
        return;
    }
    scoreLabel.innerHTML = 'Score : ' + (score+=2);
    if(score==100){
        alert("You Are Winer!!!")
        start();
        score=0;
        return;
    }
    cells[point_X-1][point_Y]=0;
    cells[point_X][point_Y]=1;
    cellDraw();
}

function moveUp(){
    point_X--;
    if(point_X<0){
        alert("Game Over");
        start();
        score=0;
        return
    }
    scoreLabel.innerHTML = 'Score : ' + (score+=2);
    if(score==100){
        alert("You Are Winer!!!")
        start();
        score=0;
        return;
    }
    cells[point_X+1][point_Y]=0;
    cells[point_X][point_Y]=1;
    cellDraw();
}

function moveRight(){
    point_X++, point_Y--;
    if(point_X==4 || point_Y<0){
        alert("Game Over");
        start();
        score=0;
        return;
    }
    scoreLabel.innerHTML = 'Score : ' + (score+=2);
    if(score==100){
        alert("You Are Winer!!!")
        start();
        score=0;
        return;
    }
    cells[point_X-1][point_Y+1]=0;
    cells[point_X][point_Y]=1;
    cellDraw();
}

function moveLeft(){
    point_X--, point_Y++;
    if(point_X<0 || point_Y==4){
        alert("Game Over");
        start();
        score=0;
        return;
    }
    scoreLabel.innerHTML = 'Score : ' + (score+=2);
    if(score==100){
        alert("You Are Winer!!!")
        start();
        score=0;
        return;
    }
    cells[point_X+1][point_Y-1]=0;
    cells[point_X][point_Y]=1;
    cellDraw();
}


