import React from 'react'
import styled from 'styled-components'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone'; 

function Header({user, signOut}) {
    return (
        <Container>
            <UserInformation>
                <Name>
                    <h4>{user.name}</h4>
                </Name>
                <UserImage onClick={signOut}>
                    <ExitToAppTwoToneIcon/>
                </UserImage>
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
const UserImage = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 2px;
    border: 1px solid ;
    cursor: pointer;
`