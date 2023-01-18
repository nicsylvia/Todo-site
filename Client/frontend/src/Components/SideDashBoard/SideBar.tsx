import React from 'react'
import styled from 'styled-components'
import {BsSun} from "react-icons/bs"
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {AiOutlineStar ,AiFillHome} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {MdCreateNewFolder} from"react-icons/md"
import {Link} from "react-router-dom" 
import { icons } from 'react-icons'

interface props {
    icons : any
}

const SideBar:React.FC<props> = ({icons}) => {
  return (
    <div>
        <Container>
            <Wrapper>
                <IconHold>{icons}</IconHold>
                <NavHold>
                    <Nav1 to = "/tasks/myday"><BsSun /><p>My Day</p></Nav1>
                    <Nav2 to = "/tasks/important"><AiOutlineStar /><p>Important</p></Nav2>
                    <Nav3 to = "/tasks/planned"><BsFillCalendarCheckFill /><p>Planned</p></Nav3>
                    <Nav4 to= "/tasks/assigned"><CgProfile /><p>Assigned to me</p></Nav4>
                    <Nav5 to = "/tasks/inbox"><AiFillHome /><p>Tasks</p></Nav5>
                </NavHold>
                <hr />
                <ListDiv>
                    <h2>+</h2>

                    <p>New list</p>

                    <IcnHold>
<MdCreateNewFolder />
                    </IcnHold>
                </ListDiv>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SideBar


const ListDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: blue;
cursor: pointer;

h2{
    font-size: 30px;
    margin: 0;
    font-weight: lighter;
}

`

const IcnHold = styled.div`
 font-size: 20px;
    margin: 0;
    margin-right: 10px;
    font-weight: lighter;
`




const Container = styled.div`
width: 250px;
/* height: calc(100vh - 5px); */
height: 100vh;
position: static;
background-color: aliceblue;


box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3);

`

const Wrapper = styled.div`
margin-left: 30px;

`

const IconHold =styled.div`
cursor: pointer;
padding-top: 30px;
font-size: 20px;

/* margin-top: 30px;
font-weight: lighter; */

`

const NavHold = styled.div`


width: 200px;

`

const Nav1 =styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
width: 220px;
height: 50px;
margin-bottom: 10px;
cursor: pointer;
/* background-color: gray; */


:hover{
    background-color: lightgray;
}

p{

margin-left: 10px;
}


`

const Nav2 =styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
width: 220px;
height: 50px;
margin-bottom: 10px;
cursor: pointer;

:hover{
    background-color: lightgray;
}
p{

margin-left: 10px;
}




`

const Nav3 =styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
width: 220px;
height: 50px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    background-color: lightgray;
}
p{

margin-left: 10px;
}




`

const Nav4 =styled(Link)`
display: flex;
text-decoration: none;
align-items: center;
width: 220px;
height: 50px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    background-color: lightgray;
}
p{

margin-left: 10px;
}




`

const Nav5 =styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
width: 220px;
height: 50px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    background-color: lightgray;
}
p{

margin-left: 10px;
}




`