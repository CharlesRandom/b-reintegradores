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
    html: `
      <h1>Hola ${user.name}, bienvenido a Reintegradores</h1>
      <p>Haz click en la siguiente liga o ábrela en tu navegador para confirmar tu cuenta de correo</p>
      https://reintegradoresdev.herokuapp.com/auth/confirm/${user.confirmationCode}
    `
  }).then(res=>{
    console.log(res)
  }).catch(e=>{
    console.log(e)
  })
}

module.exports = {welcomeMail}