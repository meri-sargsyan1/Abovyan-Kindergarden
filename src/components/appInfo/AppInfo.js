import './appInfo.scss';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';

const AppInfo = () => {
    return (
        <>
            <div className="fvf">
                <div className="foto">
                    <div className="klor1">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="vern1">
                        <b>Կրտսեր 2-րդ խումբ</b>
                    </div>
                    <p>Մեղուներ 🐝</p>
                </div>
                <div className="video">
                    <div className="klor2">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="vern2">
                        <b>Միջին խումբ</b>
                    </div>
                    <p>Թիթեռնիկներ 🦋</p>
                </div>
                <div className="film">
                    <div className="klor3">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="vern3">
                        <b>Ավագ խումբ</b>
                    </div>
                    <p>Զատիկներ 🐞</p>
                </div>
            </div>
        </>
    )
}

export default AppInfo;