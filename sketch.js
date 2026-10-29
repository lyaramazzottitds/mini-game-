//Projeto mini game - Parte 1
// criando player 01
//Movimentando player01

let xPosicao = 200;
let yPosicao = 200;
let velocidade = 5;
let fundo;

async function setup() {
  createCanvas(400, 400);
  fundo = await loadImage("FUNDO.png")
}

function draw() {
  background(fundo);
  circle(xPosicao,yPosicao,30)
  movimentaPlayer01();

}
  //------------Função Movimenta Player01---
  function movimentaPlayer01(){
  
  if(keyIsDown(LEFT_ARROW)){
    xPosicao -= velocidade
    if(xPosicao < 0){
      xPosicao = 0
    }
    }
  if(keyIsDown(RIGHT_ARROW)){
    xPosicao += velocidade
    if (xPosicao > width){
      xPosicao = width;
    }
  }
  if(keyIsDown(UP_ARROW)){
    yPosicao -= velocidade  
    if(yPosicao < 0){
      yPosicao = 0;
    }
    }
    if(keyIsDown(DOWN_ARROW)){
      yPosicao += velocidade
      if(yPosicao > height){
        yPosicao = height;
      }
   }
}
