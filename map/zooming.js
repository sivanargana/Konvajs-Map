import Common from "./common";

const Zooming = (stage,layer) => {
  
    let scaleBy = 1.1;
// Zoom In functionality
stage.on('wheel', (e) => {
    e.evt.preventDefault(); // Prevent default scrolling
    const mousePos = stage.getPointerPosition();

    // Calculate new scale
    const oldScale = Common.scale;
    Common.scale = e.evt.deltaY < 0 ? Common.scale * scaleBy : Common.scale / scaleBy;



    // Limit the zoom level
    Common.scale = Math.min(Common.scale, 5); // Max zoom level
    Common.scale = Math.max(Common.scale, 1); // Min zoom level
 
    // Update stage scale
    stage.scale({ x: Common.scale, y: Common.scale });

    // Adjust position to keep the mouse pointer at the same place
    const newPos = {
        x: mousePos.x - (mousePos.x - stage.x()) * (Common.scale / oldScale),
        y: mousePos.y - (mousePos.y - stage.y()) * (Common.scale / oldScale),
    };

    stage.position(newPos);

    // Boundary checks after zooming
    const imgWidth = layer.getChildren().find(child => child instanceof Konva.Image).width() * Common.scale;
    const imgHeight = layer.getChildren().find(child => child instanceof Konva.Image).height() * Common.scale;

    // Constrain stage position within boundaries
    const stageWidth = stage.width();
    const stageHeight = stage.height();

    if (stage.x() > 0) {
        stage.x(0);
    }
    if (stage.x() < stageWidth - imgWidth) {
        stage.x(stageWidth - imgWidth);
    }
    if (stage.y() > 0) {
        stage.y(0);
    }
    if (stage.y() < stageHeight - imgHeight) {
        stage.y(stageHeight - imgHeight);
    }

    layer.batchDraw();
});

 
}

export default Zooming;