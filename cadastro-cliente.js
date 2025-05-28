// cadastro-cliente.js
document.getElementById('formCadastroCliente').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const nome = document.getElementById('nomeCliente').value;
  const email = document.getElementById('emailCliente').value;
  const senha = document.getElementById('senhaCliente').value;
  const telefone = document.getElementById('telefoneCliente').value;
 
  if (!nome || !email || !senha || !telefone) {
    alert('Preencha todos os campos');
    return;
  }
 
  console.log('Cliente cadastrado com sucesso:', { nome, email, telefone });
 
   window.location.href = 'home.html';
});
 
 