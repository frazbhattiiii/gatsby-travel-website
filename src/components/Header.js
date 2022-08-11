import React        from 'react';
import { Link }     from 'gatsby';
import styled       from 'styled-components';
import { FaBars }   from 'react-icons/fa';
import { menuData } from "../data/MenuData";
import { Button }   from "./Button";

function Header ( props ) {
    return (
        <>
            <Nav>
                <NavLink to="/">TravelX</NavLink>
                <Bars/>
                <NavMenu>
                    {
                        menuData.map( ( item, index ) => {
                            console.log(item)
                            return (
                                <NavLink key={index} to={item.path}>
                                    {item.title}
                                </NavLink>
                            )
                        } )
                    }

                </NavMenu>
                <NavBtn>
                    <Button primary='true' round='true' to='/trips'>
                        Book a flight
                    </Button>
                </NavBtn>
            </Nav>
        </>

    );
}

export default Header;

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 99;
  position: relative;
`;
const NavLink = styled ( Link )`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Bars = styled ( FaBars )`
  display: none;
    color: white;
    
    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
`;
const NavMenu = styled.div`
    display: flex;
    align-items:center;
  margin-right: -48px;
    @media (max-width: 768px) {
        display: none;
        }
`;
const NavBtn = styled.div`
    display: flex;   
    align-items: center;
    margin-right: 24px;
   
    @media (max-width: 768px) {
        display: none;
    }
`;

        
