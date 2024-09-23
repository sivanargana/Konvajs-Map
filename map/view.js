import * as Konva from 'konva';
import '../style.scss';
 
 

fetch("http://localhost:3000/map",{ method:"GET"}).then((res)=>res.json()).then((res)=>{

  let json = JSON.parse(res[0].svg);

 

 json.children.forEach(layer => {

  let shapes = layer.children.filter(item=>item = item.className !== "Transformer");

  layer.children = shapes;




     layer.children.forEach(shape => {

     

      if(shape.className == "Rect"){
        shape.attrs.draggable = false;
 
      }

  

      if(shape.className == "Circle"){

       
        shape.attrs.draggable = false;
 
      }

      if(shape.className == "Image"){

        let img = new Image();
        img.scaleX = 1;
        img.scaleY = 1;
        img.src = shape.attrs.customData.image;

     shape.attrs.image = img;
      

      }

       
      
    });
  });

 

  let stage = Konva.Node.create(json, 'canvas');
  let background = stage.findOne("#background");
 
  stage.getContainer().style.border = "1px solid blue";
  stage.getContainer().style.aspectRatio = background.getImage().width / background.getImage().height;


  // console.dir(stage.getContainer().getBoundingClientRect().width)

 

// console.log( stage.getContainer())
   

  stage.setWidth(background.getImage().width)
  stage.setHeight(background.getImage().height)
  // stage.setScale({x:0.4,y:0.4})


  // stage.setWidth(stage.getContainer().getBoundingClientRect().width)
  // stage.setHeight(stage.getContainer().getBoundingClientRect().height)

   

 

 
})
