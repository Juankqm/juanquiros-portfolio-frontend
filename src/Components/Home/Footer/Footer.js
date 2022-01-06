import './Footer.css'
import WaveBackground from '../../../assets/Home/shape-bg.png'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src= {WaveBackground}
                alt='no internet connection'></img>
            </div>
        </div>
    );
}
// {require("../../../assets/Home/shape-bg.png").default}
export default Footer;