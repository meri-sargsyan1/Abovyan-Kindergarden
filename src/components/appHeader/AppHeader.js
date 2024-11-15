import './appHeader.scss';
import logo from '../../img/logo.jpg';
import Modal from '../modal/Modal';
import { useEffect, useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
library.add(faXmark)

const AppHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);


    const onCloseModalWithBtn = () => {
        setIsOpen(false);
    }

    const onCloseModal = (e) => {
        if (e.target === document.querySelector('.modal')) {
            setIsOpen(false);
        }
    }

    const onCloseBurgerWithBtn = () => {
        setBurgerActive(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'scroll';
    }, [isOpen])

     const [soc]=useState([{name:'hertagrel',link:'https://www.artashat.am/Pages/KinderGarten/Application.aspx'}])
    return (
        <header>
            <div className="header__inner">
                <div className="header__left">
                    <div className="item" onClick={() => setIsOpen(true)}>
                        <p className="mybtn"><a className='nav__link'>ՄԵՐ ՄԱՍԻՆ</a></p>
                    </div>
                    <div className="item" onClick={() => setIsOpen(true)}>
                        <p className="mybtn"><span className='nav__link' >ՏՆՕՐԵՆ</span>
                        <div>
                        
                        </div>
                        
                        
                        </p>
                    </div>
                </div>
                <div className="header__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header__right">
                    <div className="item" onClick={() => setIsOpen(true)}>
                        <p className="mybtn"><span className='nav__link' href="">ՏԵՍԱՀՈԼՈՎԱԿ</span></p>
                    </div>
                    <div className="item" onClick={() => setIsOpen()}>
                        <p className="mybtn"> <span className='nav__link' href="" >ՀԵՐԹԱԳՐՎԵԼ</span>
                       
                        </p>
                    </div>
                    <div className="burger__menu" style={{fontSize: burgerActive ? 35 : 30}}>
                        <FontAwesomeIcon icon="fa-bars" 
                        onClick={() => setBurgerActive(true)}
                        style={{display : burgerActive ? 'none' : 'block'}}/>
                        <FontAwesomeIcon icon="fa-xmark" 
                        onClick={onCloseBurgerWithBtn}
                        style={{display : burgerActive ? 'block' : 'none'}}/>
                    </div>
                </div>
                <div className="menu" style={{display : burgerActive ? 'block' : 'none'}}>
                    <div className="burger__nav__link" onClick={() => setIsOpen(true)}><a className='nav__link'>HOME</a></div>
                    <div className="burger__nav__link" onClick={() => setIsOpen(true)}>COMERCION</div>
                    <div className="burger__nav__link" onClick={() => setIsOpen(true)}>ABOUT</div>
                    <div className="burger__nav__link" onClick={() => setIsOpen(true)}>CONTACT</div>
                </div>
            </div>
            {isOpen ? <Modal 
            onCloseModal={onCloseModal} 
            onCloseModalWithBtn={onCloseModalWithBtn}
            /> : null}
        </header>
    )
}

export default AppHeader;