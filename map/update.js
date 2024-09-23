import './add.scss';
import * as Konva from 'konva';
import Resizing from './resize';
import Panning from './panning';
import Zooming from './zooming';
let namectrl = document.querySelector('[data-control="name"]');
let upload = document.querySelector('[data-type="upload"]');
let uploaded = "";
const params = new URLSearchParams(new URL(window.location.href).search);
fetch(`http://localhost:3000/map?id=${params.get("id")}`, { method: "GET" }).then((res) => res.json()).then((res) => {
  let stage = Konva.Node.create(res.json, 'canvas');
  let background = stage.findOne("#background");
  namectrl.value = res.name;
  uploaded = res.image;
  let img = new Image();
  img.src = res.image;
  background.attrs.image = img;
  stage.getLayers()[0].batchDraw();
  Resizing(stage)
  Panning(stage, stage.getLayers()[0])
  Zooming(stage, stage.getLayers()[0]);
  stage.children[0].children.forEach((item) => {
    if (item.className !== "Image") {
      stage.getLayers()[0].add(new Konva.Transformer({
        nodes: [item],
        padding: 5,
        ignoreStroke: true
      }));
    }
  })
});