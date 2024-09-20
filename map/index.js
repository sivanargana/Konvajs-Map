import './map.scss';
import Map from './map.webp';
import * as Konva from 'konva';
import Resizing from './resize';
import Panning from './panning';
import Zooming from './zooming';
let stage = new Konva.Stage({
  container: 'canvas',
});
let layer = new Konva.Layer();
let rect = new Konva.Rect({
  x: 300,
  y: 600,
  width: 100,
  height: 50,
  fill: 'green',
  stroke: 'black',
  strokeWidth: 4,
});
Konva.Image.fromURL(Map, function (image) {
  image.setAttrs({
    x: 0,
    y: 0,
  });
  layer.add(image);
  layer.add(rect);
});
stage.add(layer);
layer.draw();
Resizing(stage)
Panning(stage, layer)
Zooming(stage, layer)