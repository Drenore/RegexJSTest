let form = document.querySelector('#logForm');



form.email.addEventListener('change',function() {
    validEmail(this);
    
})
form.mdp.addEventListener('change', function(){
    validPassword(this);
})

const validEmail = function(text){
    // on crée l'expression régulière pour comparer avec l'adresse mail récupérer
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
        );
        // on récupère la div pour retourner l'erreur ou si s'est correct 

    let retour = document.querySelector('#retourMail');
    let retourMdp = document.querySelector('#retourMdp');

        // le test avec les retours correspondant au résultat 
    if(emailRegExp.test(text.value)){
        
        retour.innerHTML = "L'adresse mail est correcte";
        retour.classList.remove('incorrect');
        retour.classList.add('correct');
        
    }else{
        retour.innerHTML = "L'adresse mail est incorrecte";
        retour.classList.add('incorrect');
        retour.classList.remove('correct');
    }

}
const validPassword = function(mdp)
{
    let msg;
    let valid = false;
        
    // Au moins 3 caractère
    if(mdp.value.length < 3 ){
        msg='Le mot de passe doit contenir au moins 3 caractères';
    }
    // Au moins un caractère maj
    else if(!/[A-Z]/.test(mdp.value)){
        msg ='Il doit contenir au moins une majuscule ';
    }
    // Au moins une minuscule
    else if(!/[a-z]/.test(mdp.value)){
        msg ='Il doit contenir au moins une minuscule';
    }
    // Au moins un chiffre 
    else if(!/[0-9]/.test(mdp.value)){
        msg = 'Il doit contenir au moins un chiffre';
    }
    else{
        msg = "Le mot de passe est valide";
        valid = true;
    }
    if(valid){
        retourMdp.innerHTML = "Le mot de passe est correct";
        retourMdp.classList.remove('incorrect');
        retourMdp.classList.add('correct');
    }else{
        retourMdp.innerHTML = "Le mot de passe est incorrecte";
        retourMdp.classList.remove('correct');
        retourMdp.classList.add('incorrect');

    }
    


}
    

