let inputDirection = { x: 0, y: 0 };
let lastInputDirection =  { x: 0, y: 0 };
let start = false

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      start = true
        if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      start = true
        if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 };
      break;
      case "ArrowLeft":
        start = true
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: -1, y: 0 };
        break;

    case "ArrowRight":
      start = true
        if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
    lastInputDirection = inputDirection
  return {inputDirection,start}
}