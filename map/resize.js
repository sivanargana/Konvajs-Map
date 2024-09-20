const Resizing = (stage) => {
    let stageResize = () => {
        stage.setWidth(window.innerWidth),
        stage.setHeight(window.innerHeight);
    }
    stageResize()
    window.onresize = () => {
        stageResize()
    }
}

export default Resizing;