import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice' ;
import { useSelector } from 'react-redux'



function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (       
        <Container>            
            <a>
                <img src="./images/logo-tesla.svg" alt="tesla-logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                    <a key={index} href="#">{car}</a>                    
                ))}     
                
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            <CustomMenu  onClick={()=> setBurgerStatus(true)} >
                <p>Menu</p>
            </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose  onClick={()=> setBurgerStatus(false)} />
                </CloseWrapper>
                 {cars && cars.map((car, index)=>(
                    <li key={index} ><a href='#'> {car} </a></li>                  
                ))}   
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Use Inventory</a></li>
                <li><a href='#'>Trade In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>More</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px 0 10px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;   
    margin-top: -16px;
    
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

 a {  
      font-weight: 600;      
      flex-wrap: nowrap;
      font-size: 16px;
      padding: 7px 15px;    
      
  }
  a:hover{
    background-color: rgba(155, 155, 155, .25);  
    backdrop-filter: blur(5px);  
    border-radius: 12px;
  }
  @media (max-width: 988px) {
      display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {  font-weight: 600;      
      flex-wrap: nowrap;
      font-size: 16px;
      padding: 7px 15px;  
     margin-right: 10px;
      @media (max-width: 980px) {
      display: none;
  }
    }
    a:hover{
      background: rgba(167, 165, 165, 0.3);      
      border-radius: 12px;

  }

 
`

const CustomMenu = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    
    p {
         background-color: rgba(155, 155, 155, .25);  
         backdrop-filter: blur(5px);
         padding: 7px 15px;
         color: #000;
         border-radius: 12px;
    }
    

`
const BurgerNav = styled.div`  
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;   
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.2s ease-in;
  li {
      padding: 15px 0;
      
      padding: 7px 15px;

      a {
          font-weight: 600;
      }
  }
   li:hover {
       background-color: rgba(155, 155, 155, .25);  
         backdrop-filter: blur(5px);
         padding: 7px 15px;
         color: #000;
         border-radius: 12px;

   }
   overflow-y: scroll;

`

const CustomClose = styled(CloseIcon)`

`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
cursor: pointer;
`