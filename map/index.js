import './map.scss';
import Map from './map.webp';
import Resizing from './resize';
import Panning from './panning';
import Zooming from './zooming';
import AddShape from './addshape';
let stage = new Konva.Stage({
  container: 'canvas',
});
let layer = new Konva.Layer();

let container = document.querySelector(".interface-body");
 

Konva.Image.fromURL(Map, function (image) {
  image.setAttrs({
    x: 0,
    y: 0,
    scaleX:container.getBoundingClientRect().width / image.getImage().width,
    scaleY:container.getBoundingClientRect().width / image.getImage().width
  });
  layer.add(image);
 
});
stage.add(layer);
layer.draw();
Resizing(stage)
Panning(stage, layer)
Zooming(stage, layer)


document.querySelectorAll('[data-shape]').forEach(item=>{
  item.addEventListener("click",(e)=>{
    AddShape(e.target.dataset.shape,layer);
    layer.draw();
  })
})
document.querySelector('[data-type="save"]').addEventListener("click",(e)=>{


  localStorage.setItem("canvas",JSON.stringify(stage.toJSON()))

 
 
})
