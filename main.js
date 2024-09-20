 import * as Konva from 'konva';

 let stage = new Konva.Stage({
  container: 'canvas', 
  width: 500,
  height: 500
});

let layer = new Konva.Layer();


Konva.Image.fromURL('https://msrcommunities.com/wp-content/uploads/2021/06/Reve59-Site-Plan-Updated-SOLD-edit-model-home-1.webp', function (image) {
  image.setAttrs({
    x: 200,
    y: 50,
    scaleX: 0.5,
    scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(image);
});
 
 
 
stage.add(layer);
layer.draw();

 
 