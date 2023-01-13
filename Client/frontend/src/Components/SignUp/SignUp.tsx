import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import microsoft from "../Assets/microsoft-logo.svg"

const SignUp = () => {
  return (
    <div>
        <Container>
            <Box>
                <Wrapper>
                    <Logo src={microsoft} />
                    <h1>Create Account</h1>
                    <Input>
                        <input type="text" placeholder='Enter your name e.g Sylvia' />
                        <br />
                        <br />
                        <input type="email" placeholder='nicsylvia15f@gmail.com' />
                        <br />
                        <br />
                        <input type="password" placeholder = "Password" />
                    </Input>
                    
                    <p><a href="">Use a phone number instead</a></p>
                    <p><a href="">Get a new email address</a></p>
                    
                    <Link to="/signin">
                        <Button><a href="">Next</a></Button>
                    </Link>
                </Wrapper>
            </Box>
        </Container>
    </div>
  )
}

export default SignUp;

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
const Wrapper = styled.div`
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
`;
const Button = styled.div`
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
