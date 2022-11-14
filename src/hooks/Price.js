import React, {useState} from 'react';
import './Notice.scss'; //modal
import './Price.scss';

const Price = (props) => {

    const {close} = props;

    const [type, setType] = useState(props.value); //타입State
    const [typeName, setTypeName] = useState(props.name); 

    const typeOptions = [
        {value: 'small', label:'소형견'},
        {value: 'medium', label:'중형견'},
        {value: 'special', label:'특수견'},
        {value: 'surcharge', label:'추가 요금'},
    ]

    const onTypeChange = (e) =>{ //option에 따라 타입 변형.
        const {value} = e.target;
        setType(value);
        if(value === 'small'){
            setTypeName(typeOptions[0].label)
        }else if(value === 'medium'){
            setTypeName(typeOptions[1].label)
        }else if(value === 'special'){
            setTypeName(typeOptions[2].label)
        }else{
            setTypeName(typeOptions[3].label)
        }
    }

    const resultType = () =>{
        if(type === 'small'){
            return(
                <div className='gridTable'>
                    <div className='item'><p className='title'>무게</p></div>
                    <div className='item'>
                        <p className='content'>전체미용</p>
                        <p className='content'>목욕</p>
                        <p className='content'>스포팅</p>
                        <p className='content'>가위컷</p></div>
                        <div className='item'><p className='title'>~4KG</p></div>
                    <div className='item'>
                        <p className='content'>30,000원</p>
                        <p className='content'>20,000원</p>
                        <p className='content'>50,000원</p>
                        <p className='content'>60,000원</p>
                    </div>
                    <div className='item'><p className='title'>~6KG</p></div>
                    <div className='item'>
                        <p className='content'>35,000원</p>
                        <p className='content'>25,000원</p>
                        <p className='content'>55,000원</p>
                        <p className='content'>65,500원</p>
                    </div>
                    <div className='item'><p className='title'>~8KG</p></div>
                    <div className='item'>
                        <p className='content'>40,000원</p>
                        <p className='content'>30,000원</p>
                        <p className='content'>60,000원</p>
                        <p className='content'>70,000원</p>
                    </div>
                    <div className='item'><p className='title'>~10KG</p></div>
                    <div className='item'>
                        <p className='content'>45,000원</p>
                        <p className='content'>35,000원</p>
                        <p className='content'>65,000원</p>
                        <p className='content'>75,000원</p>
                    </div>
                </div>
            )
        }else if(type === 'medium'){
            return(
                <div className='gridTable'>
                    <div className='item'><p className='title'>무게</p></div>
                    <div className='item'>
                        <p className='content'>전체미용</p>
                        <p className='content'>목욕</p>
                        <p className='content'>스포팅</p>
                        <p className='content'>가위컷</p></div>
                        <div className='item'><p className='title'>~4KG</p></div>
                    <div className='item'>
                        <p className='content'>35,000원</p>
                        <p className='content'>25,000원</p>
                        <p className='content'>55,000원</p>
                        <p className='content'>65,000원</p>
                    </div>
                    <div className='item'><p className='title'>~6KG</p></div>
                    <div className='item'>
                        <p className='content'>40,000원</p>
                        <p className='content'>30,000원</p>
                        <p className='content'>60,000원</p>
                        <p className='content'>70,500원</p>
                    </div>
                    <div className='item'><p className='title'>~8KG</p></div>
                    <div className='item'>
                        <p className='content'>45,000원</p>
                        <p className='content'>35,000원</p>
                        <p className='content'>65,000원</p>
                        <p className='content'>75,000원</p>
                    </div>
                    <div className='item'><p className='title'>~10KG</p></div>
                    <div className='item'>
                        <p className='content'>50,000원</p>
                        <p className='content'>40,000원</p>
                        <p className='content'>70,000원</p>
                        <p className='content'>80,000원</p>
                    </div>
                </div>
            )
        }else if(type === 'special'){
            return(
                <div className='gridTable'>
                    <div className='item'><p className='title'>무게</p></div>
                    <div className='item'>
                        <p className='content'>전체미용</p>
                        <p className='content'>목욕</p>
                        <p className='content'>스포팅</p>
                        <p className='content'>가위컷</p></div>
                        <div className='item'><p className='title'>~4KG</p></div>
                    <div className='item'>
                        <p className='content'>35,000원</p>
                        <p className='content'>25,000원</p>
                        <p className='content'>70,000원</p>
                        <p className='content'>80,000원</p>
                    </div>
                    <div className='item'><p className='title'>~6KG</p></div>
                    <div className='item'>
                        <p className='content'>40,000원</p>
                        <p className='content'>30,000원</p>
                        <p className='content'>75,000원</p>
                        <p className='content'>90,500원</p>
                    </div>
                    <div className='item'><p className='title'>~8KG</p></div>
                    <div className='item'>
                        <p className='content'>45,000원</p>
                        <p className='content'>35,000원</p>
                        <p className='content'>80,000원</p>
                        <p className='content'>100,000원</p>
                    </div>
                    <div className='item'><p className='title'>~10KG</p></div>
                    <div className='item'>
                        <p className='content'>50,000원</p>
                        <p className='content'>40,000원</p>
                        <p className='content'>85,000원</p>
                        <p className='content'>110,000원</p>
                    </div>
                </div>
            )
        } else{
            return(
                <div className='surcharge'>
                    <div className='item'><p className='title'>기본얼굴컷</p></div>
                    <div className='item'><p className='content'>+5,000원</p></div>
                    <div className='item'><p className='title'>라인미용</p></div>
                    <div className='item'><p className='content'>+10,000원</p></div>
                    <div className='item'><p className='title'>비숑하이바, 귀툭튀</p></div>
                    <div className='item'><p className='content'>+15,000원</p></div>
                    <div className='item'><p className='title'>푸들테디, 캔디, 브로콜리</p></div>
                    <div className='item'><p className='content'>+10,000원</p></div>
                    <div className='item'><p className='title'>베이비컷, 곰돌이, 양송이</p></div>
                    <div className='item'><p className='content'>+10,000원</p></div>
                    <div className='item'><p className='title'>닭발</p></div>
                    <div className='item'><p className='content'>+10,000원</p></div>
                    <div className='item'><p className='title'>교정미용</p></div>
                    <div className='item'><p className='content'>+10,000원</p></div>
                    <div className='item'><p className='title'>기장 (6mm,1cm,2cm)</p></div>
                    <div className='item'><p className='content'>+5,000원</p></div>
                    <div className='item'><p className='title'>이중모(스피츠, 포메라니안)</p></div>
                    <div className='item'><p className='content'>+5,000원 ~</p></div>
                </div>
            )
        }    
    }

   

    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/>
                    <span>
                        { typeName === '추가 요금' ? typeName: typeName + ' 가격표'}
                        {/* {typeName} 가격표 */}
                    </span>
                </h2>
                    <select className='petPrice'
                        value = {type}
                        onChange={onTypeChange}>
                        {
                            typeOptions.map(type => (
                                <option value={type.value} key={type.label}>{type.label}</option>
                            ))
                        }
                    </select>
                    <div className='resultPrice'>
                        {resultType()}
                    </div>
                    <button style={{float:'right', padding:'0.5% 3%', margin:'2% 3vw'}} onClick={()=>{close(false)}}>닫기</button>
            </div>
        </div>
    )
}

export default Price;