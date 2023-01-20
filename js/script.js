
function getTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let watch = document.querySelector("#screenWatch")
    watch.innerHTML = time
}

const nombreDelDiaSegunFecha = fecha => [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
][new Date(fecha).getDay()];

function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    let today = nombreDelDiaSegunFecha(date) + "  " + day + "/" + month + "/" + year

    let screenDate = document.querySelector("#screenDate")
    screenDate.innerHTML = today
}

function watchScreen() {
    getTime()
    getDate()
}

setInterval(watchScreen, 1000);