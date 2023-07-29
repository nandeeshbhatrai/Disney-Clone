import React from 'react'
import {auth, provider} from "../firebase"
import styled from "styled-components"
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
} from "../features/user/userSlice"
import {useDispatch, useSelector} from 'react-redux'
// import Login from './Login';

function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            let user= result.user;
            console.log(result);
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,

            }))
        })
    }

  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      {
        !userName ? (
        <LoginContainer>
            <Login onClick={signIn}>Login</Login>
        </LoginContainer>
        ):

        <>
        
        <NavMenu>
          <a>
              <img src='/images/home-icon.svg' />
              <span>Home</span>
          </a>
          <a>
              <img src='/images/search-icon.svg' />
              <span>Search</span>
          </a>
          <a>
              <img src='/images/watchlist-icon.svg' />
              <span>WatchList</span>
          </a>
          <a>
              <img src='/images/original-icon.svg' />
              <span>Originals</span>
          </a>
          <a>
              <img src='/images/movie-icon.svg' />
              <span>Movies</span>
          </a>
          <a>
              <img src='/images/series-icon.svg' />
              <span>Series</span>
          </a>
  
        </NavMenu>
        <UserImg src = 'https://i.stack.imgur.com/aF0dE.jpg?s=256&g=1'/>
        </>
      }
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;

        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &: hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 250ms;
    cursor: pointer;

    &:hover{
        background-color: white;
        color:black;
        border-color: transparent;
    }

`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`


