import React, {useState} from 'react';
import '../style/style.scss';
import EventWrite from './EventWrite';

const Event = (props) => {

    const {close} = props;
    const [component, setComponent] = useState(false);

    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>이벤트</span></h2>
                    <ul>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                    </ul>
                <button style={{margin:'1vh 4vw 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}}>닫기</button>
                <button style={{margin:'1vh 0vw 0vh 3vw', padding:'0.5% 3%'}} onClick={()=>{setComponent(true)}}>글쓰기</button>
                {component === true? <EventWrite close={setComponent}/> : null}
            </div>
        </div>
    )
}

export default Event;