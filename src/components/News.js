import React, {useState} from 'react';
import './News.scss';
import Notice from '../hooks/Notice';
import Event from '../hooks/Event';
import Price from '../hooks/Price';


const News = () => {

    const [component, setComponent] = useState(false);
    const [type, setType] = useState(false); //small, medium, special, surcharge
    const [typeName, setTypeName] = useState(false); // 소형견, 중형견, 특수견, 추가 요금

    const handler = (name) => {
        setComponent(name);
        if(name === 'small'){
            setType(name);
            setTypeName('소형견');
        }else if(name === 'medium'){
            setType(name);
            setTypeName('중형견');
        }else if(name === 'special'){
            setType(name);
            setTypeName('특수견');
        }else{
            setType(name);
            setTypeName('추가 요금');
        }
    }
    

    return(
        <div className='News' id='4'> 
            <div className='NewsDiv'>
                <div className='item'>
                    <ul className='IconUl'><p className='icon'><img src={process.env.PUBLIC_URL + '/icon.png'} alt='icon_img'/>공지사항
                        <button onClick={()=>handler('notice')}>... 더보기</button></p>
                        {component === 'notice'? <Notice close={setComponent}/> : null}
                        <li><a>공지사항1</a></li>
                        <li><a>공지사항2</a></li>
                        <li><a>공지사항3</a></li>
                        <li><a>공지사항4</a></li>
                    </ul>
                </div>
                <div className='item'>
                    <ul className='IconUl'><p className='icon'><img src={process.env.PUBLIC_URL + '/icon.png'} alt='icon_img'/>이벤트
                        <button  onClick={()=>handler('event')}>... 더보기</button></p>
                        {component === 'event'? <Event close={setComponent}/> : null}
                        <li><a>이벤트1</a></li>
                        <li><a>이벤트2</a></li>
                        <li><a>이벤트3</a></li>
                        <li><a>이벤트4</a></li>
                    </ul>
                </div>
                <div className='item'>
                    <ul className='IconUl'><p className='icon'><img src={process.env.PUBLIC_URL + '/icon.png'} alt='icon_img'/>가격</p>
                        <li><a onClick={()=>handler('small')} >소형견 요금</a></li>
                        <li><a onClick={()=>handler('medium')}>중형견 요금</a></li>
                        <li><a onClick={()=>handler('special')}>특수견 요금</a></li>
                        <li><a onClick={()=>handler('surcharge')}>추가요금</a></li>
                        {component === 'small'? <Price close={setComponent} value={type} name={typeName}/>: null}
                        {component === 'medium'? <Price close={setComponent} value={type} name={typeName}/>: null}
                        {component === 'special'? <Price close={setComponent} value={type} name={typeName}/>: null}
                        {component === 'surcharge'? <Price close={setComponent} value={type} name={typeName}/>: null}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default News;