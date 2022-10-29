import React, {useState, useEffect} from 'react';
import './Menubar.scss';
import {Link} from "react-scroll";

const Menubar = () => {

    const [ScrollY, setScrollY] = useState(0); //스크롤 값 저장
    //렌더링마다 실행
    useEffect(() => {
        window.addEventListener('scroll', handler) ;//특정 이벤트의 발생을 감지해 callback 함수 실행
        return() => {
            window.removeEventListener('scroll', handler); // 종료
        }
    },[])
    const handler = () => {
        setScrollY(window.pageYOffset); //window 스크롤 값을 setScrollY에 저장함.
    }

    return(
        <div className={ScrollY < 100 ? 'navbar' : 'navbar active'}>
            <ul>
                <li style={100 <= ScrollY && ScrollY < 680 ? {color:"#d3a875"} : {color:"#8c8b89"}}><Link to='1' spy={true} smooth={true}>Coowo Shop?</Link></li>
                <li style={680 <= ScrollY && ScrollY < 1260 ? {color:"#d3a875"} : {color:"#8c8b89"}}><Link to='2' spy={true} smooth={true}>Reservation</Link></li>
                <li style={1260 <= ScrollY && ScrollY < 1570 ?{color:"#d3a875"} : {color:"#8c8b89"}}><Link to='3' spy={true} smooth={true}>Review</Link></li>
                <li style={1570 <= ScrollY? {color:"#d3a875"} : {color:"#8c8b89"}}><Link to='4' spy={true} smooth={true}>News</Link></li>
                <li style={1570 <= ScrollY? {color:"#d3a875"} : {color:"#8c8b89"}}><Link to='4' spy={true} smooth={true}>Price</Link></li>
            </ul>
        </div>
    );
}

export default Menubar;