export default function animationLoop (callback) {

    var handler = {lastTime: 0, deltaTime: 0, animationFrame: null, enterFrame, callFrame, stop};

    function enterFrame (elapsedTime) {
        handler.deltaTime = !handler.lastTime ? 0 : elapsedTime - handler.lastTime;
        handler.lastTime = elapsedTime;
        callback(handler);
        callFrame();
    }


    function callFrame () {
        handler.animationFrame = requestAnimationFrame(enterFrame);
    }


    function stop () {
        cancelAnimationFrame(handler.animationFrame);
        handler.animationFrame = null;
    }


    callFrame();

    return handler;
}