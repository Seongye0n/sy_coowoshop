import React from 'react';
import './Notice.scss';
import './Movie.scss';

const Movie = (props) => {

    const {close} = props;

    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>애견미용동영상</span></h2>
                    <div className='container'>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                        <div className='item'></div>
                    </div>
                <p>
                    <button style={{float:'right', padding:'0 3%'}}>다음</button>
                    <button style={{float:'right', padding:'0 3%', marginRight:'3%'}}>이전</button>
                </p>
                <p>
                    <button style={{float:'right', padding: '0 3%'}} onClick={()=>{close(false)}}>닫기</button>
                    <button style={{float:'left', padding:'0 3%', marginRight:'3%'}}>글쓰기</button>
                </p>
                
            </div>
        </div>
    )
}

export default Movie;