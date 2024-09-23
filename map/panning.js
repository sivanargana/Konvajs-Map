import Common from "./common";

 

const Panning = (stage,layer) => {
let isDragging = false;
let previousPos = { x: 0, y: 0 };
let panningEnabled = false;


// Spacebar keydown event
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        panningEnabled = true;
        stage.container().style.cursor = 'grab'; // Change cursor to indicate panning
    }
});

// Spacebar keyup event
window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        panningEnabled = false;
        stage.container().style.cursor = 'default'; // Change cursor back to normal
    }
});

stage.on('mousedown touchstart', (e) => {
    if (!panningEnabled) return; // Only allow dragging if panning is enabled

    isDragging = true;
    previousPos.x = e.evt.clientX;
    previousPos.y = e.evt.clientY;
});

stage.on('mouseup touchend', () => {
    isDragging = false;
});

stage.on('mousemove touchmove', (e) => {
    if (!isDragging || !panningEnabled) return;

    const dx = e.evt.clientX - previousPos.x;
    const dy = e.evt.clientY - previousPos.y;

    // Move the stage
    stage.x(stage.x() + dx);
    stage.y(stage.y() + dy);

    previousPos.x = e.evt.clientX;
    previousPos.y = e.evt.clientY;

    // Boundary checks for panning
    const stageWidth = stage.width();
    const stageHeight = stage.height();
    const imgWidth = layer.getChildren().find(child => child instanceof Konva.Image).width() * Common.scale;
    const imgHeight = layer.getChildren().find(child => child instanceof Konva.Image).height() * Common.scale;

    

    // Constrain stage movement within boundaries
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

export default Panning;