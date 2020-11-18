

exports.list = (req, res) => {
  console.log('Login controller');
  var messages = [{
    id:1,
    body: `Dispositivo: Batería Modelo Bt-10. Temperatura 39°`,
    dateTime: new Date(),
    type: 'danger'
  },{
    id:2,
    body: `Dispositivo: Batería Modelo Bt-9. Temperatura 25°`,
    dateTime: new Date(),
    type: 'warning'
  },{
    id:3,
    body: `Dispositivo: Batería Modelo Bt-8. Temperatura 10°`,
    dateTime: new Date(),
    type: 'info'
  },{
    id:4,
    body: `Dispositivo: Batería Modelo Bt-7. Temperatura 14`,
    dateTime: new Date(),
    type: 'info'
  },{
    id:5,
    body: `Dispositivo: Batería Modelo Bt-8. Temperatura 11`,
    dateTime: new Date(),
    type: 'info'
  }];

  res.send(messages);
}
