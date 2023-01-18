import React from 'react'
import styled from 'styled-components'
import {BsThreeDots ,BsFillLightbulbFill} from "react-icons/bs"
import {BsSun ,BsArrowDownUp} from "react-icons/bs"
import SideBar from '../SideDashBoard/SideBar'
import Header from '../Header/Header'
import {GiHamburgerMenu} from "react-icons/gi"
import TaskBar from '../TaskBar/TaskBar'
const MyDay = () => {
    const [show , setShow ] = React.useState(true)

    const Toggle = () =>{
        setShow(!show)
    }
  return (
    <div>
           <Header />
    <Container>
    {
        show ?     <SideBar icons={<GiHamburgerMenu />} /> : null
    }
            <Wrapper>
            
        <NavHold>
             <Nav1><BsSun /><h3>My Day</h3> <BsThreeDots /></Nav1>
        <Icons>
        <ArrIcon>
        <BsArrowDownUp /><p> Sort</p>
             </ArrIcon>
             <LightIcon>
        <BsFillLightbulbFill /> <p>Suggestions</p>
             </LightIcon>
        </Icons>
             </NavHold>
             <Text>Sunday , January 15</Text>

             <EnterTask>
                <h2>+</h2>
               <Input placeholder='Add a task' />
             </EnterTask>
            
        </Wrapper>
        <TaskBar />
    </Container>
    </div>
  )
}

export default MyDay

const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    ::placeholder{
        color: blue;
     
    }
`

const EnterTask = styled.div`
margin-top: 50px;
    width: 80%;
    height: 40px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
    color: blue;
    align-items: center;
    background-color: white;

display: flex;
    h2{
        font-weight: lighter;
        font-size: 30px;
        padding-bottom: 5px;
        margin: 0;
        margin-left: 20px;
        margin-right: 20px;
        cursor: pointer;

    }
    
`

const Wrapper = styled.div`
margin-left: 30px;
width: 90%;
height: 100%;
`
const Icons = styled.div`
display: flex;
`
const LightIcon = styled.div`
display: flex;
align-items: center;
font-weight: 400;
margin-right: 20px;
cursor: pointer;
:hover{
    background-color: #fdfcfc;
}

p{
    margin-left: 5px;
}
`

const ArrIcon =styled.div`
display: flex;
align-items: center;
font-weight: 400;
margin-right: 30px;
cursor: pointer;
:hover{
    background-color: #fdfcfc;
}

p{
    margin-left: 5px;
}
`
const NavHold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 30px;
`

const Text = styled.div`
font-size: 15px;
font-weight: lighter;
`

const Nav1 = styled.div`
display: flex;
align-items: center;
font-size: 20px;

h3{
margin: 0;
    margin-left: 10px;
    margin-right: 10px;
}

`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.2);
   
`