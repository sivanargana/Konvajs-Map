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
            let tr = new Konva.Transformer({
                nodes: [rect],
                padding: 5,
                ignoreStroke: true
            });
            layer.add(tr);

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
            let trcircle = new Konva.Transformer({
                nodes: [circle],
                padding: 5,
                ignoreStroke: true
            });
            layer.add(trcircle);


    }


}

export default AddShape;