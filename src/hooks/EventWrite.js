import React from 'react';
import '../style/style.scss';

const EventWrite = (props) => {
    
    const {close} = props;

    return(
        <div className='modal'>
            <div className='modal2' >
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>이벤트</span></h2>
                <h4 style={{display:'inline-block', marginRight:'1vw', color:'#d3a875'}}>제목 </h4><input className='event_title' type='text' style={{width:'80%'}}/>
                <h4 style={{marginTop:'0%', color:'#d3a875'}}>내용</h4><textarea className='event_textarea' style={{marginTop:'-2%', width:'88.5%', height:'50%'}}></textarea>
                <button style={{margin:'1vh 4vw 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}}>취소</button>
                <button style={{margin:'1vh 0vw 0vh 3vw', padding:'0.5% 3%'}}>저장</button>
            </div>
        </div>
    )
}

export default EventWrite;