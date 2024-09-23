import * as Konva from 'konva';
const AddShape = (shape, layer) => {

    switch (shape) {

        case 'rect':

            let rect = new Konva.Rect({
                x: 20,
                y: 20,
                width: 100,
                height: 50,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
                strokeScaleEnabled: false,
                customData:{status:"sold"}
            });

            layer.add(rect)
      

            break;

        case 'circle':
            let circle = new Konva.Circle({
                x: 50,
                y: 50,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
                strokeScaleEnabled: false,
                customData:{status:"sold"}
            });

            layer.add(circle)
         


    }


}

export default AddShape;