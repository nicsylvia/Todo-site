import React, { useContext } from 'react'
import styled from 'styled-components';
import { TbGridDots } from "react-icons/tb";
import { AiOutlineQuestion, AiOutlineNotification } from "react-icons/ai";
import { VscSearch, VscSettingsGear } from "react-icons/vsc";
import { allowAccessEverywhere } from '../Global/Global';


const Header = () => {

    const firstletter = useContext(allowAccessEverywhere)

  return (
    <div>
        <Container>
            <Todo>
                <Icon><TbGridDots /></Icon>
                <h4>To Do</h4>
            </Todo>
            <Input>
                <Search><VscSearch /></Search>
                <input type="search" placeholder='Search' />
            </Input>
            <Settings>
                <Icon><VscSettingsGear /></Icon>
                <Icon><AiOutlineQuestion /></Icon>
                <Icon><AiOutlineNotification /></Icon>
                <Icon>
                    <Profile>
                     {firstletter?.usersData.email.charAt(0).toUpperCase()}              
                    </Profile>
                </Icon>
            </Settings>
        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2564CF;
    color: white;
    
 
`;
const Todo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    h4{
        margin-left: 10px;
        :hover{
            text-decoration: underline;
        }
    }
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    width: 50px;
    height: 55px;
    :hover{
        background-color: #005A9E;
    }
`;
const Input = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 350px;
    height: 30px;
    background-color: white;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
    input{
border: none;
outline: none;
margin-left: 10px;

flex: 1;
    }
`;
const Search = styled.div`
  color: blue;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: white;
    border-radius: 50px;
    border: 1px solid white;
    font-size: 15px;
`;
