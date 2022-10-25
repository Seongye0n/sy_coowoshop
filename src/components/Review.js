import React, { useState } from 'react';
import './Review.scss';
import Movie from '../hooks/Movie';
import Review2 from '../hooks/Review2';

const Review = (props) => {

    const [component, setComponent] = useState(false);

    const handler = (name) => {
        setComponent(name);
    }

    return(
        <div className='Review' id='3'>  
            <div className='RevDiv'>
                <div className='Revitem'>
                    <div className='RevitemTitle'>
                        <p className='icon'><img src="/icon.png" alt='icon_img'/><span>애견미용동영상</span>
                        <button onClick={()=>handler('movie')}>애견미용동영상 게시판 ⇒</button></p></div>
                        {component === 'movie'? <Movie close={setComponent}/> : null}
                        <div className='Button'><button className="leftbtn"></button></div>
                        <div className='NoticeContent'>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                        </div>
                        <div className='Button'><button className="rightbtn"></button></div>
                </div>
                <div className='Revitem'>
                    <div className='RevitemTitle'><p className='icon'><img src="/icon.png" alt='icon_img'/><span>애견미용후기</span>
                        <button onClick={()=>handler('review2')}>애견미용후기 게시판 ⇒</button></p></div>
                        {component === 'review2'? <Review2 close={setComponent}/> : null}
                        <div className='Button'><button className="leftbtn"></button></div>
                        <div className='NoticeContent'>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                            <div><p className='loading'>조금만 기다려주세요.<br/> 준비중입니다.</p></div>
                        </div>
                        <div className='Button'><button className="rightbtn"></button></div>
                </div>
            </div>
        </div>
    );
}

export default Review;