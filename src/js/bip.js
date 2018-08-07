
fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=23501780')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))