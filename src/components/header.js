import React,{useState} from "react";
import styled from "styled-components";

function Header(){
    const [burgerStatus,setBurgerStatus] = useState(false);
    return(
        <Container>
            <a><img src="/images/logo.png" className="logo"></img></a>

        <MainMenu>
             <Menu>  
                <ul className="model-ul">
                    <li><a href="/">model S</a></li>
                    <li><a href="#">model 3</a></li>
                    <li><a href="#">model X</a></li>
                    <li><a href="#">model Y</a></li>
                </ul>
            </Menu>

            <RightMenu>
                <a href="#">shop</a>
                <a href="#">account</a>
                <Hamburger onClick={()=>{setBurgerStatus(true);console.log(burgerStatus)}}>
                    <SubBurger></SubBurger>
                    <SubBurger></SubBurger>
                    <SubBurger></SubBurger>
                </Hamburger>
            </RightMenu>
           </MainMenu>

                <HamburgerNav className={burgerStatus?'close':'open'}>
                            <Close onClick={()=>{setBurgerStatus(false);console.log(burgerStatus)}}>
                            <FirstCross></FirstCross>
                            <SecondCross></SecondCross>
                            </Close>
                    <li><a>model 3</a></li>
                    <li><a>model X</a></li>
                    <li><a>model Y</a></li>
                    <li><a>model Z</a></li>
                    <li><a>account</a></li>
                    <li><a>inventory</a></li>
                    <li><a>exixting inventory</a></li>
                    <li><a>inventory</a></li>
                    <li><a>shop</a></li>
                    <li><a>cyber truck</a></li>
                    <li><a>upcoming</a></li>
                </HamburgerNav>
        </Container>

    );
}
export default Header;

const Container= styled.div`
height:50px;
display:flex;
align-items:center;
position:fixed;
left:0;
right:0;
top:0;
justify-content:space-between;
text-transform:uppercase;
font-weight:400;
z-index:100;

.open{
    transform: translateX(100%);
    }
.close{
      transform: translateX(0%);
}

`
const MainMenu = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
min-width:70%;

`

const Menu = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 @media screen and (max-width:852px){
    display:none;
}
  
`
const RightMenu = styled.div`
display:flex;
align-items:center;

a{
    text-decoration:none;
    color:black;
    margin-right:.7rem;
    flex-wrap:no-wrap;
    @media screen and (max-width:500px){
        display:none;
    }
    
}
@media screen and (max-width:852px){
    position:absolute;
    right:0;
   }
`

const Hamburger= styled.div`
width:1.5rem;
height:1.5rem;
right:10px;
top:10px;
display:grid;
grid-template-rows:repeat(3,1fr);
grid-template-columns:repeat(1,1fr);
margin-right:2rem;
cursor:pointer;
`
const SubBurger= styled.div`
height:.17rem;
width:100%;
background:black;
border-radius:6px;
`

const HamburgerNav = styled.div`
background:white;
position:absolute;
top:0;
bottom:0;
right:0;
width:300px;
height:100vh;
  li{
      
      list-style-type:none;
      padding:1rem;
      border-bottom:1px solid grey;

  }
  li:nth-child(1){
      margin-top:1rem;
  } 
  overflow:scroll;
  transition:.4s ease-in-out;
`
const Close = styled.div`
width:1.5rem;
height:1.5rem;
position:relative;
left:250px;
margin-top:.5rem;
display:flex;
justify-content:space-evenly;
flex-direction:column;
cursor:pointer;
`
const FirstCross = styled.div`
width:100%;
height:4px;
background:black;
transform:rotate(45deg);
border-radius:3px;

`
const SecondCross = styled(FirstCross)`
transform:rotate(-45deg);
position:absolute;
`