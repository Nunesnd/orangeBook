const btnSalvar = document.querySelector("#btnSave");

btnSalvar.addEventListener("click", function(e){
    e.preventDefault();
    const formCad = document.querySelector("#form");
    
    let nomeCad = formCad.nome.value;
    let foneCad = formCad.fone.value;
    let emailCad = formCad.email.value;

    if (nomeCad != ""){
        document.getElementById('nome').value='';
    }

    if (foneCad != ""){
        document.getElementById('fone').value='';
    }

    if (emailCad != ""){
        document.getElementById('email').value='';
    }

    
    
    alert(nomeCad+" "+foneCad+" "+emailCad);

})

