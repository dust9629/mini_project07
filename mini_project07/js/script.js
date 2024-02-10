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
            console.log(eyeX, eyeY)
        });
    });
});