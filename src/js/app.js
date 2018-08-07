//Registro
function registerWithFirebase() {

    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario creado con éxito");
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}
//Login
function loginWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario inició sesión con éxito");
            location.href('home.html');
        })
        .catch((error) => {
            console.log("Error de firebase > Código > " + error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > " + error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}

//validar email 

validarMail = () => {
    var emailUser = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(emailUser)) {
      console.log('email valido ' + emailUser);
    } else {
      console.log('email incorrecto ' + emailUser);
    }
}

function validarNum(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

function validarLargo() {
    var claveUser = document.getElementById('clave').value
    if(claveUser.length <= 8){
        alert('clave ok!');
        return true
    }
    else{
        alert('clave incorrecta,debe contener máx 8 números');
        return false;
    }
}
