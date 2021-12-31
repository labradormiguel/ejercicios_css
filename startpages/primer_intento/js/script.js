// Carga categorias

$(document).ready(function () {

    $("#streaming").hide();
    $("#cursos").hide();
    $("#trabajo").hide();
    $("#recursos").hide();

    $.getJSON("data/categorias.json", function (datos) {
        for (let i = 0; i < datos.length; i++) {

            $("#categorias").append(
                `<ul>
                <li id="${datos[i].nombre}_menu">
                    <input type="button" class="${datos[i].nombre}"
                     value="${datos[i].nombre}" />
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
                <li class="separacion">
                    >\n
                    <a href="${datos[i].url}" class="enlace">
                        ${datos[i].nombre}
                    </a>
                </li>
            </ul>`
            )

        }
    });

    // Carga streaming

    $.getJSON("data/streaming.json", function (datos) {
        for (let i = 0; i < datos.length; i++) {

            $("#streaming").append(
                `<ul>
                <li class="separacion">
                    >\n
                    <a href="${datos[i].url}" class="enlace">
                        ${datos[i].nombre}
                    </a>
                </li>
            </ul>`
            )

        }
    });

    // Carga cursos

    $.getJSON("data/cursos.json", function (datos) {
        for (let i = 0; i < datos.length; i++) {

            $("#cursos").append(
                `<ul>
                <li class="separacion">
                    >\n
                    <a href="${datos[i].url}" class="enlace">
                        ${datos[i].nombre}
                    </a>
                </li>
            </ul>`
            )

        }
    });

    // Carga trabajo

    $.getJSON("data/trabajo.json", function (datos) {
        for (let i = 0; i < datos.length; i++) {

            $("#trabajo").append(
                `<ul>
                <li class="separacion">
                    >\n
                    <a href="${datos[i].url}" class="enlace">
                        ${datos[i].nombre}
                    </a>
                </li>
            </ul>`
            )

        }
    });

    // Carga recursos

    $.getJSON("data/recursos.json", function (datos) {
        for (let i = 0; i < datos.length; i++) {

            $("#recursos").append(
                `<ul>
                <li class="separacion">
                    >\n
                    <a href="${datos[i].url}" class="enlace">
                        ${datos[i].nombre}
                    </a>
                </li>
            </ul>`
            )

        }
    });

    $("body").on("click", ".noticias", function () {

        $("#streaming").hide();
        $("#cursos").hide();
        $("#trabajo").hide();
        $("#recursos").hide();
        $("#noticias").show();

    })

    $("body").on("click", ".streaming", function () {

        $("#noticias").hide();
        $("#streaming").show();
        $("#cursos").hide();
        $("#trabajo").hide();
        $("#recursos").hide();

    })

    $("body").on("click", ".cursos", function () {

        $("#noticias").hide();
        $("#streaming").hide();
        $("#cursos").show();
        $("#trabajo").hide();
        $("#recursos").hide();

    })

    $("body").on("click", ".trabajo", function () {

        $("#noticias").hide();
        $("#streaming").hide();
        $("#cursos").hide();
        $("#trabajo").show();
        $("#recursos").hide();

    })

    $("body").on("click", ".recursos", function () {

        $("#noticias").hide();
        $("#streaming").hide();
        $("#cursos").hide();
        $("#trabajo").hide();
        $("#recursos").show();

    })

});

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
        "" + nhour + ":" + nmin + ":" + nsec + "<br/>" + tday[nday] + ", "
        + ndate + " de " + tmonth[nmonth] + " de " + nyear + " ";
    // añadir + ap para modo 12H
}

window.onload = function () {
    GetClock();
    setInterval(GetClock, 1000);
}