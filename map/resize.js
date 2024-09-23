let container = document.querySelector(".interface-body");
const Resizing = (stage) => {
    let stageResize = () => {
        stage.setWidth(container.getBoundingClientRect().width),
        stage.setHeight(container.getBoundingClientRect().height);
    }
    stageResize()
    window.onresize = () => {
        stageResize()
    }
}
export default Resizing;