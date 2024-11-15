import './modal.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


library.add(faXmark)

const Modal = ({onCloseModal, onCloseModalWithBtn}) => {
    return (
        <div className="modal" onClick={(e) => onCloseModal(e)}>
            <div className='modal__content'>
                <div className="modal__close" onClick={onCloseModalWithBtn}><FontAwesomeIcon icon="fa-xmark"/></div>
            </div>
        </div>
    )
}



export default Modal;