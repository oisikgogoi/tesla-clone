import react from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import proptypes from 'prop-types'
 function Section({maintext,background,subText,btn1,btn2,TchlessDelevery}){
return(
      <Component bgImage={background}>
        <Fade bottom >
      <Text>
        <MainText>
          {maintext}
        </MainText>
       { subText && <SubText>
          {subText} {TchlessDelevery?<span><a href="#">touchless delevery</a></span>:""}
          </SubText>
          }
        </Text></Fade><Wrap>
        <Fade bottom >
        <Buttons>

          <Button1>
            {btn1}
          </Button1>

        {btn2 && <Button2>
            {btn2}
        </Button2>
        } 

        </Buttons>
        </Fade>


        <Arrow >
        </Arrow>
        </Wrap>
      </Component>
    );
}
export default Section;

Section.defaultProps = {
  subText:"Order Online for ",
  btn1:"Custom order",
}

Section.propTypes={
  subText:proptypes.string
}
const Wrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Component = styled(Wrap)`
width:100%;
height:100vh;
justify-content:space-between;
flex-direction:column;
background-image:${props=> ` url("/images/${props.bgImage}") ` };
background-position:center;
background-size:cover;

`
const Text = styled(Wrap)`
margin-top:40px;
flex-direction:column;
justify-content:center;
`
const MainText = styled.div`
color:black;
font-size:30px;
text-transform:uppercase;
margin:2rem 0 0 0;
font-weight:600;
`
const SubText = styled(MainText)`
font-size:12px;
color:black;
margin:.6rem;

`
const Buttons = styled.div`
display:flex;
@media(max-width:600px){
  flex-direction:column;
  width:80%;
}
`
const Button1=styled(Wrap)`
width:18rem;
height:2.5rem;
background:black;
text-transform:uppercase;
opacity:.8;
color:white;
border-radius:2rem;
margin:.4rem;
cursor:pointer;
font-size:15px;

@media(max-width:500px){
  height:2.5rem;
  font-size:13.5px;
`
const Button2 = styled(Button1)`
background:white;
opacity:.8;
color:black;
`
const Arrow = styled.div`
width:40px;
height:40px;
background:url('images/downarrow.svg');
animation:updown 2s infinite;

`
