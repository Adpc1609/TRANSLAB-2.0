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
  render += `<div class="row">`;
  render += `<div class="col-sm-6">`;
  render += `<p class="titulo">SALDO TOTAL</p>`;
  render += `<div id="continfo" class="col-sm-6">`
  render += `<p class="paldo"> ${idBip.saldoTarjeta}</p>`;
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
  calculatorTarifa(idBip);
})
.cath(error =>{
  console.log(error);

});

calculatorTarifa = (idBip) =>{
  let select = document.getElementById('inputGroupSelect01');
  console.log(select.value);
  let options=document.getElementsByTagName("option")[select.value-1];
  console.log(options);
 }
}