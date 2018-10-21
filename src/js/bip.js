window.getBip = () => {
  let idBip = document.getElementById("numBip").value;
  console.log(idBip);
  let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${idBip}`;
  fetch(url)
    .then(response => response.json())
    .then(idBip => {
      console.log(idBip);
      infoSaldo(idBip);
    })
    .catch(error => {
      console.log(error);
    });

  let divSaldo = document.getElementById('divSaldo');
  let infoSaldo = (idBip) => {
    let render = '';
    render += `<div class="container my-3">`;
    render += `<div class="row">`;
    render += `<div class="col-sm-12 text-center">`;
    render += `<div class="mostrarSaldo">`
    render += `<p class="titulo">SALDO TOTAL</p>`;
    render += `</div>`
    render += `<div class="mostrarSaldo2">`
    render += `<p class="saldo"> ${idBip.saldoTarjeta}</p>`;
    render += `</div>`;
    render += `</div>`;
    render += `</div>`;
    divSaldo.innerHTML = render;
  };
}

window.calculatorTarifa = () => {
  let idBip = document.getElementById('numBip').value;
  let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${idBip}`;
  fetch(url)
    .then(response => response.json())
    .then(idBip => {
      calculator(idBip);
      let saldoBip= idBip.saldoTarjeta;
      console.log("EL SALDO ES " + saldoBip);
    })
    .cath(error => {
      console.log(error);

    });
   
  let calculator = (idBip) => {
    let selector = document.getElementById("boxSelect");
    let opciones = document.getElementsByTagName("option")[boxSelect].value;
    infoSaldoActual = idBip[saldoTarjeta].replace(/[$,.]+/g,"");
    let costoPasaje = document.getElementById("costoPasaje");
    let saldoFinal = document.getElementById("saldoFinal");
    if (option == 1) {
      TarifaAlta = 760;
      saldoFinal = infoSaldoActual - TarifaAlta;
      let costoPasaje = '';
      render += `<div class="container my-3">`;
      render += `<div class="row">`;
      render += `<div class="col-sm-12 text-center">`;
      render += `<div class="mostrarSaldo">`
      render += `<p class="titulo">COSTO PASAJE</p>`;
      render += `</div>`
      render += `<div class="mostrarSaldo2">`
      render += `<p class="saldo">$costoPasaje</p>`;
      render += `</div>`;
      render += `</div>`;
      render += `</div>`;
      pasaje.innerHTML = costoPasaje;

      let saldoFinal = '';
      render += `<div class="container my-3">`;
      render += `<div class="row">`;
      render += `<div class="col-sm-12 text-center">`;
      render += `<div class="mostrarSaldo">`
      render += `<p class="titulo">SALDO FINAL</p>`;
      render += `</div>`
      render += `<div class="mostrarSaldo2">`
      render += `<p class="saldo">$saldoFinal</p>`;
      render += `</div>`;
      render += `</div>`;
      render += `</div>`;
      saldoRestante.innerHTML = saldoFinal;
    }
  }
};
