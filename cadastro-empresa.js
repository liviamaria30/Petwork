document.getElementById('formCadastroEmpresa').addEventListener('submit', function(e) {
  e.preventDefault();
 
  const nome = document.getElementById('nomeEmpresa').value;
  const cnpj = document.getElementById('cnpj').value;
 
  if (!nome || !cnpj) {
    alert('Preencha todos os campos');
    return;
  }
 
  console.log('Empresa cadastrada com sucesso:', { nome, cnpj });
 
  // Redireciona para a página inicial
 
   window.location.href = 'home.html';
});
 
 