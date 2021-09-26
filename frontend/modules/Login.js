import validator from 'validator';
import flash from 'connect-flash';

export default class Login {
    errors = []

    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
        alert('init')
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;
        // Validação
        // O e-mail precisa ser válido
        if(!validator.isEmail(emailInput.value)) {
            this.errors.push('E-mail inválido');
        }

        // A senha precisa ter entre 3 e 50 
        if(passwordInput.value.length < 3 || passwordInput.value.length >= 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres');
        }     

        if(this.errors.length > 0) {
            // flash('errors', this.errors);
            alert(this.errors)
            return;
        } else {
            el.submit();
        }
    }
}