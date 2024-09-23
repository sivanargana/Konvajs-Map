import * as Konva from 'konva';




const AddShape = (shape, layer) => {
    let rect = new Konva.Rect({
        x: 0,
        y: 0,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        strokeScaleEnabled: false,
    });
    
    let circle = new Konva.Circle({
        x: 50,
        y: 50,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        strokeScaleEnabled: false,
        customData: { status: "sold" }
    });
    
    let text = new Konva.Text({
        x: 0,
        y: 0,
        text:"hello",
        fill: "yellow"
    });

    let group = new Konva.Group({
        x: 200,
        y: 200,
        draggable: true,
        customData: { status: "sold" }
    })

    group.destroyChildren();

    switch (shape) {
        case 'rect':
       
      
        
        group.add(rect,text)
        layer.add(group);
        
            
            break;
        case 'circle':
        
    
        group.add(circle,text)
        layer.add(group);

    }
}
export default AddShape;