import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import styled from "styled-components"
import { MyDot } from "./mydot"
import { GiHamburgerMenu } from "react-icons/gi"

const ToggleStyled = styled.button`
  color: white;
  font-size: 2rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`
const HeaderStyled = styled.div`
  background: #212121;
  border-bottom: 1px #707176 solid;
  animation: pulseblk 6s 1;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
  }
`
const HeaderDivStyled = styled.div`
  padding: 0 1.0875rem;
  
  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    
    div:nth-child(2) {
      text-align: center;
      flex: 1 1 0px;
    }
    
    h1{
     margin: auto;
     width: 7rem;
    } 
 
  }
`

const NavStyled = styled.div`
  display: ${props => props.display};
  font-family: Poppins;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color:white;
  background:#212121;
  ul{
    margin: 0;
  }
  
  li{
    border-top: 1px solid #707176;
    list-style: none;
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 0rem;
  }
  
  a{
    text-decoration: none;
    color: gray;
  }
  a:hover{
    text-decoration: none;
    cursor: pointer;
    background:#2a2c33;
    transition: 0.3s;
  }
  a:hover{
    cursor: pointer;
  }
  display: ${props => props.toggled ? 'none':'inherit'} ;

  
  @media (min-width: 768px) {
    display: inherit;
    margin-right: 7rem;
    animation: pulseblk 6s 1;

    ul{
      display: flex;  
      justify-content: center;
    }
    
    li{
      padding: 0 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-top: none;
      border-right: 1px solid #707176;
      
      a{
        color: white;
      }
    }
     
    a:hover{
      text-decoration: none;
      cursor: pointer;
      background:inherit;
      color: gray;

    
    a{
      transition: 0.7s;
    }
  } 
    li:last-child{
      border-top: none;
      border-right: none;
    }
  } 
`

NavStyled.defaultProps = {
  display: "visible",
}

const Header = ({ siteTitle }) => {
  const [count, setCount] = useState(0);
  const [toggled, setToggled] = useState(true);

 return <HeaderStyled>
    <HeaderDivStyled
      style={{
        margin: `0 auto`,
        //maxWidth: 960,
        padding: `0 1.0875rem`,
      }}
    >
      <div>
      <h1 style={{ fontFamily: `Poppins`, fontSize: `2rem`, fontWeight: 600 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}<MyDot/>
        </Link>
      </h1>

        <ToggleStyled onClick={() => setToggled(!toggled)}>
          <GiHamburgerMenu/>
        </ToggleStyled>
      </div>
     {/* <NavStyled style={{display: toggled? `none`:`inherit`}}>*/}
      <NavStyled toggled={toggled}>
        <ul id="navigation" >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#skills">Skills</Link></li>
          <li><Link to="/#projects-experience">Projects experience</Link></li>
          <li><Link to="/#contact" activeStyle={{ color: "#d97478" }}>Contact</Link></li>
        </ul>
      </NavStyled>
    </HeaderDivStyled>
  </HeaderStyled>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
