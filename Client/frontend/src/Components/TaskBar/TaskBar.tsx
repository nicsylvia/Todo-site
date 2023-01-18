import React from 'react'
import styled from 'styled-components';
import {BiRadioCircle} from "react-icons/bi"
import {BsSun} from "react-icons/bs"
import {AiOutlineStar} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
import {RiDeleteBin5Line} from "react-icons/ri"
import {TbFileArrowRight} from "react-icons/tb"
import {GrFormAdd} from "react-icons/gr"
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {FiRepeat} from "react-icons/fi"
import {AiOutlineTag, AiOutlineFileAdd} from "react-icons/ai"

const TaskBar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
            <CardNote>
            <Together>
                    <Icon>
                        <BiRadioCircle />
                    </Icon>
                    <p>Eating</p>
                    <Icon>
                        <AiOutlineStar />
                    </Icon>
            </Together>
                    <Together>
                    <GrFormAdd />
                    <textarea placeholder='Add Step'></textarea>
                    </Together>
                   
                </CardNote>
                <Card>
                    <Together>
                    <Icon>
                        <BsSun />
                    </Icon>
                    <p>Added to My Day</p>
                    </Together>
                </Card>
                <Card>
                    <Together>
                    <Icon>
                        <IoMdNotificationsOutline />
                    </Icon>
                    <p>Remind me</p>
                    </Together>
                </Card>
                <Card>
                    <Together>
                    <Icon>
                        <BsFillCalendarCheckFill />
                    </Icon>
                    <p>Add due date</p>
                    </Together>
                </Card>
                <Card>
                    <Together>
                    <Icon>
                        <FiRepeat />
                    </Icon>
                    <p>Repeat</p>
                    </Together>
                </Card>
                <Card>
                    <Together>
                    <Icon>
                        <AiOutlineTag />
                    </Icon>
                    <p>Pick a Category</p>
                    </Together>
                </Card>
                <Card>
                    <Together>
                    <Icon>
                        <AiOutlineFileAdd />
                    </Icon>
                    <p>Add File</p>
                    </Together>
                </Card>
                <CardNote>
                    <Together>
                    <textarea placeholder='Add note'></textarea>
                    </Together>
                    <p>Updated a few seconds ago</p>
                </CardNote>
                <Bottom>
                    <Icon><TbFileArrowRight /></Icon>
                    <p>Created Today</p>
                    <Icon><RiDeleteBin5Line /></Icon>
                </Bottom>
            </Wrapper>
        </Container>
    </div>
  )
}

export default TaskBar;

const Container = styled.div`
    width: 380px;
    height: 100vh;
    background-color: #FAF9F8;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Wrapper = styled.div`
    width: 320px;
    height: 90vh;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
`;
const Card = styled.div`
    width: 280px;
    height: 30px;
    margin: 5px;
    padding: 5px 5px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    p{
        margin: 0;
        margin-left: 20px;
    }
    :hover{
        background-color: #F5F5F5;
    }
`;
const Icon = styled.div`
    font-size: 20px;
    color: grey;
    margin-right: 15px;
`;
const Together = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    p{
        margin: 0;
    }
`;
const CardNote = styled.div`
width: 280px;
height: 100px;
border-radius: 5px;
padding: 5px 5px;
margin: 5px;
color: grey;
    background-color: white;
    p{
        font-size: 15px;
    }
    textarea{
        outline: none;
        border: none;
        flex: 1;
        background-color: transparent;
        resize: none;
    }
    :hover{
        outline: grey;
        border: 1px solid grey;
    }
`;
const Bottom  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    margin: 10px 10px;
    border-top: 1px solid grey;
    p{
        font-size: 15px;
        margin: 0;
    }
`;