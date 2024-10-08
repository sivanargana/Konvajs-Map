import './add.scss';
import Resizing from './resize';
import Panning from './panning';
import Zooming from './zooming';
import AddShape from './addshape';
import * as Konva from 'konva';
import Export from './export';
let namectrl = document.querySelector('[data-control="name"]');
let upload = document.querySelector('[data-type="upload"]');
let uploaded = "";

let selectedObj;



let stage = new Konva.Stage({
  container: 'canvas',
});
let layer = new Konva.Layer();
let container = document.querySelector(".interface-body");
upload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    // Convert the file to Base64
    reader.readAsDataURL(file);
    // When the conversion is complete, log the Base64 string
    reader.onload = function () {
      uploaded = reader.result;
      Konva.Image.fromURL(uploaded, function (image) {
        image.setAttrs({
          id: "background",
          x: 0,
          y: 0,
        });
        layer.add(image);
        layer.batchDraw()
      });
      Resizing(stage)
      // Panning(stage, layer)
      // Zooming(stage, layer);
      // This is your Base64 encoded file
    };
    reader.onerror = function (error) {
      console.error('Error: ', error);
    };
  }
})
stage.add(layer);
layer.draw();
document.querySelectorAll('[data-shape]').forEach(item => {
  item.addEventListener("click", (e) => {
    AddShape(e.target.dataset.shape, layer);
    const lastChild = stage.children[0].children[stage.children[0].children.length - 1];
    stage.getLayers()[0].add(new Konva.Transformer({
      nodes: [lastChild],
      padding: 5,
      ignoreStroke: true
    }));
    layer.draw();

    stage.children.forEach((layer)=>{
      layer.children.forEach((object)=>{

 
        if(object.nodeType == "Group"){

          object.on("click",(e)=>{

            selectedObj = e.currentTarget;

            let html = "";

            selectedObj.children.forEach((item)=>{

              html += `<h5>${item.className}</h5>`;
              html += `<div class="row">`;
              Object.keys(item.attrs).forEach((attr)=>{
                html += `<div class="col-6">`;
                html += `<div class="small text-truncate">${attr}</div>`;
                html += `</div>`;
                html += `<div class="col-6">`;
                html += `<input type="text" class="form-control form-control-sm" value="${item.attrs[attr]}" />`;
                html += `</div>`;

              })
              html += `</div>`;

            })
       

            document.querySelector(".attributes").innerHTML = html;
            

            // console.log(selectedObj.children[0].attrs)

          })

        }
    
 
      })
    })
  })
})


document.querySelector('[data-type="save"]').addEventListener("click", (e) => {
  if (namectrl.value !== "" && uploaded !== "") {
    let obj = { name: namectrl.value, image: uploaded, json: stage.toJSON() }
    let body = JSON.stringify(obj);
    fetch("http://localhost:3000/map",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      }).then((res) => res.json()).then((res) => {
        location = "index.html"
      })
  } else {
    alert("name & image required!")
  }
 
})
