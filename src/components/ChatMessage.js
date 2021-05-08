import React from 'react'
import styled from 'styled-components'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} alt=""/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toTimeString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #E5E7EB;
        transition: background-color .5s;
    }
`
const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;

    img{
        width:100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 900;
    font-size: 25px;
    line-height: 1.5;
    span{
        margin-left: 15px;
        font-weight: 400;
        color: #a09797;
        font-size: 12px;
    }
`
const Text = styled.span`
`