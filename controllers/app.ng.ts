namespace MyApp.Controllers {

    export class MainController {
        constructor(public $state: ng.ui.IStateService) { }
    }
    angular.module('MyApp').controller('MainController', MainController);

    export class Page1Controller {
        public message = 'Hello from Page1!!!';
    }

    export class Page2Controller {
        public message = 'Hello from Page2!!!';

        doSomething() {
            this.$state.go('Page1');
        }

        constructor(private $state: ng.ui.IStateService) { }
    }
}

// // create canvas
// let canvas;
// let draw;
// let zombie = new Image();
// let srt;
// let dx = 5;
// let dy = 5;
// let x = 200;
// let y = 5;
// let WIDTH = 560;
// let HEIGHT = 585;
// let n;
// let img = new Image();
// let collision;
//
//
// function rect(x,y,w,h) {
// srt.beginPath();
// srt.rect(x,y,w,h);
// srt.closePath();
// srt.fill();
// }
//
// function clear() {
// srt.clearRect(0, 0, WIDTH, HEIGHT);
// srt.drawImage(img, 0, 0);
//
// }
//
// function init() {
// canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
// srt = canvas.getContext("2d");
// img.src = "images/maze.jpg";
// return setInterval(draw, 0);
// }
// function zom(){
//   zombie.src="images/zombie.jpg";
//   return setInterval(draw, 10);
// }
//
//
// window.addEventListener('load', () => {
//       srt.drawImage(img, 0, 0);
//   });
//   window.addEventListener('load', () => {
//         srt.drawImage(zombie, 0, 0);
//     });
//     function doKeyDown(evt){
//     switch (evt.keyCode) {
//     case 38:  //up arrow
//     if (y - dy > 0){
//     y -= dy;
//     clear();
//     checkcollision();
//     if (collision == 1){
//     y += dy;
//     collision = 0;
//     }
//     }
//
//     break;
//     case 40:  //down arrow
//     if (y + dy < HEIGHT ){
//     y += dy;
//     clear();
//     checkcollision();
//     if (collision == 1){
//     y -= dy;
//     collision = 0;
//     }
//     }
//
//     break;
//     case 37:  // left arrow
//     if (x - dx > 0){
//     x -= dx;
//     clear();
//     checkcollision();
//     if (collision == 1){
//     x += dx;
//     collision = 0;
//     }
//     }
//     break;
//     case 39:  //right arrow
//     if ((x + dx < WIDTH)){
//     x += dx;
//     clear();
//     checkcollision();
//     if (collision == 1){
//     x -= dx;
//     collision = 0;
//     }
//     }
//     break;
//     }
//     }
//
//     function checkcollision() {
//     let imgd = srt.getImageData(x, y, 15, 15);
//     let pix = imgd.data;
//     for (let i = 0; n = pix.length, i < n; i += 4) {
//     if (pix[i] == 0) {
//     collision = 1;
//     }
//     }
//     }
//
//     function sDraw() {
//     clear();
//     srt.fillStyle = "purple";
//     rect(x, y, 15,15);
//     }
//
//     init();
//     zom();
//     window.addEventListener('keydown',doKeyDown,true);
