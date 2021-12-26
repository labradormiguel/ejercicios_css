// Fecha y hora

tday = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves",
 "Viernes", "Sábado");
tmonth = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio",
 "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");

function GetClock() {
    var d = new Date();
    var nday = d.getDay(), nmonth = d.getMonth(), ndate = d.getDate(),
     nyear = d.getYear(), nhour = d.getHours(), nmin = d.getMinutes(), 
     nsec = d.getSeconds(), ap;

/*     if (nhour == 0) { ap = " AM"; nhour = 12; }
    else if (nhour < 12) { ap = " AM"; }
    else if (nhour == 12) { ap = " PM"; }
    else if (nhour > 12) { ap = " PM"; nhour -= 12; } */

    if (nyear < 1000) nyear += 1900;
    if (nmin <= 9) nmin = "0" + nmin;
    if (nsec <= 9) nsec = "0" + nsec;

    document.getElementById('timedate').innerHTML = 
    "" + tday[nday] + ", " + ndate + " de " + tmonth[nmonth] + " de " + nyear + " "
     + nhour + ":" + nmin + ":" + nsec + "";
     // añadir + ap para modo 12H
}

window.onload = function () {
    GetClock();
    setInterval(GetClock, 1000);
}

// Carga categorias

$.getJSON("data/categorias.json", function (datos) {
    for (let i = 0; i < datos.length; i++) {

        $("#categorias").append(
            `<ul>
                <li>
                    <mark class="${datos[i].nombre}">${datos[i].nombre}</mark>
                </li>
            </ul>`
        )

    }
})

// Carga noticias

$.getJSON("data/noticias.json", function (datos) {
    for (let i = 0; i < datos.length; i++) {

        $("#noticias").append(
            `<ul>
                <li><img src='${datos[i].logo}'>\n
                <a href="${datos[i].url}">${datos[i].nombre}</a></li>
            </ul>`
        )

    }
})
