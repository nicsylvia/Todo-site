import React from 'react'
import styled from 'styled-components';
import { TbGridDots } from "react-icons/tb";
import { AiOutlineQuestion, AiOutlineNotification } from "react-icons/ai";
import { VscSearch, VscSettingsGear } from "react-icons/vsc";

const Header = () => {
  return (
    <div>
        <Container>
            <Todo>
                <TbGridDots />
                <h3>To Do</h3>
            </Todo>
            <Input>
                <VscSearch />
                <input type="text" />
            </Input>
            <Settings>
                <VscSettingsGear />
                <AiOutlineQuestion />
                <AiOutlineNotification />
                <Profile>
                    <h4>CA</h4>
                </Profile>
            </Settings>
        </Container>
    </div>
  )
}

export default Header;

const Container = styled.div``;
const Todo = styled.div``;
const Input = styled.div``;
const Settings = styled.div``;
const Profile = styled.div``;