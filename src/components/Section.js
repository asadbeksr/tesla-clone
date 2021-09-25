import React  from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage = {props.backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{ props.title }</h1>
                <p>{ props.description }</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                   { props.leftBtnText }
                </LeftButton>
                
                { props.rightBtnText && 
                     <RightButton>
                   { props.rightBtnText }
                </RightButton>
                }
               
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg">

            </DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;   
    background-image: url('./images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    background-image: ${props =>   `url("/images/${props.bgImage}")` };
    
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
z-index: -1;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 18px;
@media (max-width: 760px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`
    cursor: pointer;
    background-color: rgba(23, 26, 32, 0.8);
    backdrop-filter: blur(5px);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
background-color: #fff;
color: #393c41;
opacity: 0.65;
`
const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
   
`

const Buttons = styled.div`

`