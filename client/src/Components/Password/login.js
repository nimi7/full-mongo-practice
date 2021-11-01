import { React, useEffect, useState } from 'react';
import './Login.css';
import Axios from 'axios';



export default function Login() {
    const [LoginError, SetLoginError] = useState([]);
    useEffect(() => {
        Axios.get('/api/error')
            .then(res => {

                SetLoginError(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>


            <div class="grid align__item">
          
                <div class="register">

                    <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb" /><stop offset="100%" stop-color="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
                    
                    <h2>Log In</h2>
                   
                    <form action="/api" method="POST" class="form">
                       <p></p> 
                        <div class="form__field">
                            <input type="email" name='email' placeholder="info@mailaddress.com" />
                        </div>

                        <div class="form__field">
                            <input type="password" name='password' placeholder="••••••••••••" />
                        </div>
                        {LoginError} 
                        <div class="form__field">
                            <input type="submit" value="Log In" />
                        </div>

                    </form>

                    <p>Already have an accout? <a href="/CreatPassword">Sign Up</a></p>

                </div>

            </div>



        </div>
    )
}