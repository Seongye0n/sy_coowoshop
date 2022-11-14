import React, {useState} from 'react';
import './Join.scss';
import './Notice.scss';
import axios from 'axios';
import QueryString from 'querystring';

//회원가입 폼
const Join = (props) => {

    const {close} = props; // 닫기

    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw_check, setPw_check] = useState('');
    const [phone, setPhone] = useState('');

    const [formCheck, setFormCheck] = useState({
        email:false,
        id: false, 
        pw: false,
        pwCheck: false,
    });

    const joinAcess = () => { //회원가입 확인 
        if(formCheck.email && formCheck.id && formCheck.pw && formCheck.pwCheck){
            axios({
                method:'post', //method: 데이터 통신하는 방식
                url:'https://kimgtae12.cafe24.com/ajax/ajax_join_update.php',
                data:QueryString.stringify({email:email, id:id, pw:pw, phone:phone, pw_check:pw_check}),
            })
            .then(res=>res.data) //res:서버에서 받아온 데이터, res.data: 데이터
            .then(data=>{
                if(data.result){
                    alert('회원가입 성공하셨습니다.');
                    sessionStorage.setItem('id', id);
                }
                else{
                    alert(data.msg);
                }
            }) //회원가입 성공
        }else if(!formCheck.email){
            alert('이메일 중복 검사를 확인하여주시길 바랍니다.');
            console.log(formCheck)
        }else if(!formCheck.id){
            alert('아이디 중복 검사를 확인하여 주시길 바랍니다.');
        }else if(!formCheck.pw){
            alert('비밀번호 8~20글자를 확인하여 주시길 바랍니다.');
        }else if(!formCheck.pwCheck){
            alert('비밀번호 일치하지 않습니다. 비밀번호를 확인하여주시길 바랍니다.');
        }
        
    }

    const emailCheck = () => { //이메일 확인 체크
        axios({
            method:'post', //method: 데이터 통신하는 방식
            url:'https://kimgtae12.cafe24.com/ajax/email_check.php',
            data:QueryString.stringify({email:email}),
        })
        .then(res=>res.data) //res:서버에서 받아온 데이터, res.data: 데이터
        .then(data=>{
            if(data.result){
                setFormCheck({
                    ...formCheck,
                    email:true
                })
                alert(data.msg);
            }
            else{
                setFormCheck({
                    ...formCheck,
                    email:false
                })
                alert(data.msg);
            }
        })
    }

    const idCheck = () => { //아이디 확인 체크
        axios({
            method:'post', //method: 데이터 통신하는 방식
            url:'https://kimgtae12.cafe24.com/ajax/join_id_check.php',
            data:QueryString.stringify({id:id}),
        })
        .then(res=>res.data) //res:서버에서 받아온 데이터, res.data: 데이터
        .then(data=>{
            if(data.result){
                setFormCheck({
                    ...formCheck,
                    id:true
                })
                alert(data.msg);
            }
            else{
                alert(data.msg);
            }
        })
    }

    return(
        <div className='modal'>
            <div className='modal2'>
            <h2><img src="/icon.png" alt='icon_img'/><span>회원가입</span></h2>
            <form className='joinForm'>
                <p><label htmlFor='email'>이메일: </label> {/* for과 연결하고 싶은 input의 id를 지정해주면됨. */}
                <input type='text' id='email' placeholder='이메일 입력' value={email} onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>
                <button type='button' style={{marginRight:'5vw', padding:'0.5% 3%'}} className='joinBtn' onClick={()=>emailCheck()}>확인</button>
                </p>
                <p><label htmlFor='id'>아이디: </label>
                <input type='text' id='id' placeholder='아이디 입력' value={id} onChange={(event)=>{
                    setId(event.target.value)
                }}/>
                <button type='button' style={{marginRight:'5vw', padding:'0.5% 3%'}} className='joinBtn' onClick={()=>idCheck()}>확인</button>
                </p>
                <p><label htmlFor='pw'>비밀번호: </label> 
                <input type='password' id='pw' placeholder='비밀번호 입력' value={pw} onChange={(event)=>{
                    setPw(event.target.value)
                    if( 8 <= event.target.value.length && event.target.value.length <= 20){
                        setFormCheck({...formCheck, pw:true})
                    }else{
                        setFormCheck({...formCheck, pw:false})
                    }
                }}/></p>
                <p><label htmlFor='pw_check'>비밀번호 확인: </label> 
                <input type='password' id='pw_check' placeholder='비밀번호 입력 확인' value={pw_check} onChange={(event)=>{
                    setPw_check(event.target.value);
                    console.log(formCheck);
                    setFormCheck({...formCheck, pwCheck : event.target.value == pw});
                }}/></p>
                <p><label htmlFor='phone'>전화번호: </label> 
                <input type='text' id='phone' placeholder='전화번호 입력 (- 제외)' value={phone} onChange={(event)=>{
                    setPhone(event.target.value)
                }}/></p>
            </form>
            <button style={{margin:'3vh 40% 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}} className='joinBtn'>취소</button>
            <button style={{margin:'3vh 0vw 0vh 0vw', padding:'0.5% 3%'}} className='joinBtn' onClick={() => joinAcess()}>회원가입</button>
            </div>
        </div>
    )
}

//로그인 폼
const Login = (props) => {
    
    const {close} = props;

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const login = () => {
        axios({
            method:'post', //method: 데이터 통신하는 방식
            url:'https://kimgtae12.cafe24.com/ajax/ajax_login_check.php',
            data:QueryString.stringify({id:id, pw:pw}),
        })
        .then(res=>res.data) //res:서버에서 받아온 데이터, res.data: 데이터
        .then(data=>{
            console.log(data);
        if(data.result){
            alert(data.msg);
            sessionStorage.setItem('id', id);
        }
        else{
            alert(data.msg);
        }
        })
    }

    return(
        <div className='modal'>
            <div className='modal2'>
            <h2><img src="/icon.png" alt='icon_img'/><span>로그인</span></h2>
            <form className='joinForm'>
                <p><label htmlFor='id'>아이디: </label>
                <input type='text' id='id' value={id} onChange={(e)=>{setId(e.target.value)}}/>
                </p>
                <p><label htmlFor='pw'>비밀번호: </label> 
                <input type='password' id='pw' value={pw} onChange={(e)=>setPw(e.target.value)}/></p>
            </form>
            {/* 로그인 실패시, 회원가입하러가기 또는 로그인 페이지 이동 (+입력값이 null일 때도, 회원가입하러가기 또는 로그인 페이지 이동) */}
            <button stype='button' style={{margin:'3vh 40% 0vh 1vw', padding:'0.5% 3%'}} onClick={()=>{close(false)}} className='joinBtn'>취소</button>
            <button style={{margin:'3vh 0vw 0vh 0vw', padding:'0.5% 3%'}} className='joinBtn' onClick={()=>login()}>로그인</button>
            </div>
        </div>
    )
}

export {Join, Login};