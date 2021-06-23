let Bvalidator = {

    handleSubmit:(event) =>{

      event.preventDefault();
      let send = true;

      let inputs = form.querySelectorAll('input');

      Bvalidator.clearErrors(); // limpa o campo de erros 

      for(let i=0; i<inputs.length; i++) {
        let input = inputs[i];

       let check = Bvalidator.checkInput(input);
        if(check !== true) {
          send = false;
         Bvalidator.showError(input, check);
          //exibir o erro

        }

      }
      
      if(send) {
        form.submit();

      }
    },

    checkInput:(input) =>{ 
      let rules = input.getAttribute('data-rules');
      if(rules !== null) {
        rules = rules.split('-');

        for(let k in rules) {
          let rDetails = rules[k].split('=');
          switch(rDetails[0]) {
            case 'required':
              if(input.value == '') {
                return 'campo invalido !';
              }
            break;
            
            case 'min':
              break;
          }

        }
      }
      return true;

    },

    showError:(input, error)=>{
      input.style.borderColor = '#FF0000';
      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error; 

      input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:()=>{
      let errorElements = document.querySelectorAll('.error');
      
      for(let i=0; i<errorElements.length; i++) {
        errorElements[i].remove();
      }
  

    }

};

let form = document.querySelector('.Validator');

form.addEventListener('submit', Bvalidator.handleSubmit);












