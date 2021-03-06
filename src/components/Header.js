import React from 'react'
import styled from 'styled-components'
 

function Header({user, signOut}) {
    return (
        <Container>
            <UserInformation>
                <Name>
                    <h4>{user.name}</h4>
                </Name>
                
                <button type="button"className="sign-out" onClick={() => {signOut()}}><span>Sign Out</span></button>
            </UserInformation>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex; 
    background-color: #6EE7B7;
    // z-index: 10;
    // box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`
const UserInformation = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    padding-right: 15px;
    right: 0
`
const Name = styled.div`
    padding-right: 15px;
`
const button  = styled.button`
    margin-top: 50px;
    background-color: #6B7280;
    color: white;
    border: bold;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`

