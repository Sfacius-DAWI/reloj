function inicio(){
    setInterval(numeros, 800)
}


function numeros() {
    let fechaActual = new Date();

    let hora = fechaActual.getHours();

    let minutos = fechaActual.getMinutes();

    let segundos = fechaActual.getSeconds();
    
    let a = document.getElementById("img1");
    if(a != null) {
        a.src = imagenes1(Math.floor(hora / 10));
    }
    document.getElementById("img2").src = (hora % 10) + "h.png";
    document.getElementById("img3").src = imagenes1(Math.floor(minutos / 10));
    document.getElementById("img4").src = imagenes1(minutos % 10);
    document.getElementById("img5").src = imagenes1(Math.floor(segundos / 10));
    document.getElementById("img6").src = imagenes1(segundos % 10);
}


function imagenes1(numero) {
    switch (numero) {
        case 0:
            return "0h.png";

        case 1:
            return "1h.png";

        case 2:

            return "2h.png";

        case 3:

            return "3h.png";

        case 4:

            return "4h.png";

        case 5:

            return "5h.png";

        case 6:

            return "6h.png";

        case 7:
            return "7h.png";

        case 8:
            return "8h.png";

        case 9:
            return "9h.png";

    }
}

