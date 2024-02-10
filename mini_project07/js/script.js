let eye_ref = document.querySelectorAll(".eye");

let events = ["mousemove", "touchmove"];

function isTouchDevice(){
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
}

events.forEach((eventType) => {
    document.body.addEventListener(eventType, event => {
        eye_ref.forEach((eye) => {
            let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
            //console.log(eyeX, eyeY)

            let x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
            let y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

            let radian = Math.atan2(x - eyeX, y - eyeY);
            let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
            //console.log(rotationDegrees)
            eye.style.transform = "rotate(" + rotationDegrees + "deg)";
        });
    });
});