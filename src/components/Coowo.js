import React, {useState, useEffect} from 'react';
import './Coowo.scss';
import Mainimg1 from '../images/Main1.jpg';
import Mainimg2 from '../images/Main2.jpg';
import Mainimg3 from '../images/Main3.jpg';
import Mainimg4 from '../images/Main4.jpg';



const Coowo = () => {

    //이미지 슬라이드
    var imgWidth = 0;
    var i = 0;
    
    function ImgSlide(){
        setInterval(function(){
            imgWidth -= 100;
            document.querySelector('.MainImgs').style.transition='transform 0.8s';
            document.querySelector('.MainImgs').style.transform=`translateX(${imgWidth}vw)`
            i++;
            if(i === 5){ //다시 0부터 시작
                setTimeout(function(){
                    imgWidth = 0;
                    document.querySelector('.MainImgs').style.transition='none'
                    document.querySelector('.MainImgs').style.transform=`translateX(${imgWidth}vw)`    
                    i = 0;
                });
            }
        }, 2000)
    }

    ImgSlide();

    //버튼 클릭시 이미지 변경
    const changeImg = (num) => {
        if(num === 1){
            document.querySelector('.MainImgs').style.transform='translateX(0vw)'
        }else if(num === 2){
            document.querySelector('.MainImgs').style.transform='translateX(-100vw)'
        }else if(num === 3){
            document.querySelector('.MainImgs').style.transform='translateX(-200vw)'
        }else{
            document.querySelector('.MainImgs').style.transform='translateX(-300vw)'
        }
    }

    return(
        <div className='Coowo' id='1'> 
            <div className='MainImgs'>
                <div className='MainImg' id='MainImg1'><img src={Mainimg1} alt="Mainimg01"/></div>
                <div className='MainImg' id='MainImg2'><img src={Mainimg2} alt="Mainimg02"/></div>
                <div className='MainImg' id='MainImg3'><img src={Mainimg3} alt="Mainimg03"/></div>
                <div className='MainImg' id='MainImg4'><img src={Mainimg4} alt="Mainimg04"/></div>
                <div className='MainImg' id='copy1'><img src={Mainimg1} alt="Mainimg01"/></div>
             </div>
             <div className='ButtonContainer'>
                    <button className='Mainbutton' onClick={() => changeImg(1)}></button>
                    <button className='Mainbutton' onClick={() => changeImg(2)}></button>
                    <button className='Mainbutton' onClick={() => changeImg(3)}></button>
                    <button className='Mainbutton' onClick={() => changeImg(4)}></button>
                </div>
        </div>
    );
}

export default Coowo;