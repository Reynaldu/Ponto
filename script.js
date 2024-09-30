const script_do_google = 'https://script.google.com/macros/s/AKfycbyeK1LxJV9-hib8zub702YkInHiAxucQKyfrcpinkgaT71CU9kdhN021YJXMqvPh3yDmA/exec'
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function(e))  {
    e.preventDefault();

    fetch(script_do_google,{ method: 'POST',body: new FormData(dados_do_formulario) })
    .then(response => {
        alert('Dados enviados com sucesso!', response);
        dados_do_formulario.reset();
    })
    .catch(error => 
            console.error('Erro no envio dos dados',error) ;   
    
});
