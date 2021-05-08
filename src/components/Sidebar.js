import React from 'react'
import styled from 'styled-components'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import db from '../firebase';
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const History = useHistory();

    const goToGroup = (id) => {
        if(id){
            History.push(`/room/${id}`)
        }
    }

    const AddGroup = () => {
        const promptName = prompt("Enter a group name")
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    const DeleteGroup = (id) => {
            window.confirm(`Do you want to delete the group?`)
            db.collection('rooms').doc(id).delete()
        }

    return (
        <Container>
            <NameContainer>
                    <h3>Group Chat</h3>
                    
            </NameContainer>
            <MainGroups>
            <AddGroups>
                Add any group 
            <GroupLogo>
                <AddCircleTwoToneIcon onClick={AddGroup}/>
            </GroupLogo>
            </AddGroups>
                {
                    props.rooms.map(item => (
                        <ItemContainer onClick={()=> goToGroup(item.id)}>
                            <span>
                                • {item.name} 
                                <DeleteForeverTwoToneIcon onClick={() => DeleteGroup(item.id)}/>
                            </span>
                        </ItemContainer>
                    ))
                }
            </MainGroups>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #FEF3C7;
`
const NameContainer = styled.div`
    color: black;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    justify-content: space-between;
    border-bottom: 1px solid #11a5ec;

    img{
        margin-right: 25px;
        cursor: pointer;
    }
`
const MainGroups = styled.div`
    padding-top: 20px;
`
const AddGroups = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: x-large;
     border-bottom: 1px solid #11a5ec;
`
const GroupLogo = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center
`
const ItemContainer = styled.div`
    // color: #272424;
    display: grid;
    height: 40px;
    align-items: center;
    margin-top: 15px;
    padding-left: 20px;
    cursor: pointer;
    font-size: large;
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 5px;
    }
    :hover{
        background: #DDD6FE;
    }
`
