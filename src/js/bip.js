window.getBip = ()=>{
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
let infoSaldo = (idBip) =>{
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

window.calculatorTarifa = ()=>{ 
let idBip = document.getElementById('numBip').value;
let url = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${idBip}`;
fetch(url)
.then(response => response.json())
.then(idBip =>{
  calculator(idBip);
})
.cath(error =>{
  console.log(error);

});

calculator = (idBip) =>{
  let select = document.getElementById('inputGroupSelect01');
  var value = select.options[select.selectedIndex].value;
  console.log(value);
 }
}

