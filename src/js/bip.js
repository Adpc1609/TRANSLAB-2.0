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
/*calcular tarifa y pasaje */
window.calculatorTarifa = () => {
  let idBip = document.getElementById('numBip').value;
  let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${idBip}`;
  fetch(url)
    .then(response => response.json())
    .then(idBip =>{
      let saldoBip = idBip.saldoTarjeta
      let saldoSinPunto = saldoBip.replace(/[$,.]+/g,"");
      const select = document.getElementById("selectHorarios");
      const horarios = select.options[select.selectedIndex].value;
      let saldoResto= saldoSinPunto - horarios;
      let costoPasaje = document.getElementById("costoPasaje");
      let saldoFinal = document.getElementById("saldoFinal");

      let render = '';
      render += `<div class="container my-3">`;
      render += `<div class="row">`;
      render += `<div class="col-sm-12 text-center">`;
      render += `<div class="mostrarSaldo">`
      render += `<p class="titulo">COSTO PASAJE</p>`;
      render += `</div>`
      render += `<div class="mostrarSaldo2">`
      render += `<p class="saldo">${horarios}</p>`;
      render += `</div>`;
      render += `</div>`;
      render += `</div>`;
      costoPasaje.innerHTML = render;

      let render1= '';
      render1 += `<div class="container my-3">`;
      render1 += `<div class="row">`;
      render1 += `<div class="col-sm-12 text-center">`;
      render1 += `<div class="mostrarSaldo">`
      render1 += `<p class="titulo">SALDO FINAL</p>`;
      render1 += `</div>`
      render1 += `<div class="mostrarSaldo2">`
      render1 += `<p class="saldo">${saldoResto}</p>`;
      render1 += `</div>`;
      render1 += `</div>`;
      render1 += `</div>`;
      saldoFinal.innerHTML = render1;

   
    })
    
}

