let form = document.querySelector('#logForm');

console.log(form.email);

form.email.addEventListener('change',function() {
    validEmail(this);
})

const validEmail = function(text){
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
        );
    let testEmail = emailRegExp.test(text.value);
    let retour = document.querySelector('#retourMail');

    if(testEmail === true ){
        
        retour.innerHTML = "L'adresse mail est correcte";
        retour.classList.add('correct');
    }else{
        retour.innerHTML = "L'adresse mail est incorrecte";
        retour.classList.add('incorrect');
    }
    
}