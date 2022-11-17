import React, {useState} from 'react';
import '../style/style.scss';

const NoticeWrite = (props) => {
    
    const {close} = props; //NoticeWrite 취소
    const [noticeContent, setNoticeContent] = useState({ //NoticeWrite 작성 확인
        noticeTitle: '',
        noticeText: ''
    });

    const getValue = e => {
        const {name, value} = e.target; //e.name(noticeTitle, noticeText), e.value(input value)
        setNoticeContent({
            ...noticeContent, //noticeContent 다음으로
            [name]: value
        })
        console.log(noticeContent);
    };

    return(
        <div className='modal'>
            <div className='modal2' >
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>공지사항</span></h2>
                <h4 style={{display:'inline-block', marginRight:'1vw', color:'#d3a875'}}>제목 </h4>
                    <input type='text' style={{width:'80%'}} onChange={getValue} name='noticeTitle'/>
                <h4 style={{marginTop:'0%', color:'#d3a875'}}>내용</h4>
                    <textarea style={{marginTop:'-2%', width:'88.5%', height:'50%'}} onChange={getValue} name='noticeText'></textarea>
                <button style={{margin:'1vh 4vw 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}}>취소</button>
                <button style={{margin:'1vh 0vw 0vh 3vw', padding:'0.5% 3%'}}>저장</button>
            </div>
        </div>
    )
}

export default NoticeWrite;