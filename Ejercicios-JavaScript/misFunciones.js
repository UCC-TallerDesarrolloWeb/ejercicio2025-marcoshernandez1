/**
 * Conversión de unidades, de metros, yardas, pies y pulgadas.
 *
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */

convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        met= 0.0254 * valor;
    pie = 0.083333 * valor;
    yar = 0.02777 * valor;
    }
    else if(id==="pie"){
      pul = 12 * valor;
   met = 0.304 * valor;
    yar= 0.33333 * valor;  

    }else if(id==="yarda"){
       pul = 36 * valor;
   pie = 3 * valor;
    met = 0.9144 * valor;
    }
    document.lasunidades.unid_metro.value = Math.round(met*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie);
    document.lasunidades.unid_yarda.value = Math.round(yar);
}

function cambiarunidades(id, value) {
    
let valor = parseFloat(value);
  if (isNaN(valor)) {
    alert("se ingreso un valor invalido");

    document.lasunidades.unid_metro.value = "";
    document.lasunidades.unid_pulgada.value = "";
    document.lasunidades.unid_pie.value = "";
    document.lasunidades.unid_yarda.value = "";
  } else if (id == "metro") {
    document.lasunidades.unid_pulgada.value = 39.3701 * valor;
    document.lasunidades.unid_pie.value = 3.28084 * valor;
    document.lasunidades.unid_yarda.value = 1.09361 * valor;
  }
  else if (id == "pulgada") {
    document.lasunidades.unid_metro.value = 0.0254 * valor;
    document.lasunidades.unid_pie.value = 0.083333 * valor;
    document.lasunidades.unid_yarda.value = 0.02777 * valor;
  }
  else if (id == "pie") {
    document.lasunidades.unid_pulgada.value = 12 * valor;
    document.lasunidades.unid_metro.value = 0.304 * valor;
    document.lasunidades.unid_yarda.value = 0.33333 * valor;
  }
  else if (id == "yarda") {
    document.lasunidades.unid_pulgada.value = 36 * valor;
    document.lasunidades.unid_pie.value = 3 * valor;
    document.lasunidades.unid_metro.value = 0.9144 * valor;
  }

}

function convertirGR(id) {
    var grad, rad;

    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
