

exports.login = (req, res) => {
  console.log('Login controller');
  const { password, userName } = req.body;
  if (password === '123456' && userName === 'admin') {
    res.send({
      status: 'ok',
      currentAuthority: 'admin',
    });
    return;
  }
  if (password === '123456' && userName === 'user') {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
    return;
  }
  
  res.status(400).json({
    status: 'error',
    currentAuthority: 'guest',
    message: 'Usuario o contraseña incorrectos'
  });
}

exports.register = (req, res) => {
  console.log('Login controller');
  const { userName, userEmailAddress, password } = req.body;
  
}