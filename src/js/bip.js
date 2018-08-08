const inputText = document.querySelector('input');

inputText.addEventListener('keypress', (event) => {
  let key = event.which || event.keyCode;
  if (key==13) {
      let idBip = inputText.value;
      console.log(idBip);
      inputText.value = '';
      fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${idBip}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
          let render = '';
         // console.log('mi objeto es' + myObject);
         render += `<div`;
         render += `<p>Saldo : ${data.saldoTarjeta}</p>`;
         render += `</div>`;
          appContainer.innerHTML = render;
      })
      .catch(error => console.error(error))
  }
})
