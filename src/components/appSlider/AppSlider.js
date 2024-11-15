import './appSlider.scss'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../img/slide1.jpg';
import img2 from '../../img/slide2.jpg';
import img3 from '../../img/slide3.jpg';
import img4 from '../../img/slide4.jpg';
import img5 from '../../img/slide5.jpg';
import img6 from '../../img/slide6.jpg';
import img7 from '../../img/slide7.jpg';
import img8 from '../../img/slide8.jpg';
import img9 from '../../img/slide9.jpg';
import img10 from '../../img/slide10.jpg';
import img11 from '../../img/slide11.jpg';

const AppSlider = () => {
    return (
        <>
            <main>
                <Slideshow/>
                <div className="text1">
                    <p>Սիրելի՛ ուսուցիչներ,
Սրտանց շնորհավորում եմ ձեզ մասնագիտական տոնի կապակցությամբ:
Ձեր անձնվեր ու հոգատար աշխատանքով դուք արժանի ավանդն եք ներդնում մեր պետության ապագա քաղաքացիների ձևավորման գործում: 
Խաղաղություն ձեր ընտանիքներին ու մեր հայրենիքին:</p>
                </div>
            </main>
        </>
    )
}

const images = [
    img1, img2, img3, img4, img5,img6,img7,img8,img9,img10,img11
]

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom{...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} className='slide__img' alt='' src={each} />)
          }
        </Zoom>
      </div>
    )
}


export default AppSlider;