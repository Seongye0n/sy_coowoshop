import React, {useState} from 'react';
import '../style/style.scss';
import DaumPostcode from 'react-daum-postcode';

const Reservation2 = (props) => {
    const addressStyle = {
        display: "block",
        position: "absolute",
        top: "20%",
        width: "400px",
        height: "400px",
        padding: "7px",
        zIndex: 1, 
      };

    const {close} = props;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('주소 검색을 눌러주세요');

    const [visible, setVisible] = useState(false); //주소 팝업창 관리

    const handleComplete = (data) => {
        const fullAddress = data.address;
        const extraAddress = '';

        if(data.addressType === 'R'){
            if(data.bname !== ''){
                extraAddress += data.banme;
            }
            if(data.buildingName !== ''){
                extraAddress += (extraAddress !== ''? `${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? `${extraAddress}` : '');
        }
        setAdress(fullAddress);
        setVisible(false);
    }
    
    return(
        <div className='modal'>
            <div className='modal2'>
                <h2><img src={process.env.PUBLIC_URL + '/icon.png'}  alt='icon_img'/><span>예약하기</span></h2>
                <form className='ReservationForm'>
                    <p><label htmlFor='name' className='styleLabel'>이름: </label> {/* for과 연결하고 싶은 input의 id를 지정해주면됨. */}
                        <input type='text' id='name' placeholder='이름 입력' value={name} className='styleInput' onChange={(event)=>{
                            setName(event.target.value)
                        }}/>
                    </p>
                    <p><label htmlFor='phone' className='styleLabel'>전화번호: </label> 
                        <input type='text' id='phone' placeholder='전화번호 입력 (- 제외)' value={phone} className='styleInput' onChange={(event)=>{
                            setPhone(event.target.value)
                        }}/>
                        <button className='styleBtn'>확인</button>
                    </p>
                    <p><label htmlFor='address' className='styleLabel'>주소: </label> 
                        <input type='text' id='address' placeholder={address} defaultValue={address} className='styleInput address' onChange={(event)=>{
                            setAdress(event.target.value)
                        }} disabled/>  {/* defaultValue:속성이 변할 때, disabled: 입력불가 */}
                        <button className='styleBtn addressBtn' onClick={()=>setVisible(true)}>주소 검색</button>
                        {visible?
                            <div> 
                                <DaumPostcode
                                onComplete={handleComplete}
                                className='addressStyle'
                                height={700}
                                />
                            </div>: null
                        }
                    </p>
                </form>
                <p style={{marginTop:'15vh'}}>
                <button id='btn4' style={{padding:'0 3%', margin:'0% 2% 2% 40%'}}>예약하기</button>
                <button id='btn4' style={{padding:'0 3%'}} onClick={()=>{close(false)}}>닫기</button>
                </p>
            </div>
        </div>
    )
}

export default Reservation2;