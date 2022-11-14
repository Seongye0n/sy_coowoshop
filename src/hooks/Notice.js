import React, {useState} from 'react';
import './Notice.scss';
import NoticeWrite from './NoticeWrite';


const Notice = (props) => {

    const {close} = props; //Notice 닫기
    const [component, setComponent] = useState(false); //NoticeWrite Component 상태

    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>공지사항</span></h2>
                    <ul>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                        <li>준비중입니다.</li>
                    </ul>
                <button style={{margin:'1vh 4vw 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}}>닫기</button>
                <button style={{margin:'1vh 0vw 0vh 3vw', padding:'0.5% 3%'}} onClick={()=>{setComponent(true)}}>글쓰기</button>
                {component === true? <NoticeWrite close={setComponent}/> : null}
            </div>
        </div>
    )
   
    
}

export default Notice;