import {update as updateSnake,draw as drawSnake,SNAKE_SPEED,getSnakeHead,snakeIntersection,} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsiderGrid } from "./grid.js";
import { getScore } from "./score.js";
import { getRecord, setRecord } from "./record.js";


let lastRenderTime = 0;
let gameOver = false;
const score = document.getElementById('score')

const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (
      confirm("Вы проиграли. Ваш результат: " + getScore() + ". Нажмите OK.")
    ) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
 
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
  
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  drawScore();
  const record = getRecord();
  drawRecord(record);
  

}

function drawScore() {
  const scoreElement = document.getElementById("score-display");
  scoreElement.innerText = "Счет: " + getScore();
  
}

function drawRecord(record) {
  const recordElement = document.getElementById("record-display");
  recordElement.innerText = "Рекорд: " + record;
}


function checkDeath() {
  gameOver = outsiderGrid(getSnakeHead()) || snakeIntersection();
  if (gameOver) {
    const currentScore = getScore();
    const currentRecord = getRecord();
    if (currentScore > currentRecord) {
      setRecord(currentScore);
    }
  }
}


