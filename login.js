const usuarioPadrao = 'admin'
const senhaPadrao = '123'

function login(){

  const usuario = document.getElementById('usuario').value
  const senha = document.getElementById('senha').value
  const erro = document.getElementById('erro')

  if(usuario === usuarioPadrao && senha === senhaPadrao){

    localStorage.setItem('logado', 'true')

    window.location.href = 'index.html'

  } else {

    erro.innerHTML = 'Usuário ou senha incorretos'
  }
}
