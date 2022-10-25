import React from 'react';
import './Notice.scss'; //modal
import './Movie.scss'; //grid

const Reservation2 = (props) => {
    const {close} = props;

    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src="/icon.png" alt='icon_img'/><span>예약하기</span></h2>
                    <div className='container'>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                
                <p>
                    <button style={{float:'left', padding:'0 3%', marginRight:'3%'}}>예약하기</button>
                    <button style={{float:'left', padding:'0 3%'}} onClick={()=>{close(false)}}>닫기</button>
                </p>
                
            </div>
        </div>
    )
}

export default Reservation2;