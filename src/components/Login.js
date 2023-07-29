import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo1 src='/images/cta-logo-one.svg' />
        <SignUp>
            GET ALL THERE
        </SignUp>
        <Description>
Get premiere acces to Raya and The Last Dragon for an additional fee with a Disney+ subscription.
As of 20/06/23, the price of Disney+ and the Disney Bundle will increase by $1.
        </Description>
        <CTALogo2 src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc( 100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:before{
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top:0;
        bottom:0;
        content:'';
        left: 0;
        right: 0;
        opacity: 0.4;
        background-image: url(/images/login-background.jpg);
        z-index: -1;
    }
`


const CTA = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    padding: 80px 40px;
    width: 90%;
    justify-content: center;
    `
    
    
    const CTALogo1 = styled.img`
    
    `
    
    
    const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    text-align: center;
    font-weight: bold;
    padding:17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms ;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }


`

const CTALogo2 = styled.img`
    padding: 5px 5px;
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`


