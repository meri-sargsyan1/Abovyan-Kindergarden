import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer>
            <div className="ikona">
                
                
                <div className="tw">
                    <a href="">
                        <i className="fa fa-twitter" style={{fontSize: 36}}></i>
                    </a>
                </div>
                <div className="in">
                    <a href="">
                        <i className="fa fa-linkedin" style={{fontSize: 36}}></i>
                    </a>
                </div>
            </div>
            <div className="kapmezhet">
                <h3>Մեր հասցեն</h3>
                <div className="gs-content">
                    <i className="fa fa-map-marker"></i>
                    <span>Արարատի մարզ,Գ. Աբովյան</span>
                </div>
                <div className="gs-content">
                    <i className="fa fa-phone"></i>
                    <span></span>
                </div>
                <div className="gs-content">
                    <i className="fa fa-envelope"></i>
                    <span></span>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;