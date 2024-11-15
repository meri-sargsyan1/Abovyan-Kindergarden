import spinner from './Spinner__gif.gif'

const Spinner = () => {
    return (
        <>
            <div className="spinner" style={{width: '100%', display: 'flex'}}>
                <img src={spinner} alt="" style={{heigth: 50, width: 50, margin: '0 auto', mixBlendMode: 'color-burn'}}/>
            </div>
        </>
    )
}

export default Spinner;