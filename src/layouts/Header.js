import React from 'react';
import './Header.scss';
import {Link} from "react-scroll";

const Header = () => {

    return(
        <div className='Header'>
            <h1>CoowoShop</h1>
            <p>We present love and beauty to your dog</p>
            <div className='nav'>
                <div><Link to='1' spy={true} smooth={true}>Coowo Shop?</Link></div>
                <div><Link to='2' spy={true} smooth={true}>Reservation</Link></div>
                <div><Link to='3' spy={true} smooth={true}>Review</Link></div>
                <div><Link to='4' spy={true} smooth={true}>News</Link></div>
                <div><Link to='4' spy={true} smooth={true}>Price</Link></div>
            </div>
            <div className='login'>
                <div>회원가입</div>
                <div>로그인</div>
            </div>
        </div>
    )
}

export default Header;