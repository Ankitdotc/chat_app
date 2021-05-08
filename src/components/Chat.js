import React, {useEffect} from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import {useParams} from 'react-router-dom'
import { useState } from 'react'
import firebase from "firebase"

function Chat({user}) {

    let { groupId } = useParams();
    const [ group, setGroup ] = useState();
    const [ messages, setMessages ] = useState([])

    useEffect(()=>{
        const getMessages = () => {
            db.collection('rooms')
            .doc(groupId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot)=>{
                let messages = snapshot.docs.map((doc) => doc.data())
                setMessages(messages)
            })
        }
        
        const getGroup = () => {
            db.collection('rooms')
            .doc(groupId)
            .onSnapshot((snapshot)=>{
                setGroup(snapshot.data());
            })
        }
        
        getGroup();
        getMessages();  
    }, [groupId])
    
        const sendMessage = (text) => {
        if(groupId){
            let payload = {
                text : text,
                user : user.name,
                userImage : user.photo,
                timestamp : firebase.firestore.Timestamp.now()
            }
            db.collection('rooms').doc(groupId).collection('messages').add(payload);
        }
    }



    return (
        <Container>
            <Header>
                <Group>
                    <GroupName>
                        • {group && group.name}
                    </GroupName>
                    <GroupInfo>
                        <small>Your messages are safe & secure.</small>
                    </GroupInfo>
                </Group>
            </Header>
            <MessageContainer>
            {
                messages.length > 0 &&
                messages.map((data, index)=>(
                <ChatMessage
                    text={data.text}
                    name={data.name}
                    image={data.userImage}
                    timestamp={data.timestamp}
                />
                ))
            }
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </Container>
    )
}

export default Chat
const Container = styled.div`
    display: grid;
    grid-template-rows: 90px auto min-content;
    min-height: 0;
    background-color: #FDE68A; 
`
const Header = styled.div`
    padding-left: 40px;
    padding-right: 30px;
    display: flex;
    align-items: center;
    border-bottom: 10px solid #1F2937;
    justify-content: space-between;
`
const Group = styled.div`
`
const GroupName = styled.div`
    font-weight: 900;
`
const GroupInfo = styled.div`
    font-weight: 500;
    font-size: 23px;
    margin-top: 12px;
`
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
 `   




