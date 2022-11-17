import React from 'react';
import '../style/style.scss';
import blog from '../images/blog.png';
import insta from '../images/insta.png';
import kakao from '../images/kakao.png';

const Footer = () => {

    return(
        <div className='Footer'>
            <a href='#'><img src={blog} alt='blog'/></a>
            <a href='#'><img src={insta} alt='insta'/></a>
            <a href='#'><img src={kakao} alt='kakao'/></a>
            <span>Copyright 2022.sy.All rights reseved.</span>
        </div>
    )
}

export default Footer;