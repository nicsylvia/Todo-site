import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import microsoft from "../Assets/microsoft-logo.svg";
import { allowAccessEverywhere } from '../Global/Global';


const SignIn = () => {

    const goToHomePage = useNavigate()

    const [loggedName, setLoggedName] = useState("")

    const loginContext = useContext(allowAccessEverywhere);

    const UsersLogin = async(e: any) =>{
        e.preventDefault();
        await axios.post("http://localhost:2023/api/users/userlogin", {
            email: loggedName,
        }).then((res) =>{
            loginContext?.setUsersData(res.data.data)
            goToHomePage("/tasks")
        })
    }
   
  return (
    <div>
        <Container>
            <Box>
                <Wrapper onSubmit={UsersLogin} >
                    <Logo src={microsoft} />
                    <h1>Sign in</h1>
                    <Input>
                        <input type="email"
                       onChange={(e) =>{
                        setLoggedName(e.target.value)
                       }}
                        placeholder='Enter your email e.g stargirl@gmail.com' />
                        <br />
                        <br />
                    </Input>
                    
                    <Link to="/">
                    <p><a href="">No account? Create one!</a></p>
                    </Link>
                    <p><a href="">Can’t access your account?</a></p>
                   
                    <Btn>
                        
                        <Button 
                        bg="silver" cc="black" ><a >Back</a></Button>
                        
                        {/* <Link to="/tasks"> */}
                        <Button type = "submit" bg="#005DA6" cc="white"><a href="">Next</a></Button>
                        {/* </Link> */}
                    </Btn>
                </Wrapper>
            </Box>
        </Container>
    </div>
  )
}

export default SignIn;

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
`;
const Btn = styled.div`
    display: flex;
    flex-wrap: wrap;
    float: right;
`;
const Button = styled.button<{bg: string; cc: string}>`
    outline: none;
    border: none;
    margin: 2px;
    padding: 8px 40px;
    background-color: ${(props) => props.bg};
    a{
        color: ${(props) => props.cc};
        text-decoration: none;
    }
    cursor: pointer;
`;
