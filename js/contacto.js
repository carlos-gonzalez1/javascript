//FORMULARIO CONTACTO

const inputs = document.getElementsByClassName('formulario__input');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup',function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijo');
        }else{
            this.nextElementSibling.classList.remove('fijo')
        }
    })
}