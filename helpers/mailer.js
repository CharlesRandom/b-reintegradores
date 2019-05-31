const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth:{
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

function welcomeMail(email, user){
  return transport.sendMail({
    to:email,
    subject: "Bienvenido a Reintegradores!",
    from: "contacto@reintegradores.com",
    html: 
    `<div style="margin: 0%; font-family: Avenir, Arial, Helvetica, sans-serif">
          <div style="position: relative;">
              <div style="position: relative; padding: 3rem;">
                  <img style="width:100%; max-width: 500px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/Logo_Hz_Reintegradores.png" alt="">
                  <p style="width: 70%; margin-top: 2rem; font-size: 2.5rem; font-weight: bold;">¡Hola ${user.username}!</p>
                  <p style="font-weight: bold; font-size: 1.2rem; width: 50%;">Por favor confirma tu correo electrónico dando click en la liga o copiándola en tu navegador:</p>
                  <a href=https://reintegradoresdev.herokuapp.com/confirm/${user.confirmationCode}><p style="font-weight: lighter; font-size: 1.2rem; width: 50%;">https://reintegradoresdev.herokuapp.com/confirm/${user.confirmationCode}</p></a>
                  <p style="font-weight: bold; font-size: 1.2rem; width: 50%;">Tienes 24 horas para confirmar tu correo, de lo contrario no podrás acceder a tu cuenta</p>
                  <p style="margin-top: 3rem; font-weight: bold; font-size: 1.2rem; width: 60%;">visita www.reintegradores.com.mx</p>
                  <p style="font-weight: bold; font-size: 1.2rem; width: 50%;">Este correo fue enciado a ${email}</p>
              </div>
              <style scoped>
                  #rompecabezas{
                    position: absolute; 
                    top: 0; 
                    right: 0;
                  }
                  @media (max-width: 800px) {
                      #rompecabezas {
                          display: none;
                      }
                  }
              </style>
              <div id="rompecabezas" style="position: absolute; top: 0; right: 0;">
                  <img style="position: absolute; top: 0; right: 0; width: 250px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/rompecabzas_imagen.png" alt="">
              </div>
          </div>
          <div>
              <div style="float: left; width: 25%; height: 10px; background-color: #90b249"></div>
              <div style="float: left; width: 25%; height: 10px; background-color: #4a92bd"></div>
              <div style="float: left; width: 25%; height: 10px; background-color: #e88246"></div>
              <div style="float: left; width: 25%; height: 10px; background-color: #bc3269"></div>
          </div>
          <br>
          <div style="display: flex; position: relative; padding: 3rem; justify-content: flex-start; align-items: center; background-color: #f5f5f5">
              <p style="font-weight: lighter; font-size: 1.2rem; margin-right: 2rem;">Síguenos en redes</p>
              <a href="#"><img style="width: 50px; height: 50px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/Icono_twitter.png" alt=""></a> 
              <a href="#"><img style="width: 50px; height: 50px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/Icono_youtube.png" alt=""></a> 
              <a href="#"><img style="width: 50px; height: 50px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/Icono_in.png" alt=""></a> 
              <a href="#"><img style="width: 50px; height: 50px;" src="https://res.cloudinary.com/gerard0jr/image/upload/v1559242444/Neobase/Reintegradores/mail/Icono_Fb.png" alt=""></a> 
          </div>
      </div>`
  }).then(res=>{
    console.log(res)
  }).catch(e=>{
    console.log(e)
  })
}

module.exports = {welcomeMail}