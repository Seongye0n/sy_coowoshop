import React, {useState} from 'react';
import './Reservation.scss';
import Reservation2 from '../hooks/Reservation2';
// import axios from 'axios';
// import QueryString from 'querystring'

// axios({
//     method:'post', //method: 데이터 통신하는 방식
//     url:'https://kimgtae12.cafe24.com/ajax/ajax_join_update.php',
//     data:QueryString.stringify({contact:'연이2',email:'이메일'}),
// })
// .then(res=>res.data)
// .then(data=>{
//     console.log(data);
// })

const Reservation = (props) => {

    const [component, setComponent] = useState(false);

    const handler = (name) => {
        setComponent(name);
    }

    return(
        <div className='Reservation' id='2'>
            <div className='ResDiv'>
                <div className='item'>
                    <ul className='IconUl'><p className='icon'><img src="/icon.png" alt='icon_img'/>읽어주세요</p>
                        <li>출장비 포함 가격입니다.</li>
                        <li>샴푸는 고객이 제공합니다.</li>
                        <li>사나움은 받지 않으나, 부득이하게 받을 경우 5천원을 받을 수 있습니다.<br/>
                        (단, 고객의 양해가 있어야 합니다.)</li>
                        <li>털엉킴은 고객의 판단을 신뢰합니다. <br/>
                        (단, 심할 경우 엉킴비를 받을 수 있습니다.)</li>
                        <li>중량이 초과할 경우 추가요금이 발생할 수 있습니다.</li>
                    </ul>
                </div>
                <div className='item'>
                <ul className='IconUl'><p className='icon'><img src="/icon.png" alt='icon_img'/>고객 유의사항</p>
                        <li>서비스를 진행할 장소를 미리 결정하고, 서비스 전에 물기를 모두 제거해주세요. <br/> (욕실, 베란다 등)</li>
                        <li>Coowo Shop은 디자이너가 찾아가는 서비스 입니다.
                            때문에 앞뒤 예약과 이동시간 등의 변수로 인해 부득이 예약시간을 조정해야 할 수도 있습니다.
                            이 경우, 디자이너가 사전에 미리 연락을 드립니다.
                        </li>
                    </ul>
                </div>
                <div className='item'>
                    <ul className='IconUl'><p className='icon'><img src="/icon.png" alt='icon_img'/>서비스가 어려운 아이</p>
                        <li>입마개를 해도 심하게 싫어하거나 무는 아이</li>
                        <li>노령견 (지병이 있는 아이)</li>
                        <li>진드기, 벼룩, 피부병 등이 심한 아이</li>
                        <li>생후 3개월 이하 아이</li>
                    </ul>
                </div>
            </div> 
            <button className='btn' onClick={()=>handler('resevation2')}>예약하기</button>
            {component === 'resevation2' ? <Reservation2 close={setComponent}/> : ''}
        </div>
    );
}

export default Reservation;