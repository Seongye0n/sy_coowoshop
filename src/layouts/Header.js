import React, {useEffect, useState} from 'react';
import './Header.scss';
import {Link} from "react-scroll";
import {Join, Login} from '../hooks/Join';

const Header = () => {

    const [component, setComponent] = useState(false);

    const [loginCheck, setLoginCheck] = useState(false);

    const handler = (name) => {
        setComponent(name);
    }

    const sessionId = sessionStorage.getItem('id');
    
    useEffect(()=>{
        if(sessionId !== '' && sessionId){
            setLoginCheck(true);
        }
        else{
            setLoginCheck(false);
        }

    },[sessionId])
    
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
            {loginCheck ?
            <div className='login'>
                <p style={{marginTop:'0'}}>안녕하세요 {sessionId}님</p>
                <button onClick={()=>{
                    sessionStorage.removeItem('id');
                }}>로그아웃</button>
            </div>
            :
            <div className='login'>
                <div className='join' onClick={()=>handler('join')}>회원가입</div>
                {component === 'join'? <Join close={setComponent} /> : null}
                <div  className='join' onClick={()=>handler('login')}>로그인</div>
                {component === 'login'? <Login close={setComponent} /> : null}
            </div>

        }
        </div>
    )
}

export default Header;