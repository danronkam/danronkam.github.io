import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;


const Banner = () => {

  let img;

  // const preLoad = () => {
  // }
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500, p5.WEBGL).parent(canvasParentRef);
    img = p5.loadImage("frontend/public/kamcube.png");

  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);

    p5.translate(0, 0, 0);
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.texture(img)
    p5.box(100, 100, 100);
    p5.pop();
  
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Banner