import * as Konva from 'konva';
import '../style.scss';
const params = new URLSearchParams(new URL(window.location.href).search);
fetch(`http://localhost:3000/map?id=${params.get("id")}`, { method: "GET" }).then((res) => res.json()).then((res) => {
  let json = JSON.parse(res.json);
  json.children.forEach(layer => {
    let shapes = layer.children.filter(item => item = item.className !== "Transformer");
    layer.children = shapes;
    layer.children.forEach(shape => {
      if (shape.className == "Rect") {
        shape.attrs.draggable = false;
      }
      if (shape.className == "Circle") {
        shape.attrs.draggable = false;
      }
   
    });
  });
  let stage = Konva.Node.create(json, 'canvas');
  let background = stage.findOne("#background");
  let img = new Image();
  img.src = res.image;
  background.attrs.image = img;
  let nodes = stage.children[0].children.filter((item) => item.className !== "Image");
  nodes.forEach((item) => {
    item.on("mouseenter", (e) => {
      e.target.setAttrs({ fill: "blue" });
      console.log(e.target.attrs.customData)
    })
    item.on("mouseleave", (e) => {
      e.target.setAttrs({ fill: "green" })
    })
  })
 
})
