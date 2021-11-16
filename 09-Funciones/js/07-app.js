
iniciarApp();

function iniciarApp() {
  console.log('Iniciando app...');

  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda función');
  usuarioAutenticado('Daniel');
}


function usuarioAutenticado(usuario) {
  console.log('autenticación de usaurio... esere...');
  console.log(`Usuario autenticado exitosamente, ${usuario}`);
}
