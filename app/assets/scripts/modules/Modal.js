import $ from 'jquery';

class Modal {

    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");      
    }

    events() {
        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
        
        //push any key to close the modal

        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

}

export default Modal;