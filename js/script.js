function expande(button) {

    const resposta = button.parentElement.nextElementSibling;
    if (resposta.style.display === "none") {
        resposta.style.display = "block"; // Exibe a resposta quando está oculta
        document.getElementById('question1').innerHTML ='⌄'
        
        
       
    } else {
        resposta.style.display = "none"; // Oculta a resposta quando está visível
        document.getElementById('question1').innerHTML ='⌃'
    }
  }
  function expandir(button) {

    const resposta = button.parentElement.nextElementSibling;
    if (resposta.style.display === "none") {
        resposta.style.display = "block"; // Exibe a resposta quando está oculta
        document.getElementById('question2').innerHTML ='⌄'
        
       
    } else {
        resposta.style.display = "none"; // Oculta a resposta quando está visível
        document.getElementById('question2').innerHTML ='⌃'
    }
  }
  function expandi(button) {

    const resposta = button.parentElement.nextElementSibling;
    if (resposta.style.display === "none") {
        resposta.style.display = "block"; // Exibe a resposta quando está oculta
        document.getElementById('question3').innerHTML ='⌄'
        
       
    } else {
        resposta.style.display = "none"; // Oculta a resposta quando está visível
        document.getElementById('question3').innerHTML ='⌃'
    }
  }