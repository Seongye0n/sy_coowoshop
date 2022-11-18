import React, {useState, useEffect} from 'react';
import '../style/style.scss';
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

    const MenuColor = (x, y, value) => { //화면 해상도, Scroll마다 MenuFontColor 변환
        switch (value){
            case 1:{
                if(1023 < x){
                    if(y < 610) return '#d3a875';
                    else return '#8c8b89';
                }else if(768 <= x <= 1023){
                    if(y < 530) return '#d3a875';
                    else return '#8c8b89';
                }else if(x < 768){
                    if(y < 100) return '#d3a875';
                    else return '#8c8b89';
                }
            } //case1
            case 2:{
                if(1023 < x){
                    if(610 <= y &&  y < 1190) return '#d3a875';
                    else return '#8c8b89';
                }else if(768 <= x <= 1023){
                    if(530 <= y && y <= 1590) return '#d3a875';
                    else return '#8c8b89';
                }else if(x < 768){
                    if(100 <= y && y <= 360) return '#d3a875';
                    else return '#8c8b89';
                }
            }//case2
            case 3:{
                if(1023 < x){
                    if(1190 <= y &&  y < 1460) return '#d3a875';
                    else return '#8c8b89';
                }else if(768 <= x <= 1023){
                    if(1590 < y) return '#d3a875';
                    else return '#8c8b89';
                }else if(x < 768){
                    if(620 < y) return '#d3a875';
                    else return '#8c8b89';
                }
            }//case3
            default :{
                if(1023 < x){
                    if(1460 <= y) return '#d3a875';
                    else return '#8c8b89';
                }else if(768 <= x <= 1023){
                    if(1590 < y) return '#d3a875';
                    else return '#8c8b89';
                }else if(x < 768){
                    if(620 < y) return '#d3a875';
                    else return '#8c8b89';
                }
            }//default
        }//swich(value)
    }//MenuColor

    return(
        <div className={ScrollY < 90 ? 'navbar' : 'navbar active'}>
            <ul>
                <li style={{color:MenuColor(window.innerWidth,ScrollY, 1)}}><Link to='1' spy={true} smooth={true}>Coowo Shop?</Link></li>
                <li style={{color:MenuColor(window.innerWidth,ScrollY, 2)}}><Link to='2' spy={true} smooth={true}>Reservation</Link></li>
                <li style={{color:MenuColor(window.innerWidth,ScrollY, 3)}}><Link to='3' spy={true} smooth={true}>Review</Link></li>
                <li style={{color:MenuColor(window.innerWidth,ScrollY, 4)}}><Link to='4' spy={true} smooth={true}>News</Link></li>
                <li style={{color:MenuColor(window.innerWidth,ScrollY, 4)}}><Link to='4' spy={true} smooth={true}>Price</Link></li>
            </ul>
        </div>
    );
}

export default Menubar;