import React from 'react'
import styled from 'styled-components'
import {BsThreeDots ,BsFillLightbulbFill} from "react-icons/bs"
import {BsSun ,BsArrowDownUp} from "react-icons/bs"
import SideBar from '../SideDashBoard/SideBar'
import Header from '../Header/Header'
import {AiFillHome} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdNotificationsOutline} from "react-icons/io"
import {FiRepeat} from "react-icons/fi"
import {MdOutlineDateRange} from "react-icons/md"
import TaskBar from '../TaskBar/TaskBar'

const Tasks = () => {
    const [show , setShow ] = React.useState(true)
    const [drop , setdrop] = React.useState(false)
    const[taskBar , setTaskBar] = React.useState(false)
    // const [data , setData] = React.useState("")

    const Toggle = () =>{
        setShow(!show)
    }

    const DropDownFunc = () =>{
        setdrop(true)
    }
    const TaskBarFunc = () =>{
        setTaskBar(!taskBar)
    }
  return (
    <div>
        <Header />
    <Container>
{/* passing the icons as props , then passing the onClick to use it for the boolean operations */}
    {
        show ?     <SideBar icons={<GiHamburgerMenu onClick={Toggle} />} /> : <Show><GiHamburgerMenu  onClick={Toggle} /></Show>
    }
            <Wrapper>
            
        <NavHold>
             <Nav1><AiFillHome /><h3>Tasks</h3> <BsThreeDots /></Nav1>
        <Icons>
        <ArrIcon>
        <BsArrowDownUp /><p> Sort</p>
             </ArrIcon>
           
        </Icons>
             </NavHold>
             <Text>Sunday, January 15</Text>

{/* to extend the widthof the input box using the show boolean operations */}
{
    show ? 
    <EnterTask wid= "true">
       <h2>+</h2>
      <Input placeholder='Add a task' onClick={DropDownFunc} />
    </EnterTask> : 
             <EnterTask wid= "true">
                <h2>+</h2>
               <Input placeholder='Add a task' />
             </EnterTask>
}

   {
    drop  ?   <DropDownBox  wid = "true">
   <One>
   <DropDownIcons>
     <MdOutlineDateRange />  
 
  
     </DropDownIcons>
     <DropDownIcons>
     <IoMdNotificationsOutline />  
 
  
     </DropDownIcons>
     <DropDownIcons>
   
     <FiRepeat /> 
 
  
     </DropDownIcons>

   </One>

   <Button>
    Add
   </Button>
    </DropDownBox> : null
   }
     <Task onClick={TaskBarFunc} wid = "true">
  <Div1>
    <Icon>0</Icon>
  <TextHold>
  <p>Sleep for 24 hours</p>
    <p>Tasks</p>
  </TextHold>
  </Div1>
  <Div2>
    <Icon2>*</Icon2>
  </Div2>
 
  
     </Task>
        </Wrapper>
     {
        taskBar ?    <TaskBar /> : null
     }
    </Container>
    </div>
  )
}

export default Tasks;

const One = styled.div`
display: flex;
`

const Button = styled.button`
    
`

const TextHold = styled.div`
margin-left: 15px;
p{
    margin: 0;
    font-size: 12px;
    color: black;
}
`

const Div1 = styled.div`
display: flex;
`

const Icon = styled.div``

const Div2 =styled.div``

const Icon2 = styled.div``

const Task = styled.div<{wid : string}>`
     width:  ${({wid}) =>( wid ? "650px" : "1200px")} ;
    height: 40px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
    cursor: pointer;
   
    margin-top: 15px;
    display: flex;
   justify-content: space-between;
   align-items: center;
    background-color: white;
`

const DropDownIcons = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    color: black;
    font-weight: 100;
`

const DropDownBox = styled.div<{wid:string}>`
     width:  ${({wid}) =>( wid ? "650px" : "1200px")} ;
    height: 40px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
    color: blue;
  justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: #f7f0f0;
    
`

const Show = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding-top: 50px;
margin-left: 20px;
cursor: pointer;
    
`

const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    ::placeholder{
        color: blue;
     
    }
`

const EnterTask = styled.div<{wid : string}>`
margin-top: 50px;
    width:  ${({wid}) =>( wid ? "650px" : "1200px")} ;
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

`
const Icons = styled.div`
display: flex;
`
const LightIcon = styled.div`
display: flex;
align-items: center;
font-weight: 400;

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
/* margin-right: 30px; */
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
    /* justify-content: center;
    align-items: center; */
    background-color: white;
    /* background-color: red; */
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.2);
   
`