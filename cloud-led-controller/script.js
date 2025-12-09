let delayValue = 1000;

async function loadDelay() {
    const r = await fetch("/api/getDelay");
    const d = await r.json();
    delayValue = d.delay;
    document.getElementById("delayValue").textContent = delayValue;
}

async function changeDelay(step) {
    delayValue += step;
    if (delayValue < 100) delayValue = 100;

    fetch(`/api/setDelay?value=${delayValue}`);

    document.getElementById("delayValue").textContent = delayValue;
}

// auto refresh dashboard every 1 sec
setInterval(loadDelay, 1000);

loadDelay();
