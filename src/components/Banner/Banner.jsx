import Description from "../Description/Description";
import Header from "../Header/Header";
import logo from '../../assets/logo.png';

const Banner = () => {
    return (<div>
        <Header />
        <div className='title'>
            <img src={logo}alt='La maison jungle' className='logo' />
        </div>
        <Description />
    </div>)
}

export default Banner;