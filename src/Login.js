import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
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

                <button onCilck={register}className="login_registerButton"> 회원가입 </button>
            </div>

        </div>
    )
}