const btnSalvar = document.querySelector("#btnSave");

btnSalvar.addEventListener("click", function(e){
    e.preventDefault();
    const formCad = document.querySelector("#form");
    
    let nomeCad = formCad.nome.value;
    let foneCad = formCad.fone.value;
    let emailCad = formCad.email.value;
    console.log(nomeCad, foneCad, emailCad);

})

