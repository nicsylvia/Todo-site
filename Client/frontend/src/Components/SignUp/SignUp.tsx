import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import microsoft from "../Assets/microsoft-logo.svg";
import  { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { allowAccessEverywhere } from '../Global/Global';


const SignUp = () => {

    const goToLoginin = useNavigate()

    const signupContext = useContext(allowAccessEverywhere)

    // For the eye icon of the password:
    const [show, setShow] = useState(true);

    const showPassword = () =>{
        setShow(!show)
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const RegisterUsers = async(e: any) =>{
        e.preventDefault();
        await axios.post("http://localhost:2023/api/users/registerusers", {
            name,
            email,
            password,
        }).then((res) =>{
            signupContext?.setUsersData(res.data.data)
            goToLoginin("/signin")
        })
    }

   
    
  return (
    <div>
        <Container>
            <Box>
                <Wrapper onSubmit={RegisterUsers} >
                    <Logo src={microsoft} />
                    <h1>Create Account</h1>
                    <Input >
                        <input 
                        value={name}
                       onChange = {(e) =>{
                        setName(e.target.value)
                       }}
                      
                        type="text"  required placeholder='Enter your name e.g Sylvia' />
                        <br />
                        <br />
                        <input 
                       value={email}
                       onChange = {(e) =>{
                        setEmail(e.target.value)
                       }}
                        type="email"  required placeholder='nicsylvia15f@gmail.com' />
                        <br />
                        <br />
                        <>
                        {/* Password show and not show on clicking */}
                         {
                            show ? (<div>
                                <input
                                value={password}
                                onChange = {(e) =>{
                                    setPassword(e.target.value)
                                   }}
                                type="password" required placeholder = "Enter your password"
                                 />  <div onClick={showPassword}><AiFillEyeInvisible /></div>
                            </div>
                              
                               ) : (
                                <div>
                                    <input 
                               value={password}
                               onChange = {(e) =>{
                                setPassword(e.target.value)
                               }}
                               type="text"  required placeholder = "Password" /> 
                               {/* <Curve>
                                <i>Please fill this field</i>
                               </Curve> */}
                                <div onClick={showPassword}><AiFillEye /></div>
                                </div>
                               )
                         }
                        </>
                    </Input>
                    
                    <p><a href="">Use a phone number instead</a></p>
                    <p><a href="">Get a new email address</a></p>
                    
                    {/* <Link to="/signin"> */}
                        <Button type='submit'>Next</Button>
                    {/* </Link> */}
                </Wrapper>
            </Box>
        </Container>
    </div>
  )
}

export default SignUp;

const Curve = styled.div`
    width: 150px;
    height: 60px;
    background-color: blue;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Box = styled.div`
    width: 480px;
    /* height: 400px; */
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;
const Wrapper = styled.form`
    width: 400px;
    /* height: 350px; */
    padding-top: 30px;
    padding-bottom: 30px;
    /* background-color: red; */
    a{
        text-decoration: none;
        :hover{
            text-decoration: underline;
        }
    }
`;
const Logo = styled.img`
    cursor: pointer;
`;
const Input = styled.div`
    input{
        border: 0;
        outline: 0;
        border-bottom: 1px solid #005DA6;
        width: 400px;
        padding-bottom: 10px;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        div{
            font-size: 20px;
            padding-bottom: 10px;
            position: absolute;
            right: 20px;
            cursor: pointer;
            color: #005DA6;
        }
    }
`;
const Button = styled.button`
    float: right;
    outline: none;
    border: none;
    padding: 8px 40px;
    background-color: #005DA6;
    a{
        color: white;
        text-decoration: none;
    }
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`;
