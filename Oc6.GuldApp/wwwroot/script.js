(function () {
    const url = "https://butik.mad.coop.dk/drikkevarer/oel-og-cider/pilsner/lager/tuborg-guld-p-5740700030680";

    let started = false;
    let startX = 0;
    let startY = 0;

    var image = document.getElementById("img");

    image.addEventListener("touchstart", startTracking);

    image.addEventListener("mousedown", startTracking);

    image.addEventListener("touchend", endTracking);

    image.addEventListener("mouseleave", endTracking);

    image.addEventListener("mouseup", endTracking);

    function startTracking(ev) {
        startX = ev.clientX;
        startY = ev.clientY;
        started = true;
    }

    function endTracking(ev) {
        if (!started) {
            return;
        }

        const endX = ev.clientX;
        const endY = ev.clientY;

        const moveX = endX - startX;
        const moveY = endY - startY;
        const absX = Math.abs(moveX);
        const absY = Math.abs(moveY);

        if (absX < 100 && absY < 100) {
            return;
        }

        if (absX > absY) {
            if (moveX > 0) {
                image.classList.add("swipe", "swipeRight");
            }
            else {
                image.classList.add("swipe", "swipeLeft");
            }
        }
        else {
            if (moveY > 0) {
                image.classList.add("swipe", "swipeDown");
            }
            else {
                image.classList.add("swipe", "swipeUp");
            }
        }

        window.setTimeout(function () {
            window.location = url;
        }, 500);
    }
})();