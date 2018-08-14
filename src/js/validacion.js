window.validarMail = () => {
    emailCif = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailCif.test(email.value)) {
      console.log(' email valido');
      return true;
    } else {
      console.log('email incorrecto');
      return false;
    }

    let claveUser = document.getElementById('password').value
    if(claveUser.length <= 8){
        console.log('clave ok!');
        return true;
    }
    else{
        console.log('clave incorrecta,debe contener máx 8 números');
        return false;
    }

};