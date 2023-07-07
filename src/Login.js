import React from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    // 로그인, auth에서 정보 가져와서 일치하면 라우터 / 로 페이지 이동
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(auth => {
            alert('환영합니다.')
            navigate('/')
          })
          .catch(error => alert("로그인 실패, 이메일과 패스워드를 확인해주세요"));
    }

    // 로그인, auth에 정보 새로 입력하면서 라우터 / 로 페이지 이동
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    alert('회원가입 완료')
                    navigate("/")
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login_container">
                <h1> 로그인 </h1>
                <form>
                    <h5> 이메일 </h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <h5> 비밀번호 </h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                    <button onClick={signIn} className="login_signInButton"> 로그인하기 </button>
                </form>

                <p> 이용 약관 동의하십니까?</p>

                <button onClick={register} className="login_registerButton"> 회원가입 </button>
            </div>

        </div>
    )
}