import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
// import { useHistory } from 'react-router-dom'

function Login(props) {

    // let history = useHistory()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=> {
            const newUser ={
                name: result.user.displayName,
                photo: result.user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser)
        })
        .catch((error)=> {
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <LogoImg>
                    {/* <img src="https://img.icons8.com/cute-clipart/50/000000/chat.png" alt=""/> */}
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18166813.jpg" alt=""/>
                </LogoImg>
                <h1><strong>💥 🔥Welcome to my chat world 👋 ✌️</strong></h1>
                <SignInButton onClick={()=> signIn()}>
                    Please log in with your google account
                </SignInButton>
                {/* <DummyLogIn>
                    <button onClick={()=>Login("aoduw@gmail.com","aoduw@gmail.com").then(()=>history.push("/"))}>
                  Login with Dummy account?
                    </button>
                </DummyLogIn> */}
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background: white;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`
const LogoImg = styled.div`
    img{
        height: 100px;
    }
`
const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #272424;
    color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
`
// const DummyLogIn = styled.div`
// `